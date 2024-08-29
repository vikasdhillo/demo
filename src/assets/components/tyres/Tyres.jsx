import React from 'react'
import './tyres.css'
import TyresCard from './TyresCard'
const Tyres = () => {
    return (
        <div className='container tyres-sold'>
            <div className='d-flex justify-content-center'>
                <h3 className='mb-3'>Tyres Sold By Us</h3>
            </div>
            <div className="filter">
                <select name="" id="" className='ms-auto'>
                    <option value="">Select Brand</option>
                    <option value="">Apollo</option>
                    <option value="">MRF</option>
                    <option value="">CEAT</option>
                    <option value="">Birla</option>
                </select>
            </div>
            <div className="row mt-3 g-4">
                <div className="col-md-4">
                    <TyresCard />
                </div>
                <div className="col-md-4">
                <TyresCard />
                </div>
                <div className="col-md-4">
                <TyresCard />
                </div>
                <div className="col-md-4">
                <TyresCard />
                </div>
                <div className="col-md-4">
                <TyresCard />
                </div>
                <div className="col-md-4">
                <TyresCard />
                </div>
            </div>
            <div className="view-more text-center mt-3">
            <button className='btn btn-primary'>View More</button>
            </div>
            <hr />
        </div>
    )
}

export default Tyres