import React from 'react'
import Navbar from '../Component/Navbar/Navbar'
import OtherHero from '../Component/Hero/OtherHero'
const Resto = () => {
  const aboutstyle = {
    backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(./images/bg_3.jpg)',
    backgroundSize: "cover",
    backgroundPosition: 'center'
  };
  return (
    <div>
       <Navbar herocomponent={ <OtherHero  title="Resto & Bar" current='Resto & Bar'/>} 
     style={aboutstyle} 
     className='other'/>
    </div>
  )
}

export default Resto
