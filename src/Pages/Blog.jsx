import React from 'react'
import Navbar from '../Component/Navbar/Navbar'
import OtherHero from '../Component/Hero/OtherHero'
const Blog = () => {
  const aboutstyle = {
    backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(./images/bg_3.jpg)',
    backgroundSize: "cover",
    backgroundPosition: 'center'
  };
  return (
    <>
      <Navbar herocomponent={ <OtherHero  title="Blog" current='Blog'/>} 
     style={aboutstyle} 
     className='other'/>
    </>
  )
}

export default Blog
