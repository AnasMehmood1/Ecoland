import React, { useState } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom'
const Navbar = ({herocomponent ,style, className = ''}) => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
   <>
   <div className={`bg ${className}`} style={style}>
   <nav className="navbar">
      <div className="logo"> <p>Unwind </p><br /><span>Hotel Booking</span>
</div>
      <ul className="desmenu">
        <li className="des-nav">
          <Link to="/" className="des-link">HOME</Link>
        </li>
        <li className="des-nav">
          <Link to='/about' className="des-link">ABOUT</Link>
        </li>
        <li className="des-nav">
          <Link to='/room'  className="des-link">ROOMS</Link>
        </li>
        <li className="des-nav">
          <Link to='/resto' className="des-link">RESTO & BAR</Link>
        </li>
        <li className="des-nav">
          <Link to='/blog' className="des-link">BLOG</ Link>
        </li>
        <li className="des-nav">
          <Link to='/contact' className="des-link">CONTACT</Link>
        </li>
      </ul>

      {/* --------mobile----------------- */}
      <ul className={`nav-links ${isMobileMenuOpen ? 'active' : ''}`}>
        <li id='home' className="nav-item">
          <Link to="/" className="nav-link">HOME</Link>
        </li>
        <li className="nav-item">
          <Link to='/about' className="nav-link">ABOUT</Link>
        </li>
        <li className="nav-item">
          <Link to='/room' className="nav-link">ROOMS</Link>
        </li>
        <li className="nav-item">
          <Link to='/resto'  className="nav-link">RESTO & BAR</Link>
        </li>
        <li className="nav-item">
          <Link to='/blog' className="nav-link">BLOG</Link>
        </li>
        <li id='contact' className="nav-item">
          <Link to='/contact' className="nav-link">CONTACT</Link>
        </li>
      </ul>
      <div className="navbar-toggler" onClick={toggleMobileMenu}>
        ☰ MENU
      </div>
    </nav>
{herocomponent}
     </div>
   </>

  );
};

export default Navbar;
