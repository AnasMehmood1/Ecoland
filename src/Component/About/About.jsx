import React from 'react'
import "./About.css"
// import about from "./images/about.jpg"
const About = () => {
  return (
    <div>
      <div className="about-container">
        <div className="left">
            <img src="/images/about.jpg"  />
        </div>
        <div className="right">
            <div className="right-inner">
            <span>GET IN TOUCH WITH US</span>
            <h1>Get Best Travel Deals</h1>
            <p>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
            <p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.</p>
            <p>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
            
                <button className="book">Booknow</button>
                <button className="contact">Contact Us</button>
        
            </div>
        </div>
      </div>
    </div>
  )
}


export default About
