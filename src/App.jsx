
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

function App() {


  return (
    <>
      <div className='relative'>
        <section className='bg-black '>
          <Navbar />
          <Header />

        </section>
        <section className='bg-[#fff] dark:bg-[#191919] '>
          <CardsFeatures />

        </section>
        <section className='bg-[#f8f9fc] dark:bg-[#101010] pb-10 '>
          <PortFolio />

        </section>
        <section className='bg-[#191919] '>
          <Facts />

        </section>
        <section className='bg-[#f8f9fc] '>
          <Team />

        </section>
        <section className='bg-white '>
          <Customer />

        </section>
        <section className='bg-[#f8f9fc]'>
          <News />

        </section>
        <section className='bg-[#fff]'>
          <Brands />

        </section>
        <section className='bg-[#1c1d23]'>
          <Footer />

        </section>
        <div className='fixed bottom-10'>
          <Darkmod />
        </div>

      </div>

    </>
  )
}

export default App