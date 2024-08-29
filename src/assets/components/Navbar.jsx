import React from 'react'
import logo from "../images/logo.webp"
import "./navbar.css"
import { FaUserAlt } from "react-icons/fa";
import { RxHamburgerMenu } from "react-icons/rx";

const Navbar = () => {
    return (
        <nav class="navbar navbar-expand-lg bg-light mb-3">
            <div class="container">
                <a class="navbar-brand" href="#">
                    <img src={logo} alt="" />
                </a>
                <button class="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="fs-1"><RxHamburgerMenu/></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div class="navbar-nav w-100">
                        <a class="nav-link active" aria-current="page" href="#">car tyres</a>
                        <a class="nav-link" href="#">Bike tyres</a>
                        <a class="nav-link" href="#">Tyre pressure</a>
                        <a class="nav-link" href="#" >Commercial Tyres</a>
                        <a class="nav-link" href="#" >Accesories</a>
                        <a class="nav-link" href="#" >More</a>
                        <div className='ms-lg-auto d-flex align-items-center gap-1'>
                            <FaUserAlt />
                            <a href="" className='nav-link'>Login</a>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar