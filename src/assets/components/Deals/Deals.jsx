import React from 'react'
import apollo from './apollo.jpg'
import birla from './birla.jpg'
import bridgestone from './bridgestone.jpg'
import ceat from './ceat.jpg'
import continental from './continental.jpg'
import goodyear from './goodyear.jpg'
import './deals.css'
const Deals = () => {
    return (
        <div className='container our-deals'>
            <div className='d-flex justify-content-center'>
            <h3 className='text-center mb-3'>Our Deals</h3>
            </div>
            <div className="row">
                <div className="col-lg-2 col-md-4 col-sm-6">
                    <div className='card deals align-items-center justify-content-evenly'>
                        <div className="dealImg">
                            <img src={apollo} alt="" />
                        </div>
                        <h5>Apollo</h5>
                    </div>
                </div>
                <div className="col-lg-2 col-md-4 col-sm-6">
                    <div className='card deals align-items-center justify-content-evenly'>
                        <div className="dealImg">
                            <img src={birla} alt="" />
                        </div>
                        <h5>Birla</h5>
                    </div>
                </div>
                <div className="col-lg-2 col-md-4 col-sm-6">
                    <div className='card deals align-items-center justify-content-evenly'>
                        <div className="dealImg">
                            <img src={bridgestone} alt="" />
                        </div>
                        <h5>Bridgestone</h5>
                    </div>
                </div>
                <div className="col-lg-2 col-md-4 col-sm-6">
                    <div className='card deals align-items-center justify-content-evenly'>
                        <div className="dealImg">
                            <img src={ceat} alt="" />
                        </div>
                        <h5>CEAT</h5>
                    </div>
                </div>
                <div className="col-lg-2 col-md-4 col-sm-6">
                    <div className='card deals align-items-center justify-content-evenly'>
                        <div className="dealImg">
                            <img src={continental} alt="" />
                        </div>
                        <h5>Continental</h5>
                    </div>
                </div>
                <div className="col-lg-2 col-md-4 col-sm-6">
                    <div className='card deals align-items-center justify-content-evenly'>
                        <div className="dealImg">
                            <img src={goodyear} alt="" />
                        </div>
                        <h5>Goodyear</h5>
                    </div>
                </div>
            </div>
            <hr />
        </div>
    )
}

export default Deals