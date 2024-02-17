
import { useEffect } from 'react'
import './App.css'
import CardsFeatures from './component/CardsFeatures/CardsFeatures'
import Brands from './component/brandlogo/Brands'
import Darkmod from './component/darkmood/Darkmod'
import Facts from './component/facts/Facts'
import Footer from './component/footer/Footer'
import Header from './component/header/Header'
import Navbar from './component/navbar/Navbar'
import News from './component/news/News'
import PortFolio from './component/portfolio/PortFolio'
import Customer from './component/sustomergallery/Customer'
import Team from './component/team/Team'
import AOS from 'aos';
import 'aos/dist/aos.css';
import ScrollToTop from "react-scroll-to-top";

function App() {

  useEffect( () => {
    AOS.init();
  }, [])


  return (
    <>
      <div className='relative' >
        <section className='bg-black '>
          <Navbar />
          <Header />

        </section>
        <section className='bg-[#fff] dark:bg-[#191919] ' id='cards'>
          <CardsFeatures />

        </section>
        <section className='bg-[#efefef] dark:bg-[#101010] pb-10 ' id='Portfolio'>
          <PortFolio />

        </section>
        <section className='bg-[#191919] ' id='Facts'>
          <Facts />

        </section>
        <section className='bg-[#f8f9fc] dark:bg-[#101010]' id='Team'>
          <Team />

        </section>
        <section className='bg-white dark:bg-[#191919] ' id='Testimonials'>
          <Customer />

        </section>
        <section className='bg-[#f8f9fc] dark:bg-[#101010] dark:text-white' id='News'>
          <News />

        </section>
        <section className='bg-[#fff] dark:bg-[#191919]' id='Sponserd'>
          <Brands />

        </section>
        <section className='bg-[#1c1d23]' >
          <Footer />

        </section>
        <div className='fixed bottom-10 left-4'>
          <Darkmod />
        </div>

      </div>
      <div>
      <ScrollToTop  smooth />
      </div>
      
    </>
  )
}

export default App
