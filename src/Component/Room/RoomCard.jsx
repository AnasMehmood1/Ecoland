import React from 'react'
import "./RoomSec.css"
const RoomCard = () => {
  return (
    <>
          <div className="room-card-container">
            <div className="room-cards">
                <div className="room-card">
                  <div className="room-detail-text">
                    <h2>Suite Room</h2>
                    <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                    <div className="price">
                    <span>$450 / NIGHT</span>
                    <button>Book Now</button>
                    </div>
                  </div>
                  <div className="room-image">
                    <img src="./images/room-1.jpg" alt="" />
                  </div>
                </div>
                <div className="room-card">
                <div className="room-image">
                    <img src="./images/room-2.jpg" alt="" />
                  </div>
                  <div className="room-detail-text">
                    <h2>Family Room</h2>
                    <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                    <div className="price">
                    <span>$450 / NIGHT</span>
                    <button>Book Now</button>
                    </div> 
                  </div>
                  
                </div>
                <div className="room-card">
                  <div className="room-detail-text">
                    <h2>Deluxe Room</h2>
                    <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                    <div className="price">
                    <span>$450 / NIGHT</span>
                    <button>Book Now</button>
                    </div>
                  </div>
                  <div className="room-image">
                    <img src="./images/room-3.jpg" alt="" />
                  </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default RoomCard
