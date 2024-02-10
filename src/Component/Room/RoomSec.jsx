import React from 'react'
import "./RoomSec.css"
import RoomCard from './RoomCard'
const RoomSec = () => {
  return (
    <>
      <div className="room-main-container">
        <div className="room-title-text">
            <span>OUR ROOMS</span>
            <p>Featured Rooms</p>
        </div>
        <RoomCard/>
      </div>
    </>
  )
}

export default RoomSec
