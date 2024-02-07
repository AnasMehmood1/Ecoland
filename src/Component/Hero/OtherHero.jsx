import React from 'react'
import "./Other.css"
import { Link } from 'react-router-dom'
const OtherHero = ({current ,title}) => {
  return (
    <>
     <div className="other-hero">
     <div className="inner">
     <div className="links">
       <Link to='/' className='link'><p>Home &gt;</p></Link>
       <Link className='link'>  <p>{current} &gt;</p></Link>
       </div>
       <div className="title">
        <h1>{title}</h1>
       </div>
     </div>
     </div>
    </>
  )
}

export default OtherHero
