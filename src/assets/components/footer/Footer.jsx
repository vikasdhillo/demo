import React from 'react'
import './footer.css'
import footerLogo from "./logo.webp"
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FiTwitter } from "react-icons/fi";
import { FaPhoneAlt } from "react-icons/fa"
import {BsGlobeAmericas} from "react-icons/bs"
const Footer = () => {
    return (
        <>
        <div className='container-fluid footer'>
            <div className="container">
                <div className="row">
                    <div className="footer-logo d-flex">
                        <img src={footerLogo} alt="" />
                    </div>

                    
                    <div className="col-sm-4">
                    <h4 className='mt-4 mb-0'>Tell Us</h4>
                    <ul>
                        <li>Who we are?</li>
                        <li>Are you a tyre dealer?</li>
                        <li>Who we are?</li>
                    </ul>
                    </div>
                    <div className="col-sm-4">
                    <h4 className='mt-4 mb-0'>Site Map</h4>
                    <ul>
                        <li>Car Tyres</li>
                        <li>Bike Tyres</li>
                        <li>Accesories</li>
                        <li>Commercial Tyres</li>
                        <li>Tyre Pressure</li>
                    </ul>
                    </div>
                    <div className="col-sm-4">
                    <h4 className='mt-4 mb-0'>Contact Us</h4>
                    <ul>
                        <li><span className='icons'><BsGlobeAmericas /></span><a href="https://www.tyreplex.com" className='ms-2'>tyreplex.com</a></li>
                        <li><span className='icons'><FaPhoneAlt /></span><span className='ms-2'>09118588521</span></li>
                        <li><div className="social ms-auto fs-3 d-flex gap-2">
                            <span><FaFacebookSquare /></span>
                            <span> <FaInstagram /></span>
                            <span><FiTwitter /></span>
                        </div></li>
                    </ul>
                    </div>
                </div>
            </div>
            
        </div>
        <div className="copyright bg-dark w-100 py-4">
                <p className='mb-0 text-center text-light'>&copy; Copyright 1999-2024 by Refsnes Data. All Rights Reserved. Tyreplex is Powered by tyreplex.com.</p>
            </div>
            </>
    )
}

export default Footer