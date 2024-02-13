import React from 'react'
import Navbar from "../Component/Navbar/Navbar"
import Check from '../Component/Checkin/Check'
import AboutSec from '../Component/AboutSec/AboutSec'
import Hero from '../Component/Hero/Hero'
import ServiceSec from '../Component/ServiceSec/ServiceSec'
import ServiceImage from "../Component/ServiceSec/ServiceImage"
import Footer from '../Component/Footer/Footer'
import RoomSec from '../Component/Room/RoomSec'
import Tour from '../Component/Room/Tour'
import RestoTilte from '../Component/Resto/RestoTilte'
import BlogTitle from '../Component/Blog/BlogTitle'
import ImageSec from '../Component/Footer/ImageSec'
import Testimonial from '../Component/Testimonial/Testimonial'
import CounterSec from '../Component/Testimonial/CounterSec'
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
    <ServiceSec/>
    <ServiceImage/>
    <RoomSec/>
    <Tour/>
    <RestoTilte/>
    <Testimonial/>
    <CounterSec/>
    <BlogTitle/>
    <ImageSec/>
    <Footer/>
    </>
  )
}

export default Home
