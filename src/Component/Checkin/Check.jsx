import React from 'react'
import "./Check.css"
const Check = () => {
  return (
    <>
    <div className="check-container">
        <div className="check-side">
            <div className="in-date">
                <p>CHECK-IN</p>
                <i class="fa fa-calendar-days"></i> <input type="clander" placeholder='Check-In Date'  />
            </div>
            <div className="out-date">
                <p>CHECK-OUT</p>
                <i class="fa fa-calendar-days"></i> <input type="calendar" placeholder='Check-Out Date' />
            </div>
            <div className="room">
                <p>ROOMS</p>
                <i class="fa fa-calendar-days"></i> <input type="clander" placeholder='Suite' />
            </div>
            <div className="guest">
                <p>GUESTS</p>
                <i class="fa fa-calendar-days"></i> <input type="suite" placeholder='Person' />
            </div>
        </div>
        <div className="check-btn">
            CHECK <br /> AVAILABILTY
        </div>
    </div>
    </>
  )
}

export default Check;
