import {useState, useEffect} from "react";
import { FaChevronUp } from "react-icons/fa";

const ScrollTop = () => {

    const [show, setShow] = useState(false)

    const showBtn = () => {
        if (window.scrollY > 30) {
            setShow(true);
        } else {
            setShow(false);
        }
    }

    useEffect(() => {
        showBtn();
        window.addEventListener('scroll', showBtn);
    }, []);

    const toTop = () => {
        document.documentElement.scrollTop = 0
    }

    return (
        <>
            <div className={show ? 'scrollBtnActive' : 'scrollBtn'} onClick={toTop}>
                <FaChevronUp />
            </div>
        </>
    );
};

export default ScrollTop;