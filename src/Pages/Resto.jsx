import React from 'react'
import Navbar from '../Component/Navbar/Navbar'
import OtherHero from '../Component/Hero/OtherHero'
import RestoSec from '../Component/Resto/Resto';
import Footer from '../Component/Footer/Footer';
import ImageSec from '../Component/Footer/ImageSec';
const Resto = () => {
  const aboutstyle = {
    backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(./images/bg_3.jpg)',
    backgroundSize: "cover",
    backgroundPosition: 'center',
    height:"85vh"
  };
  return (
    <>
       <Navbar herocomponent={ <OtherHero  title="Resto & Bar" current='Resto & Bar'/>} 
     style={aboutstyle} 
     className='other'/>
    <RestoSec/>
    <ImageSec/>
     <Footer/>
    </>
  )
}

export default Resto
