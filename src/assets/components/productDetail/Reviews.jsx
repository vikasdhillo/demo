import React from 'react'
import "./productDetail.css"
import { MdOutlineStarPurple500 } from "react-icons/md";
const Reviews = ({logo,name}) => {
    
  return (
    <div className='text-center review-box'>
        <div className='mx-auto review-image d-flex align-items-center justify-content-center'>
            <h6 className='mb-0'>{logo}</h6>
        </div>
        <p className='fw-bold mb-0'>{name}</p>
        <div className='stars'>
        <MdOutlineStarPurple500/>
        <MdOutlineStarPurple500/>
        <MdOutlineStarPurple500/>
        <MdOutlineStarPurple500/>
        <MdOutlineStarPurple500/>
        </div>
        <span>Excellent service from start to finish. 100% satisfaction with the job, professionalism and overall service.We were delighted with your...</span>
    </div>
  )
}

export default Reviews