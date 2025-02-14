import  Navbar from './components/Navbar/Navbar.jsx'
import Hero from './components/Hero/Hero.jsx'
import Products from './components/Products/Products.jsx'
import React from 'react'
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import AOS from "aos";
import "aos/dist/aos.css" ;
import TopProducts from './components/TopProducts/TopProducts.jsx'
import Banner from './components/Banner/Banner.jsx'
import Subscribe from './components/Subscribe/Subscribe.jsx'
import Testimonial from './components/Testimonial/Testimonial.jsx'
import Footer from './components/Footer/Footer.jsx'
import Popup from './components/Popup/Popup.jsx'
import Shoes from './components/Shoes/Shoes.jsx'


const App = () => {
  const [orderPopup, setOrderPopup] = React.useState(false)

  const handlePopup = () =>{
    setOrderPopup(!orderPopup);
  }
  React.useEffect(()=>{
    AOS.init({
      offset: 100,
      duration: 100,
      easing: 'ease-in-sine',
      delay:100
    });
    AOS.refresh();
  },[]);
  
const [darkMode, setDarkMode] = React.useState(true)

  const toggleMode = ()=>{
    setDarkMode((prevState)=>!prevState)
  }

  return (
    <>
      <div className={`${darkMode && "dark"}`}>
        <section id='home' >
          <Navbar darkMode={darkMode} toggleMode={toggleMode} handlePopup={handlePopup}/>
        </section>
        <Hero handlePopup={handlePopup}/>
        <section id='allwears'>
          <Products handlePopup={handlePopup}/>
        </section>
        <section id='services'>
          <TopProducts handlePopup={handlePopup}/>
        </section>
        <section id='services'>
          <Shoes handlePopup={handlePopup}/>
        </section>
        <section id='bestselling'>
          <Banner/>
        </section>
        <Subscribe/>
        <section id='testmonials'>
          <Testimonial/>
        </section>
        <Footer/>
        <Popup orderPopup={orderPopup}
               setOrderPopup={setOrderPopup}
               />
      </div>
      <ToastContainer/>
    
    </>
    
  )
}

export default App
