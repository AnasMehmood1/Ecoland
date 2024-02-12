import React from 'react'
import "./ServiceSec.css"
const ServiceImage = () => {
  return (
    <>
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
    </>
  )
}

export default ServiceImage
