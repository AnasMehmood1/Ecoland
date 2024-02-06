import React from 'react'
import "./AboutSec.css"
const AboutSec = () => {
  return (
    <>
      <div className="about-sec-container">
        <div className="about-left">
        <div className="about-left-left">
          <div className="left-detail">
            <span></span>
             <h2>Cozy Room</h2>
            <p>Far far away, behind the word mountains, far from the countries Vokalia.</p>
          </div>
          <div className="left-img" style={{backgroundImage: 'url(./images/f-services.jpg)',
    backgroundSize:"cover"}} >
            
          </div>
        </div>
        <div className="about-left-right">
        <div className="left-img" style={{backgroundImage: 'url(./images/f-services-2.jpg)',
    backgroundSize:"cover"}} >
 
</div>
          <div className="left-detail">
          <h2>Cozy Room</h2>
            <p>Far far away, behind the word mountains, far from the countries Vokalia.</p>
          </div>
         
        </div>
 
        </div>
        <div className="about-right">
          <span>ABOUT US</span>
          <p className='head'>Unwind A Hotel <br /> Booking Agency</p>
          <p className='para'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
          <button className="about-btn">BOOK YOUR ROOM NOW</button>
        </div>
      </div>
    </>
  )
}

export default AboutSec
