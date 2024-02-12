import React from 'react'
import "./Image.css"
const ImageSec = () => {
  return (
    <div>
      <div className="image-container">
      <div className='sr-image'>
      <img className='hovimg'  src="./images/gallery-1.jpg" alt="" />
      <i class="fa-solid fa-magnifying-glass"></i>
      </div>
       <div className='sr-image'>
       <img className='hovimg' src="./images/pool.jpg" alt="" />
       <i class="fa-solid fa-magnifying-glass"></i>
       </div>
     <div className='sr-image'>
     <img className='hovimg' src="./images/gallery-3.jpg" alt="" />
     <i class="fa-solid fa-magnifying-glass"></i>
     </div>
        <div className='sr-image'>
        <img className='hovimg' src="./images/gallery-4.jpg" alt="" />
        <i class="fa-solid fa-magnifying-glass"></i>
        </div>
      <div className='sr-image'>
      <img className='hovimg' src="./images/gallery-5.jpg" alt="" />
      <i class="fa-solid fa-magnifying-glass"></i>
      </div>
      </div>
    </div>
  )
}

export default ImageSec
