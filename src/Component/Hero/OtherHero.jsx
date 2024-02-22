import React from 'react'
import "./Other.css"
import { Link } from 'react-router-dom'
const OtherHero = ({current ,title}) => {
  return (
    <>
     <div className="other-hero">
     <div className="inner">
     <div className="links">
      <div className="home-link">
        <Link className='Link' to='/'><p>Home</p></Link>
        <i class="fa-solid fa-angle-right"></i>
      </div>
      <div className="page-link">
      <Link className='Link'>  <p>{current} <i class="fa-solid fa-angle-right"></i></p></Link> 
      </div>
       </div>
       <div className="title">
        <h1>{title}</h1>
       </div>
     </div>
     </div>
    </>
  )
}

export default OtherHero
