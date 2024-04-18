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
                            <li class="menu-item menu-item-has-children" onClick={() => handleActive("Services")}>
                                <Link to="/services" className={isactive == "Services" ? "active" : ''}>Services</Link>
                                <ul class="sub-menu">
                                    <li class="menu-item menu-item-has-children">
                                        <Link to='/'>Start Business</Link>
                                        <ul class="sub-menu">
                                            <li class="menu-item">
                                                <Link to='/'>Startup advisory</Link>
                                            </li>
                                            <li class="menu-item">
                                                <Link to='/'>Business Registration </Link>
                                            </li>
                                            <li class="menu-item">
                                                <Link to='/'>Business Licenses</Link>
                                            </li>
                                        </ul>
                                    </li>
                                    <li class="menu-item menu-item-has-children">
                                        <Link to='/'>Manage Business</Link>
                                        <ul class="sub-menu">
                                            <li class="menu-item">
                                                <Link to='/'>Business Management</Link>
                                            </li>
                                            <li class="menu-item">
                                                <Link to='/'>Business Compliances </Link>
                                            </li>
                                           
                                        </ul>
                                    </li>
                                    <li class="menu-item menu-item-has-children">
                                        <Link to='/'>Specialized Services</Link>
                                        <ul class="sub-menu">
                                            <li class="menu-item">
                                                <Link to='#id'>Trademark & IP rights</Link>
                                            </li>
                                            <li class="menu-item">
                                                <Link to='/'>Non Profit Organisation </Link>
                                            </li>
                                            <li class="menu-item">
                                                <Link to='/'>Global Structuring</Link>
                                            </li>
                                            <li class="menu-item">
                                                <Link to='/'>Extended Services</Link>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                            <li class="menu-item" onClick={() => handleActive("Contact")}>
                                <Link to="/contact" className={isactive == "Contact" ? "active" : ''}>Contact</Link>

                            </li>

                            <li class="menu-item" onClick={() => handleActive("Blog")}>
                                <Link to="/blog" className={isactive == "Blog" ? "active" : ''}>Blog</Link>
                            </li>

                            {/* <li class="menu-item menu-item-has-children">
                                <a href="#" class="active">Home</a>
                                <ul class="sub-menu">
                                    <li class="menu-item">
                                        <a href="index.html">Home v1</a>
                                    </li>
                                    <li class="menu-item">
                                        <Link to='/'>Home v2</a>
                                    </li>
                                </ul>
                            </li> */}


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