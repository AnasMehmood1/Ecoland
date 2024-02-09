import React from 'react'
import "./ServiceSec.css"
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
            <img src="./images/cosmetics.png" width={"70px"} />
            <p>Beauty & <br />Health</p>
            </div>
            <div className="card">
            <img src="./images/daycare.png" width={"70px"} />
            <p>Help & Support</p>
            </div>
         </div>
        </div>
          
          <div className="service-image" style={{  backgroundImage: ' url(./images/bg_1.jpg)',
        backgroundSize: "cover",
        backgroundPosition: 'center'}}>
       <div className="image-text">
        <span>FIND BEST HOTEL FOR LEAVING</span>
        <p>Find the Best Hotel in Your Next <br /> Vacation</p>
       </div>
       <div className="btn">
        <button>Book Now</button>
       </div>
          </div>

      </div>
    </>
  )
}

export default ServiceSec
