import Navbar from './Navbar/Navbar';
import Hero from './Hero/Hero';
import PopularProducts from './PopularProducts/PopularProducts';
import SuperQuality from './SuperQuality/SuperQuality';
import Services from './Services/Services';
import SpecialOffer from './SpecialOffer/SpecialOffer';
import CustomerReviews from './CustomerReviews/CustomerReviews';
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
            <PopularProducts />
        </section>
        <section className="padding">
            <SuperQuality />
        </section>
        <section className="padding-x py-10">
            <Services />
        </section>
        <section className="padding">
            <SpecialOffer />
        </section>
        <section className="bg-pale-blue padding">
            <CustomerReviews />
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