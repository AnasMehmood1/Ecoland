import React from 'react'
import "./Resto.css"
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
                        <div className="resto-card">
                            <img src="./images/menu-1.jpg" alt=""  />
                            <p>Grilled Beef with potatoes</p>
                            <span>$20.00</span>
                        </div>
                        <div className="resto-card">
                            <img src="./images/menu-1.jpg" alt="" />
                            <p>Grilled Beef with potatoes</p>
                            <span>$20.00</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default Resto
