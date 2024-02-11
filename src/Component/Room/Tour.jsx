import React from 'react'
import "./Tour.css"
const Tour = () => {
  return (
    <>
      <div className="tour-container" style={{  backgroundImage: ' url(./images/bg_2.jpg)',
        backgroundSize: "cover",
        backgroundPosition: 'center'}}>
      <div className="overlay">
      <div className="tour-text">
            <span>WATCH OUR LUXURIOUS HOTEL</span>
            <p>Take A Tour</p>
            <i class="fa-solid fa-play"></i>
        </div>
      </div>
      </div>
    </>
  )
}

export default Tour
