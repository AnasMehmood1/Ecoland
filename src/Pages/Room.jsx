import React from 'react'
import Navbar from '../Component/Navbar/Navbar'
import OtherHero from '../Component/Hero/OtherHero'
import Check from '../Component/Checkin/Check';
import Footer from '../Component/Footer/Footer';
const Room = () => {
  const aboutstyle = {
    backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(./images/bg_3.jpg)',
    backgroundSize: "cover",
    backgroundPosition: 'center',
    height:"85vh"
  };
  return (
    <>
       <Navbar herocomponent={ <OtherHero  title="Cozzy Rooms" current='Room'/>} 
     style={aboutstyle} 
     className='other'/>
       <Check/>
       <Footer/>
    </>
  )
}

export default Room
