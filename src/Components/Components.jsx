import Navbar from './Navbar/Navbar';
import Hero from './Hero/Hero';
import Products from './Products/Products';
import Quality from './Quality/Quality';
import Services from './Services/Services';
import SpecialOffer from './SpecialOffer/SpecialOffer';
import Reviews from './Reviews/Reviews';
import Subscribe from './Subscribe/Subscribe';
import Footer from './Footer/Footer';

const Components = () => {
  return (
    <main className="relative">
        <Navbar />
        <section className="xl:padding-1 wide:padding-r padding-b">
            <Hero/>
        </section>
        <section className="padding">
            <Products />
        </section>
        <section className="padding">
            <Quality />
        </section>
        <section className="padding-x py-10">
            <Services />
        </section>
        <section className="padding">
            <SpecialOffer />
        </section>
        <section className="bg-pale-blue padding">
            <Reviews />
        </section>
        <section className="padding-x sm:py-32 py-16 w-full">
            <Subscribe />
        </section>
        <section className="bg-black padding-x padding-t pb-8">
            <Footer />
        </section>
    </main>
  )
}

export default Components