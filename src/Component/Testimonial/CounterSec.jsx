import React, { useState, useEffect } from 'react';
import "./Testimonial.css";

const CounterSec = () => {
  const [happyGuests, setHappyGuests] = useState(0);
  const [rooms, setRooms] = useState(0);
  const [staffs, setStaffs] = useState(0);
  const [destinations, setDestinations] = useState(0);

  const animateNumber = (target, setter, duration = 5000) => {
    let current = 0;
    const intervalTime = 50; 
    
    const totalSteps = duration / intervalTime;
    const step = target / totalSteps;

    const interval = setInterval(() => {
      current += step;
      if (current < target) {
        setter(Math.floor(current));
      } else {

        setter(target);
        clearInterval(interval);
      }
    }, intervalTime);
  };

  useEffect(() => {
   
    // const maxNumber = 38900; 
    const standardDuration = 5000; 

    animateNumber(38900, setHappyGuests, standardDuration);
    animateNumber(320, setRooms, standardDuration);
    animateNumber(1000, setStaffs, standardDuration);
    animateNumber(528, setDestinations, standardDuration);

    return () => {
      clearInterval(animateNumber);
    };
  }, []);

  return (
    <>
      <div className="counter-main-container">
        <div className="counter">
          <div className="number">
            <h3>{happyGuests.toLocaleString()}</h3>
            <p># of Happy Guests</p>
          </div>
          <div className="number">
            <h3>{rooms}</h3>
            <p># of Rooms</p>
          </div>
          <div className="number">
            <h3>{staffs}</h3>
            <p># of Staffs</p>
          </div>
          <div className="number">
            <h3>{destinations}</h3>
            <p># of Destinations</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default CounterSec;
