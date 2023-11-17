import React from 'react'
 import "./Hotel.css"
 import Hotelapi from './Hotelapi'
const Hotel = () => {
  return (
    <div>
    <div className="banner" style={{backgroundImage:`linear-gradient(rgb(0,0,0,0.2),rgb(0,0,0,0.1)),url("./images/bg_4.jpg")`,
       backgroundSize:"cover",
    //    backgroundPositionY:"-50px",
       backgroundRepeat:"no-repeat",
       height:"60vh",
       
      }}>
        <div className="Hotel-container">
        <h1>Choose at $99 Per Night Only</h1>
     <p>We can manage your dream building A small river named Duden flows by their place</p>
     <button className="book-room">Book a room now</button>   
        </div>
        </div>
        <div className="Hotel-content-container">
          <span>SUGGESTED HOTEL</span>
          <h1>Find Nearest Hotel</h1>
          <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia</p>
          <div className="Hotel-card-container">

           {Hotelapi.map((hotelitem)=>{
            return(
              <div className="Hotel-cards">
              <div className="Hotel-card-image">
                <img src={hotelitem.image} alt=" alt" />
                <div className="sale-price">
                 {/* <li className='sale'>{hotelitem.sale}</li> */}
                  <li>{hotelitem.less}</li>
                </div>
               
              </div>
              <div className="cards-description">
                  <p className='day'>{hotelitem.para}</p>
                  <h3>{hotelitem.title}</h3>
                  <div className="rating">
                    <p>{hotelitem.star}</p>
                    <p>{hotelitem.days}</p>
                  </div>
                </div>
            </div>
            )
           })}
          
          
          </div>
        </div>
              

{/* ___Room Section---------- */}


       <div className="room-container">
        <div className="room-text">
          <span>ROOMS & SUITES</span>
          <h1 >Greece Best Rooms Offers</h1>
          <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia</p>
          <p></p>
        </div>
        <div className="room-col">
         <div className="room-left">
          <img src="./images/room-1.jpg" alt="" />
         </div>
         <div className="room-right">
          <h2>Classic Balcony Room</h2>
          <p>from <span>$99.00</span>/night</p>
          <div className="secp">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore eligendi deleniti perspiciatis quidem inventore illo, sequi nostrum omnis minus quibusdam aliquid tempore ducimus repellendus itaque recusandae quo quia, reprehenderit consequuntur mollitia. Odit voluptas repudiandae optio neque accusantium facilis debitis sunt.</p>
          </div>
          <button className="detail">Details</button>
          <button className="book">Book now</button>
         </div>
     
        </div>
        <div className="room-line">
          <h5> <img src="./images/room-1.jpg" alt="" />Classic Balcony Room</h5>
        <h5> <img src="./images/room-1.jpg" alt="" />Classic Balcony Room</h5>
        <h5> <img src="./images/room-1.jpg" alt="" />Classic Balcony Room</h5>
        <h5> <img src="./images/room-1.jpg" alt="" />Classic Balcony Room</h5>
          </div>
       </div>


       
  </div>
  )
}

export default Hotel
