import React from 'react'
import Navbar from '../Component/Navbar/Navbar'
import OtherHero from '../Component/Hero/OtherHero'
import AboutSec from '../Component/AboutSec/AboutSec';
import Footer from '../Component/Footer/Footer';
import ImageSec from '../Component/Footer/ImageSec';
import Tour from "../Component/Room/Tour"
import ServiceImage from '../Component/ServiceSec/ServiceImage';
import Testimonial from '../Component/Testimonial/Testimonial';
const About = () => {
  const aboutstyle = {
    backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(./images/bg_3.jpg)',
    backgroundSize: "cover",
    backgroundPosition: 'center',
    height:"85vh",
    marginBottom:"5rem"
  };
  return (
    <>
      <Navbar herocomponent={ <OtherHero  title="About Us" current='About Us'/>} 
     style={aboutstyle} 
     className='other'/>
     <AboutSec/>
     <ServiceImage/>
     <Tour/>
     <Testimonial/>
     <ImageSec/>
     <Footer/>
    </>
  )
}

export default About
