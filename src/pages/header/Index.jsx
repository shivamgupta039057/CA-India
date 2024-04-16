import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function Header() {
    const [isactive, setIsActive] = useState('Home')
    const handleActive = (data) => {

        setIsActive(data)

    }
    return (
        <header class="header can-sticky">
            <div class="container">
                <div class="nav_inner">

                    <div class="logo">

                        <Link to="/" class="d-flex h-100" onClick={() => handleActive("Home")}>
                            <img src="assets/images/logo.png" alt="logo" class="image-fit-contain" />
                        </Link>
                    </div>

                    <nav class="navigation">
                        <ul class="main-menu">

                            <li class="menu-item" onClick={() => handleActive("Home")}>
                                <Link to="/" className={isactive == "Home" ? "active" : ''}>Home</Link>
                            </li>
                            <li class="menu-item" onClick={() => handleActive("Services")}>
                                <Link to="/services" className={isactive == "Services" ? "active" : ''}>Services</Link>
                            </li>
                            <li class="menu-item" onClick={() => handleActive("Contact")}>
                                <Link to="/contact" className={isactive == "Contact" ? "active" : ''}>Contact</Link>
                            </li>

                            <li class="menu-item" onClick={() => handleActive("Blog")}>
                                <Link to="/blog" className={isactive == "Blog" ? "active" : ''}>Blog</Link>
                            </li>
                            

                        </ul>
                    </nav>
                    <div class="header_actions">
                        <ul>
                            {/* <li class="search">
                                <a href="#">
                                    <i class="fal fa-search"></i>
                                </a>
                            </li> */}
                            <li class="user_btn">
                                <a href="contact.html">
                                    <span>Support</span>
                                    <i class="bi-headset"></i>
                                </a>
                            </li>
                        </ul>
                        <div class="hamburger">
                            <div class="hamburger_btn">
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </header>
    )
}

export default Header