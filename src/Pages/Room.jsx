import React from 'react'
import Navbar from '../Component/Navbar/Navbar'
import OtherHero from '../Component/Hero/OtherHero'
const Room = () => {
  const aboutstyle = {
    backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(./images/bg_3.jpg)',
    backgroundSize: "cover",
    backgroundPosition: 'center',
    height:"85vh"
  };
  return (
    <div>
       <Navbar herocomponent={ <OtherHero  title="Rooms" current='Room'/>} 
     style={aboutstyle} 
     className='other'/>
    </div>
  )
}

export default Room
