import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Link as ScrollLink } from 'react-scroll';

function Header() {
    const [isactive, setIsActive] = useState('Home');
    const [isActivehumber, setIsActivehumber] = useState(false);
    const [submenu, setSubMenu] = useState(false);
    const [submenuchild, setSubMenuChild] = useState(false)

    console.log("submenu", submenu);


    const handleActiveBurger = (data) => {

        setIsActivehumber(!isActivehumber)

    }
    const handlesubmenu = (e) => {

        setSubMenu(!submenu)
    };

    const handleActive = (data) => {


        setIsActive(data)

    }

    const handlesubmenuChild = () => {

        setSubMenuChild(!submenuchild)

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

                    <nav className={`navigation ${isActivehumber ? 'open' : ''}`}>
                        <ul class="main-menu">

                            <li class="menu-item" onClick={() => handleActive("Home")}>
                                <Link to="/" className={isactive == "Home" ? "active" : ''} >Home</Link>
                            </li>
                            <li class="menu-item menu-item-has-children" onClick={() => handleActive("Services")}>
                                <Link to="/services" className={isactive == "Services" ? "active" : ''} onClick={handlesubmenu}>Services</Link>
                                <ul className={`sub-menu ${submenu ? "block" : "none"}`} >
                                    <li class="menu-item menu-item-has-children">
                                        <ScrollLink to='startBussiness' smooth={true} duration={500} onClick={handlesubmenuChild}>Start Business </ScrollLink>
                                        <ul onClick={handlesubmenu} className={`sub-menu ${submenuchild ? "block" : "none"}`}>
                                            <li class="menu-item">
                                                <ScrollLink to='startupAdvisory' smooth={true} duration={500}>Startup advisory</ScrollLink>
                                            </li>
                                            <li class="menu-item">
                                                <ScrollLink to='BusinessRegistration' smooth={true} duration={500}>Business Registration  </ScrollLink>
                                            </li>
                                            <li class="menu-item">
                                                <ScrollLink to='BusinessLicenses' smooth={true} duration={500}>Business Licenses </ScrollLink>
                                            </li>
                                        </ul>
                                    </li>
                                    <li class="menu-item menu-item-has-children">
                                        <ScrollLink to='ManageBusiness' smooth={true} duration={500} onClick={handlesubmenuChild}>Manage Business</ScrollLink>
                                        <ul onClick={handlesubmenu} className={`sub-menu ${submenuchild ? "block" : "none"}`}>
                                            <li class="menu-item">
                                                <ScrollLink to='BusinessManagement' smooth={true} duration={500}>Business Management </ScrollLink>
                                            </li>
                                            <li class="menu-item">
                                                <ScrollLink to='BusinessCompliances' smooth={true} duration={500}>Business Compliances  </ScrollLink>
                                            </li>

                                        </ul>
                                    </li>
                                    <li class="menu-item menu-item-has-children">
                                        <ScrollLink to='SpecializedServices' smooth={true} duration={500} onClick={handlesubmenuChild}>Specialized Services</ScrollLink>
                                        <ul onClick={handlesubmenu} className={`sub-menu ${submenuchild ? "block" : "none"}`}>
                                            <li class="menu-item">
                                                <ScrollLink to='Trademark&IPrights' smooth={true} duration={500}>Trademark & IP rights</ScrollLink>
                                            </li>
                                            <li class="menu-item">
                                                <ScrollLink to='NonProfitOrganisation' smooth={true} duration={500}>Non Profit Organisation  </ScrollLink>
                                            </li>
                                            <li class="menu-item">
                                                <ScrollLink to='GlobalStructuring' smooth={true} duration={500}>Global Structuring </ScrollLink>
                                            </li>
                                            <li class="menu-item">
                                                <ScrollLink to='ExtendedServices' smooth={true} duration={500}>Extended Services </ScrollLink>
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
                                <Link to="/contact">

                                    <i class="bi-headset"></i>
                                </Link>
                            </li>
                        </ul>
                        <div class="hamburger" onClick={() => handleActiveBurger("hurber")}>
                            <div className={`hamburger_btn  ${isActivehumber ? "active" : ''} `}>
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