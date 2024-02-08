import React from 'react'
import "./Footer.css"
import { Link } from 'react-router-dom'
const Footer = () => {
  return (
    <>
    <div className="footer">
        <div className="ft-logo">
        <Link to='/' className='logo-link'><p className='top'>Unwind </p><br /><span className='bottom'>Hotel Booking</span></Link>
         <p className='ft-des'>A small river named Duden flows  <br />by their place and supplies it with <br /> the necessary regelialia.</p>
         <div className="icons">
            <div><i class="fa-brands fa-twitter"></i></div>
          <div>
          <i class="fa-brands fa-facebook-f"></i>
          </div>
          <div><i class="fa-brands fa-instagram"></i></div>
         </div>
        </div>
        <div className="Service">
            <h2>Services</h2>
           <div className="row">
           <div className="first">
                <li><i class="fa-solid fa-angle-right"></i>Free Wifi</li>
                <li><i class="fa-solid fa-angle-right"></i>Easy Booking</li>
                <li><i class="fa-solid fa-angle-right"></i>Restaurant</li>
                <li><i class="fa-solid fa-angle-right"></i>Swimming Pool</li>
            </div>
            <div className="second">
                <li><i class="fa-solid fa-angle-right"></i>Beauty & Health</li>
                <li><i class="fa-solid fa-angle-right"></i>60" Flatscreen TV</li>
                <li><i class="fa-solid fa-angle-right"></i>Cold Aircondition</li>
                <li><i class="fa-solid fa-angle-right"></i>Help & Support</li>
            </div>
           </div>
        </div>
        <div className="Quicklinks">
            <h2>Quick Links</h2>
            <li><i class="fa-solid fa-angle-right"></i>Home</li>
            <li><i class="fa-solid fa-angle-right"></i>About</li>
            <li><i class="fa-solid fa-angle-right"></i>Rooms</li>
            <li><i class="fa-solid fa-angle-right"></i>Resto & Bar</li>

        </div>

        <div className="question">
            <h2>Have a Questions?</h2>
            <li><i class="fa-solid fa-map"></i>203 Fake St. Mountain View, San Francisco, <br /> California, USA</li>
            <li><i class="fa-solid fa-phone"></i>	+2 392 3929 210</li>
            <li><i class="fa-solid fa-paper-plane"></i>	info@yourdomain.com</li>
        </div>
    </div>

    </>
  )
}

export default Footer
