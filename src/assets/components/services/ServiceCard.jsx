import React from 'react'
import './service.css'
const ServiceCard = ({image,name}) => {
  return (
    <div className='card service-card p-2'>
        <div className="service-img text-center">
            <img src={image} alt="" />
        </div>
        <div className="card-body">
            <h5 className='text-center'>{name}</h5>
        </div>
        <div className="card-footer text-center">
            <button className='btn btn-primary'>Book Now</button>
        </div>
    </div>
  )
}

export default ServiceCard