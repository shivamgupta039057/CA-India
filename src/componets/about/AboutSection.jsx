import React, { useState } from 'react'
import './style.css'
import { TbUserPlus } from "react-icons/tb";
import { AiOutlineStock } from "react-icons/ai";
import { FaRegCalendarCheck } from "react-icons/fa";


function AboutSection() {
    const [tabingData, setTabingData] = useState('About US');
    console.log("tabingdataaa", tabingData);
    const tabingHandle = (data) => {

        setTabingData(data)

    }
    return (
        <section class="section-padding section-bg no-overlay about-us-section" style={{ background: "#fff" }}>
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-lg-7">
                        <div class="section-header">
                            <h3 class="title">{tabingData}</h3>
                        </div>
                        <div className="tabing-section">
                            <div className="tabs filter-gallery">
                                <ul className='custom-flex nav nav-tabs mb-xl-40'>
                                    <li className='nav-item' onClick={() => tabingHandle("About US")}>
                                        <span className={`nav-link ${tabingData === "About US" ? "active" : ""}`}>
                                           <span className='icon-inner'><TbUserPlus /></span> About US
                                        </span>
                                      
                                    </li>
                                    <li className='nav-item' onClick={() => tabingHandle("Our Mission")}>
                                        <span className={`nav-link ${tabingData === "Our Mission" ? "active" : ""}`}>
                                          <span className='icon-inner'><AiOutlineStock /></span>  Our Mission
                                        </span>
                                    </li>
                                    <li className='nav-item' onClick={() => tabingHandle("Our Network")}>
                                        <span className={`nav-link ${tabingData === "Our Network" ? "active" : ""}`}>
                                           <span className='icon-inner'><FaRegCalendarCheck /></span> Our Network
                                        </span>
                                    </li>
                                </ul>
                            </div>

                            <div className="tabing-details">
                                {tabingData === "About US" ?
                                    <>
                                        {/* <div className="tabing-innner-img mt-3">
                                            <img src="assets/images/about/3.jpg" alt="" />
                                        </div> */}

                                        <p>We are Chartered Accountants in Hyderabad, offering our services in Telangana, AP and major cities in India. We provide best fit solutions to your financial, tax and compliance concerns. We are not just consultants, we are partners in your journey towards success.</p>


                                    </>
                                    :
                                    tabingData === "Our Mission" ?
                                        <>
                                            {/* <div className="tabing-innner-img mt-3">
                                                <img src="assets/images/about/3.jpg" alt="" />
                                            </div> */}

                                            <p>Our mission is to empower individuals and businesses to achieve their financial goals. We aspire to be an esteemed firm known for providing the highest quality professional services. We are committed to excellence in serving our clients.
                                            </p>

                                        </>
                                        :
                                        tabingData === "Our Network" ?
                                            <>
                                                {/* <div className="tabing-innner-img mt-3">
                                                    <img src="assets/images/about/3.jpg" alt="" />
                                                </div> */}

                                                <p>We are a multidisciplinary team made up of Chartered Accountants, Company Secretaries, MBA and Finance Associates who operate in perfect synergy, to provide a comprehensive range of services for all your business needs.</p>

                                            </>
                                            :
                                            <h1>npyifdjog</h1>
                                        }
                            </div>
                        </div>
                        <div className="introduction-ourself">
                            <h2>CA VINAY KUMAR M</h2>
                            <span>Founder</span>
                        </div>
                    </div>
                    <div class="col-lg-5">
                        <div class="row">

                            <div class="col-sm-12">
                               
                                {tabingData === "About US" ?
                                    <>
                                         <div class="about_img animate_about_img">
                                    <img src="assets/images/about/about.jpg" alt="img" class="image-fit" />
                                </div>


                                    </>
                                    :
                                    tabingData === "Our Mission" ?
                                        <>
                                             <div class="about_img animate_about_img">
                                    <img src="assets/images/about/mission.jpeg" alt="img" class="image-fit" />
                                </div>

                                        </>
                                        :
                                        tabingData === "Our Network" ?
                                            <>
                                                <div class="about_img animate_about_img">
                                    <img src="assets/images/about/network.jpeg" alt="img" class="image-fit" />
                                </div>

                                            </>
                                            :
                                            <h1>npyifdjog</h1>
                                        }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutSection