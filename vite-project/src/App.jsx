import Nav from './components/Nav.jsx'
import Hero from './components/Hero.jsx'
import PopularProducts from './components/PopularProducts.jsx'
import SuperQuality from './components/SuperQuality.jsx'
import Services from './components/Services.jsx'
import SpecialOffer from './components/SpecialOffer.jsx'
import CustomerReviews from './components/CustomerReviews.jsx'
import Subscribe from './components/Subscribe.jsx'
import Footer from './components/Footer.jsx'



const App = () => {
  return (
    <>
      <main className="relative">
        <Nav />
        <section className="xl:padding-l wide:padding-r padding-b">
          <Hero />
        </section>
        <section className="padding">
          <PopularProducts />
        </section>
        <section className="padding">
          <SuperQuality  />
        </section>
        <section className="padding-x py-10">
          <Services />
        </section>
        <section className="padding">
          <SpecialOffer />
        </section>
        <section className="bg-blue-50 padding">
          <CustomerReviews />
        </section>
        <section className="padding-x sm:py-32 py-16 w-full">
          <Subscribe />
        </section>
        <section className="bg-black padding-x padding-t pb-8">
          <Footer />
        </section>
      </main>
    </>
  )
}

export default App;