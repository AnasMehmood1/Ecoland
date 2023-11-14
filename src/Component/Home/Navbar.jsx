import React, { useState } from 'react'
import "./Navbar.css"
// import { Link } from 'react-router-dom'

const Navbar = () => {
   const[showMenu,setShowMenu]=useState(false)
  return (
   <>
    <div className="hero">
    <div className="nav">
    <div className="navbar">
        <div className="logo">
            <h1>Ecoland</h1>
        </div>
       
        <div className={showMenu ?"menu active":"menu"}>
            <ul className="menu-list">
              <a href=""><li>Home</li></a>
             
              <a href=""> <li>Services</li></a>
              <a href=""><li>About</li></a>
             <a href=""> <li>Destination</li></a>
             <a href=""> <li>Hotel</li></a>
              <a href=""><li>Restaurant</li></a>
              <a href=""><li>Blog</li></a>
           <a href="">   <li>Contact</li></a>
            </ul>
        </div>
        <div className="hamburger"onClick={()=> setShowMenu(!showMenu)}>
        <i class="fa-solid fa-bars"></i>
        </div>
    </div>
    </div>
   
  
  
  <div className="image">
  <img className='img' src="/images/blob-shape-3.svg" alt="" />
  </div>


<div className="container">
    <div className="col-1">
       <div className="inner-col">
       <p>Discover Greece</p>
        <h1 className='heading'>Explore Your Travel Destinations Like Never Before</h1>
        <p className="description">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum maiores corporis reiciendis illo nisi sapiente suscipit nostrum soluta architecto eos, incidunt nulla debitis doloremque cum perspiciatis quae. Odio, nulla asperiores.
        </p>
        <button className="discover">Discover</button>
       </div>
    </div>
    <div className="col-2" style={{backgroundImage: `url("./images/bg_1.jpg")`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover"
    }}>
        <div className="greece">
      <h1 style={{backgroundImage: `url("./images/bg_1.jpg")`,
                 backgroundSize: "cover",
                color:"transparent",
                WebkitBackgroundClip:"text"
            }}>GREECE</h1>  
        </div>
    </div>
</div>
  </div>
 
 <div className="container-2">
    <span>SEXY & HEALTHY</span>
    <h1>Where do you want to go?</h1>
    <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia</p>
   <div className="input-box">
   <div className="destination">
       <h5>Destination</h5>
        <input type="text"  placeholder='Search place'/>
    </div>
    <div className="destination">
       <h5>Check-in date</h5>
        <input type="text" placeholder='Check In Date'/>
    </div>
    <div className="destination">
      <h5>Check-out date</h5>
        <input type="text" placeholder='Check Out Date'/>
    </div>
    <div className="destination">
       <h5>Price Limit</h5>
        <input type="text" placeholder='$5,000' />
    </div>
   <div className="destination">
    <button>Search</button>
   </div>
   </div>
 </div>
 
   </>
  )
}

export default Navbar
