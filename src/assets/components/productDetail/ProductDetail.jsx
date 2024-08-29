import React from 'react'
import mainImage from "./shop.jpg"
import { FaLocationDot } from "react-icons/fa6";
import { MdOutlineWatchLater } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { BsGlobeAmericas } from "react-icons/bs";
import { MdOutlineStarPurple500 } from "react-icons/md";
import Reviews from './Reviews';
import "./productDetail.css"

const ProductDetail = () => {
  return (
    <div className='container section-1'>
      <div className="row header">
        <div className="col-md-6 mb-3">
          <div className="details">
            <h2 className='fw-normal text-capitalize mb-0'>Shree hemkunt tyres and services</h2>
            <div className="rating d-flex align-items-center gap-1">
              <span className='num-rate'>4.9</span>
              <span className='mb-1 stars'>
                <MdOutlineStarPurple500 />
                <MdOutlineStarPurple500 />
                <MdOutlineStarPurple500 />
                <MdOutlineStarPurple500 />
                <MdOutlineStarPurple500 />
              </span>
              <span className='reviews'>(2278 customer reviews)</span>
            </div>
            <p className='mb-0 company'>Tyre Company</p>
            <div className="mb-0 contact d-flex flex-column justify-content-evenly">
              <div className="location d-flex">
                <span className='icons'> <FaLocationDot /></span><span className='ms-2 text-capitalize'>PLOT NUMBER-09 GROUND FLOOR CISF CAMPUS ROAD, AHINSA KHAND-02 INDIRAPURAM, Ghaziabad, Uttar Pradesh, 201014</span>
              </div>
              <div className="timing">
                <span className='icons'><MdOutlineWatchLater /></span><span className='ms-2 text-success fw-normal'>Open.</span> <span>Mon-Sat(10am - 8pm)</span>
              </div>
              <div className="site">
                <span className='icons'><BsGlobeAmericas /></span><a href="https://www.tyreplex.com" className='ms-2'>tyreplex.com</a>
              </div>
              <div className="phone">
                <span className='icons'><FaPhoneAlt /></span><span className='ms-2'>09118588521</span>
              </div>
              <button className='btn btn-primary '>Get Direction</button>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="banner-image">
            <img src={mainImage} className='w-100' alt="" />
          </div>
        </div>
      </div>
      <div className="review-summary">
        <div className="row">
          <h3 className='mb-3'>Review Summary</h3>
          <div className="col-10 rating-num d-flex flex-column gap-1">
            <div className="rating-bars d-flex">
              <p>5</p>
              <div className="bars">
                <div className="inner-bar" ></div>
              </div>
            </div>
            <div className="rating-bars d-flex">
              <p>4</p>
              <div className="bars">
                <div className="inner-bar" ></div>
              </div>
            </div>
            <div className="rating-bars d-flex">
              <p>3</p>
              <div className="bars">
                <div className="inner-bar" ></div>
              </div>
            </div>
            <div className="rating-bars d-flex">
              <p>2</p>
              <div className="bars">
                <div className="inner-bar" ></div>
              </div>
            </div>
            <div className="rating-bars d-flex">
              <p>1</p>
              <div className="bars">
                <div className="inner-bar" ></div>
              </div>
            </div>
          </div>
          <div className="col-2 px-0">
            <div className="last-rating d-flex flex-column align-items-center px-3">
              <h1 className="mb-0">4.9</h1>
              <div className="stars">
                <MdOutlineStarPurple500 />
                <MdOutlineStarPurple500 />
                <MdOutlineStarPurple500 />
                <MdOutlineStarPurple500 />
                <MdOutlineStarPurple500 />
              </div>
              <span className='fw-bold text-primary'>2278 reviews</span>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-4">
          <Reviews name="Naman Kumar" logo="N"/>
        </div>
        <div className="col-md-4">
          <Reviews name="Mayank Singh" logo="M" />
        </div>
        <div className="col-md-4">
          <Reviews name="Ravi Malhotra" logo="R" />

        </div>
      </div>
      <hr />
    </div>
  )
}

export default ProductDetail