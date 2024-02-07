import React from 'react'
import Navbar from '../Component/Navbar/Navbar'
import OtherHero from '../Component/Hero/OtherHero'
const About = () => {
  const aboutstyle = {
    backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(./images/bg_3.jpg)',
    backgroundSize: "cover",
    backgroundPosition: 'center',
    height:"85vh"
  };
  return (
    <>
      <Navbar herocomponent={ <OtherHero  title="About Us" current='About Us'/>} 
     style={aboutstyle} 
     className='other'/>
    </>
  )
}

export default About
