import React from 'react'
import Navbar from "../Component/Navbar/Navbar"
import Check from '../Component/Checkin/Check'
import AboutSec from '../Component/AboutSec/AboutSec'
import Hero from '../Component/Hero/Hero'
import Footer from '../Component/Footer/Footer'
const Home = () => {
    const homestyle = {
        backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(./images/bg_1.jpg)',
        backgroundSize: "cover",
        backgroundPosition: 'center'
      };
  return (
    <>
    <Navbar herocomponent={ <Hero />} 
     style={homestyle} 
     className='bg'/>
     
    <Check/>
    <AboutSec/>
    <Footer/>
    </>
  )
}

export default Home
