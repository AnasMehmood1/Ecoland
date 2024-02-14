import React from 'react'
import "./ContactSec.css"
const ContactSec = () => {
  return (
    <>
      <div className="contact-main-container">
        <div className="contact-inner">
            <div className="contact-left">
            <h3>Contact us</h3>
              <span style={{color:"gray" ,fontWeight:`'Nunito', sans-serif`}}>We're open for any suggestion or just to have a chat</span>
              <div className="contact-information">
                <div className="address">
                    <p>ADDRESS:</p>
                    <span>198 West 21th Street, <br /> Suite 721 <br /> New York NY <br /> 10016</span>
                </div>
                <div className="email">
                    <p>EMAIL:</p>
                    <span>info@yoursite.com</span>
                </div>
                <div className="phone">
                    <p>PHONE:</p>
                    <span>+ 1235 2355 98</span>
                </div>
              </div>
              <div className="contact-field">
                <input type="text" placeholder='Name' />
                <input type="email" placeholder='Email' />
            <input type="Subject" placeholder='Subject' />
            <textarea name="" id="" cols="30" placeholder='Create a message here' rows="10"></textarea>
            <div className="contact-btn">
                <button>SEND MESSAGE</button>
            </div>
              </div>
              <div className="contact-icon">
              
                    <h3>Follow us here</h3>
                
                 <div className='social'>
                 <p>FACEBOOK</p>
                <p>TWITTER</p>
                <p>INSTAGRAM</p>
                <p>DRIBBBLE</p>
                 </div>
              </div>
            </div>
            
            <div className="contact-right">
            <iframe title='map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d100939.9964112016!2d-122.52000086435882!3d37.75780703728917!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80859a6d00690021%3A0x4a501367f076adff!2sSan%20Francisco%2C%20CA%2C%20USA!5e0!3m2!1sen!2s!4v1707902661404!5m2!1sen!2s" loading="lazy" ></iframe>
            </div>
        </div>
      </div>
    </>
  )
}

export default ContactSec
