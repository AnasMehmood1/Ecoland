import React, { useState } from 'react';
import './Navbar.css';
import Hero from '../Hero/Hero';

const Navbar = ({Heropage}) => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
   <>
   <div className="bg" style={{
    backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.479),rgba(0, 0, 0, 0.4)),url(./images/bg_1.jpg)',
    backgroundSize:"cover"
   }}>
   <nav className="navbar">
      <div className="logo"> <p>Unwind </p><br /><span>Hotel Booking</span>
</div>
      <ul className="desmenu">
        <li className="des-nav">
          <a href="#" className="des-link">HOME</a>
        </li>
        <li className="des-nav">
          <a href="#" className="des-link">ABOUT</a>
        </li>
        <li className="des-nav">
          <a href="#" className="des-link">ROOMS</a>
        </li>
        <li className="des-nav">
          <a href="#" className="des-link">RESTO & BAR</a>
        </li>
        <li className="des-nav">
          <a href="#" className="des-link">BLOG</a>
        </li>
        <li className="des-nav">
          <a href="#" className="des-link">CONTACT</a>
        </li>
      </ul>

      {/* --------mobile----------------- */}
      <ul className={`nav-links ${isMobileMenuOpen ? 'active' : ''}`}>
        <li id='home' className="nav-item">
          <a href="#"  className="nav-link">HOME</a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link">ABOUT</a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link">ROOMS</a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link">RESTO & BAR</a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link">BLOG</a>
        </li>
        <li id='contact' className="nav-item">
          <a href="#" className="nav-link">CONTACT</a>
        </li>
      </ul>
      <div className="navbar-toggler" onClick={toggleMobileMenu}>
        ☰ MENU
      </div>
    </nav>

     <Hero Heropage={Heropage}/>
     </div>
   </>

  );
};

export default Navbar;
