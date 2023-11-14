import React from 'react'
import "./Destination.css"
import Destinationapi from './Destinationapi'
const Destination = () => {
  return (
    <div>
      <div className="banner" style={{backgroundImage:`linear-gradient(rgb(0,0,0,0.2),rgb(0,0,0,0.1)),url("./images/bg_3.jpg")`,
         backgroundSize:"cover",
         backgroundPositionY:"-50px",
         backgroundRepeat:"no-repeat",
         height:"50vh"
        }}>
          <div className="destination-container">
          <h1>Choose the Perfect Destination</h1>
       <p>We can manage your dream building A small river named Duden flows by their place</p>
       <button className="search-place">Search Place</button>   
          </div>
          </div>
          <div className="destination-content-container">
            <span>BEST DESTINATION</span>
            <h1>Best Place to Travel</h1>
            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia</p>
            <div className="destination-card-container">
             
             {Destinationapi.map((curitem)=>{
              return(
                <div className="cards">
                <div className="card-image">
                  <img src={curitem.image} alt="" />
                  <div className="sale-price">
                    {/* <li className='sale'>{curitem.sale}</li> */}
                    <li>{curitem.regu}</li>
                  </div>
                 
                </div>
                <div className="cards-description">
                    <p className='day'>{curitem.para}</p>
                    <h3>{curitem.title}</h3>
                    <div className="rating">
                      <p>{curitem.star}</p>
                      <p>{curitem.days}</p>
                    </div>
                  </div>
              </div>
              )
             })}
            
            
            </div>
          </div>
    </div>
  )
}

export default Destination
{/* <div className="cards">
<div className="card-image">
  <img src="./images/destination-2.jpg" alt="" />
  <div className="sale-price">
    <li className='sale'>$500</li>
    <li>$400</li>
  </div>
 
</div>
<div className="cards-description">
    <p className='day'>15 DAYS TOUR</p>
    <h3>Gurtnellen, Swetzerland</h3>
    <div className="rating">
      <p>*****</p>
      <p>(120)</p>
    </div>
  </div>
</div> */}