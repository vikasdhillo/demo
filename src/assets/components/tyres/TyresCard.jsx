import React from 'react'
import { MdOutlineStarPurple500 } from "react-icons/md";
import './tyres.css'
import apollo from './apollo.jpg'
const TyresCard = () => {
  return (
    <div className='card tyre-card'>
        <img src={apollo} alt="" width={80}/>
        <p>Amazer 4G Life</p>
        <span>145/50 R12</span>
        <div className="rating">
        <span className='star'><MdOutlineStarPurple500 /><span className='ms-1 mt-1'>4</span></span> <span className='review'>(321 Reviews)</span>
        </div>
        <p>$3,540</p>
        <span className='offer'>Offer Available</span>
        <p>Tube Tyre</p>
    </div>
  )
}

export default TyresCard