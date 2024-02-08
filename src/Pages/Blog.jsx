import React from 'react'
import Navbar from '../Component/Navbar/Navbar'
import OtherHero from '../Component/Hero/OtherHero'
import Footer from '../Component/Footer/Footer';
const Blog = () => {
  const aboutstyle = {
    backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(./images/bg_3.jpg)',
    backgroundSize: "cover",
    backgroundPosition: 'center',
    height:"85vh"
  };
  return (
    <>
      <Navbar herocomponent={ <OtherHero  title="Blog" current='Blog'/>} 
     style={aboutstyle} 
     className='other'/>
     <Footer/>
    </>
  )
}

export default Blog
