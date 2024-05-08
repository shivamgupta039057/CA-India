import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Link as ScrollLink } from 'react-scroll';

function Header() {
    const [isactive, setIsActive] = useState('Home');
    const [isActivehumber, setIsActivehumber] = useState(false);
    const [submenu, setSubMenu] = useState(false);
    const [submenuchild, setSubMenuChild] = useState(false)

    console.log("submenu", submenu);


    const handleActiveBurger = () => {

        setIsActivehumber(!isActivehumber)

    }
    const handleActive = (data) => {
        setIsActive(data)
        setIsActivehumber(false)
    }
    const handleActiveservices = (data) => {

        setIsActive(data)
        setIsActivehumber(true)

    }





    const handlesubmenu = (e) => {

        setSubMenu(!submenu)
    };



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

                            <li class="menu-item menu-item-has-children" onClick={() => handleActiveservices("Services")}>
                                <Link to="/services" className={isactive == "Services" ? "active" : ''} onClick={handlesubmenu}>Services</Link>

                                <ul className={`sub-menu ${submenu ? "block" : "none"}`} >
                                    <li class="menu-item menu-item-has-children">
                                        <ScrollLink to='startBussiness' smooth={true} duration={500} onClick={handlesubmenuChild}><span className='inner-chld'> <Link to='/services'> Start Business</Link></span> </ScrollLink>
                                        <ul onClick={handlesubmenu} className={`sub-menu ${submenuchild ? "block" : "none"}`}>
                                            <li class="menu-item">
                                                <ScrollLink to='startupAdvisory' smooth={true} duration={500}
                                                    onClick={() => setIsActivehumber(false)}
                                                ><span className='inner-more-inner'> <Link to='/services'>Startup advisory </Link></span></ScrollLink>
                                            </li>
                                            <li class="menu-item" onClick={handleActive}>
                                                <ScrollLink to='BusinessRegistration' smooth={true} duration={500} onClick={() => setIsActivehumber(false)}><span className='inner-more-inner'> <Link to='/services'>Business Registration </Link> </span> </ScrollLink>
                                            </li>
                                            <li class="menu-item" onClick={handleActive}>
                                                <ScrollLink to='BusinessLicenses' smooth={true} duration={500}
                                                    onClick={() => setIsActivehumber(false)}
                                                ><span className='inner-more-inner'> <Link to='/services'>Business Licenses</Link> </span> </ScrollLink>
                                            </li>
                                        </ul>
                                    </li>
                                    <li class="menu-item menu-item-has-children">
                                        <ScrollLink to='ManageBusiness' smooth={true} duration={500} onClick={handlesubmenuChild}> <span className='inner-chld'> <Link to='/services'> Manage Business</Link> </span></ScrollLink>
                                        <ul onClick={handlesubmenu} className={`sub-menu ${submenuchild ? "block" : "none"}`}>
                                            <li class="menu-item">
                                                <ScrollLink to='BusinessManagement' smooth={true} duration={500}
                                                    onClick={() => setIsActivehumber(false)}
                                                > <span className='inner-more-inner'>  <Link to='/services'> Business Management</Link> </ span> </ScrollLink>
                                            </li>
                                            <li class="menu-item">
                                                <ScrollLink to='BusinessCompliances' smooth={true} duration={500} onClick={() => setIsActivehumber(false)}> <span className='inner-more-inner'> <Link to='/services'>Business Compliances </Link> </ span> </ScrollLink>
                                            </li>

                                        </ul>
                                    </li>
                                    <li class="menu-item menu-item-has-children">
                                        <ScrollLink to='Taxation-paragrapg' smooth={true} duration={500} onClick={handlesubmenuChild}> <span className='inner-chld'> <Link to='/services'>Taxation</Link> </span></ScrollLink>
                                        <ul onClick={handlesubmenu} className={`sub-menu ${submenuchild ? "block" : "none"}`}>
                                            <li class="menu-item">
                                                <ScrollLink to='Taxation-paragrapg' smooth={true} duration={500}
                                                    onClick={() => setIsActivehumber(false)}
                                                > <span className='inner-more-inner'> <Link to='/services'> Income Tax</Link> </ span> </ScrollLink>
                                            </li>
                                            <li class="menu-item">
                                                <ScrollLink to='gstdataheree' smooth={true} duration={500} onClick={() => setIsActivehumber(false)}> <span className='inner-more-inner'><Link to='/services'> GST</Link>  </ span> </ScrollLink>
                                            </li>

                                        </ul>
                                    </li>
                                    <li class="menu-item menu-item-has-children">
                                        <ScrollLink to='SpecializedServices' smooth={true} duration={500} onClick={handlesubmenuChild}> <span className='inner-chld'> <Link to='/services'> Specialized Services</Link></span></ScrollLink>
                                        <ul onClick={handlesubmenu} className={`sub-menu ${submenuchild ? "block" : "none"}`}>
                                            <li class="menu-item">
                                                <ScrollLink to='Trademark&IPrights' smooth={true} duration={500} onClick={() => setIsActivehumber(false)}> <span className='inner-more-inner'><Link to='/services'> Trademark & IP rights  </Link></span></ScrollLink>
                                            </li>
                                            <li class="menu-item">
                                                <ScrollLink to='NonProfitOrganisation' smooth={true} duration={500} onClick={() => setIsActivehumber(false)}> <span className='inner-more-inner'><Link to='/services'> Non Profit Organisation  </Link> </span> </ScrollLink>
                                            </li>
                                            {/* <li class="menu-item">
                                                <ScrollLink to='GlobalStructuring' smooth={true} duration={500} onClick={() => setIsActivehumber(false)}> <span className='inner-more-inner'><Link to='/services'> Global Structuring  </Link></span> </ScrollLink>
                                            </li> */}
                                            <li class="menu-item">
                                                <ScrollLink to='ExtendedServices' smooth={true} duration={500} onClick={() => setIsActivehumber(false)}> <span className='inner-more-inner'><Link to='/services'> Extended Services </Link> </span> </ScrollLink>
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

                            {/* <li class="menu-item menu-item-has-children" onClick={() => handleActiveservices("Services")}>
                                <Link to="/services" className={isactive == "Services" ? "active" : ''} onClick={handlesubmenu}>More</Link>

                                <ul className={`sub-menu ${submenu ? "block" : "none"}`} >
                                    <li class="menu-item ">
                                        <ScrollLink to='' smooth={true} duration={500} onClick={handlesubmenuChild}><span className='inner-chld'>Knowledge Hub</span> </ScrollLink>

                                    </li>
                                    <li class="menu-item menu-item-has-children">
                                        <ScrollLink to='ManageBusiness' smooth={true} duration={500} onClick={handlesubmenuChild}> <span className='inner-chld'> Financial Calculators </span></ScrollLink>
                                        <ul onClick={handlesubmenu} className={`sub-menu ${submenuchild ? "block" : "none"}`}>
                                            <li class="menu-item">
                                                <ScrollLink to='BusinessManagement' smooth={true} duration={500}
                                                    onClick={() => setIsActivehumber(false)}
                                                > <span className='inner-more-inner'>  	Loan EMI </ span> </ScrollLink>
                                            </li>
                                            <li class="menu-item">
                                                <ScrollLink to='BusinessCompliances' smooth={true} duration={500} onClick={() => setIsActivehumber(false)}> <span className='inner-more-inner'>	SIP   </ span> </ScrollLink>
                                            </li>
                                            <li class="menu-item">
                                                <ScrollLink to='BusinessCompliances' smooth={true} duration={500} onClick={() => setIsActivehumber(false)}> <span className='inner-more-inner'>		Simple Interest   </ span> </ScrollLink>
                                            </li>
                                            <li class="menu-item">
                                                <ScrollLink to='BusinessCompliances' smooth={true} duration={500} onClick={() => setIsActivehumber(false)}> <span className='inner-more-inner'>		Lumpsum    </ span> </ScrollLink>
                                            </li>

                                        </ul>
                                    </li>
                                    <li class="menu-item menu-item-has-children">
                                        <ScrollLink to='Taxation-paragrapg' smooth={true} duration={500} onClick={handlesubmenuChild}> <span className='inner-chld'> Tax Tools </span></ScrollLink>
                                        <ul onClick={handlesubmenu} className={`sub-menu ${submenuchild ? "block" : "none"}`}>
                                            <li class="menu-item">
                                                <ScrollLink to='Taxation-paragrapg' smooth={true} duration={500}
                                                    onClick={() => setIsActivehumber(false)}
                                                > <span className='inner-more-inner'>  	Tax under Old Regime Vs New Regime </ span> </ScrollLink>
                                            </li>
                                            <li class="menu-item">
                                                <ScrollLink to='gstdataheree' smooth={true} duration={500} onClick={() => setIsActivehumber(false)}> <span className='inner-more-inner'>	Income and Tax Calculator  </ span> </ScrollLink>
                                            </li>

                                        </ul>
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
                                <Link to="/contact">

                                    <i class="bi-headset"></i>
                                </Link>
                            </li>
                        </ul>
                        <div class="hamburger" onClick={handleActiveBurger}>
                            <div className={`hamburger_btn  ${isActivehumber ? "active" : ''} `}>
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                        </div>
                    </div>

                </div>
            </div >
        </header >
    )
}

export default Header