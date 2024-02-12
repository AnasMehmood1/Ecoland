import React from 'react'
import "./ServiceSec.css"
import ServiceImage from './ServiceImage'
const ServiceSec = () => {
  return (
    <>
      <div className="service-main">
        <div className="service-text">
            <span>UNWIND SERVICES</span>
            <p>Explore Our Hotel  Services</p>
        </div>
        <div className="service-card-container">
         <div className="card-main">
         <div className="card">
            <i class="fa-solid fa-wifi"></i>
            <p>Free Wifi</p>
            </div>
            <div className="card">
            <i class="fa-solid fa-desktop"></i>
            <p>Easy Booking</p>
            </div>
            <div className="card">
            <i class="fa-solid fa-utensils"></i>
            <p>Restaurant</p>
            </div>
            <div className="card">
            <i class="fa-solid fa-person-swimming"></i>
            <p>Swimming <br /> Pool</p>
            </div>
            <div className="card">
            <img src="./images/cosmetics 1.png" className='active' alt='' width={"70px"} />
            <img src="./images/cosmetics.png" className='hover' alt='' width={"70px"} />
            <p>Beauty & <br />Health</p>
            </div>
            <div className="card">
            <img src="./images/daycare1.png" className='active' width={"70px"} alt='' />
            <img src="./images/daycare.png" className='hover' alt='' width={"70px"} />
            <p>Help & Support</p>
            </div>
         </div>
        </div>
          
          <ServiceImage/>

      </div>
    </>
  )
}

export default ServiceSec
