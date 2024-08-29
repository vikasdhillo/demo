import React from 'react'
import './service.css'
import wheelAlignment from './wheel-alignment.png'
import wheelbal from './wheel-alignment-bal.png'
import ServiceCard from './ServiceCard.jsx'
const Services = () => {
    return (
        <div className='container services my-3'>
            <div className='d-flex justify-content-center'>
            <h3 className='mb-3'>Services</h3>
            </div>
            <div className="row g-3">
                <div className="col-md-3 col-sm-6">
                    <ServiceCard image={wheelAlignment} name="Wheel Alignment" />
                </div>
                <div className="col-md-3 col-sm-6">
                    <ServiceCard image={wheelbal} name="Wheel Balance" />
                </div>
                <div className="col-md-3 col-sm-6">
                    <ServiceCard image={wheelAlignment} name="Wheel Alignment" />
                </div>
                <div className="col-md-3 col-sm-6">
                    <ServiceCard image={wheelAlignment} name="Wheel Alignment" />
                </div>
            </div>
            <hr />
        </div>
    )
}

export default Services