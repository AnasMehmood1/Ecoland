import React from 'react'
import "./Resto.css"
import Restoapi from './Restoapi'
const Resto = () => {
  return (
    <>
      <div className="resto-main-container">
        <div className="resto-container">
            <div className="resto-sides">
                <div className="resto-left" >
                    <img src="./images/resto-bar.jpg" alt="" />
                    <div className="cooking"><img src="./images/cooking.png" alt="" />
                    </div>
                </div>
                <div className="resto-right">
                    <div className="resto-cards">
                    {Restoapi.map((item) => ( 
                            <div key={item.id} className="resto-card">
                                <img src={item.image} alt='' />
                                <p>{item.text}</p>
                                <span>{item.price}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default Resto
