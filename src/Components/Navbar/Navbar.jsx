import headerLogo from "../../assets/images/header-logo.svg";
// import hamburger from "../../assets/icons/hamburger.svg";
import { navLinks } from "../Constants/index";
import {useState} from "react";
import {GrMenu, GrClose} from "react-icons/gr"
const Navbar = () => {

  const [toggle, setToggle] = useState(false);
  const handleToggle = () => {
    setToggle(!toggle);
  }

  return (
    <header className="padding-x py-8 absolute z-10 w-full">
      <nav className="flex justify-between items-center max-container">
        <a href="">
          <img src={headerLogo} alt="Logo" width={130} height={29} />
        </a>
        <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
          {navLinks.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="font-montserrat leading-normal text-lg text-slate-gray hover:text-coral-red transition-all duration-300"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="hidden max-lg:block text-3xl" onClick={handleToggle}>
          {toggle ? <GrClose /> : <GrMenu />}
        </div>
        {/*MOBILE MENU*/}
        <ul className={toggle ? "showMenu" : "hideMenu"}>
          {navLinks.map((item) => (
            <li key={item.label} className="my-9">
              <a
                href={item.href}
                className="font-montserrat leading-normal text-lg text-slate-gray hover:text-coral-red transition-all duration-300"
                onClick={handleToggle}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
