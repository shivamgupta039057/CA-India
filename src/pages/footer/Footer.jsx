import React from 'react'
import './style.css'
import { FaWhatsapp } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaTelegramPlane } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { FaArrowRight } from "react-icons/fa6";
import { Link } from 'react-router-dom';




function Footer() {
   return (
      <footer class="footer-section">
         <div class="container">
            <div class="footer-content pt-5 pb-5">
               <div class="row">

                  <div class=" col-lg-4 col-md-6 mb-30 mt-3">
                     <div class="footer-widget">
                        <div class="footer-widget-heading">
                           <h3>Important Links </h3>
                        </div>
                        <ul>
                           <li><FaArrowRight /><a href="https://www.incometax.gov.in/iec/foportal/">Income Tax</a></li>
                           <li><FaArrowRight /><a href="https://www.incometax.gov.in/iec/foportal/">ICAI   </a></li>
                           <li><FaArrowRight /><a href="https://www.incometax.gov.in/iec/foportal/">MCA</a></li>
                           <li><FaArrowRight /><a href="https://www.rbi.org.in/">RBI </a></li>
                        </ul>
                     </div>
                  </div>
                  <div class=" col-lg-4 col-md-6 mb-30 mt-3">
                     <div class="footer-widget">
                        <div class="footer-widget-heading">
                           <h3>Go To</h3>
                        </div>
                        <ul>
                           <li><FaArrowRight /><Link to='/'>Home</Link></li>
                           <li><FaArrowRight /><Link to='/services'>Services</Link></li>
                           <li><FaArrowRight /><Link to='/blog'>Blog</Link></li>
                           <li><FaArrowRight /><Link to='/contact'>Contact</Link></li>
                        </ul>
                     </div>
                  </div>
                  <div class="col-lg-4 col-md-6 mb-50 mt-3">
                     <div class="footer-widget">
                        <div class="footer-widget-heading">
                           <h3>Get in touch</h3>
                        </div>
                        <div className="footer-details">
                           <div class="footer-text mb-25">
                              <div class="footer-contact">
                                 <FaPhoneAlt />
                                 <a href="tel:+918790595858" style={{ color: "#fff" }}>+91 8790595858</a>
                              </div>

                           </div>
                           <div class="footer-text mb-25">
                              <div class="footer-contact">
                                 <IoMdMail />
                                 <a href="mailto:contact@cavinaykumar.in" style={{ color: "#fff" }}>contact@cavinaykumar.in</a>

                              </div>

                           </div>
                        </div>
                        {/* <div class="footer-social-icon"> 
                   Follow us
                 <span className='whatsappp'><FaWhatsapp /></span> 
                 <span className='linkdin'><FaLinkedinIn /></span>
                  <span className='telegram'><FaTelegramPlane /></span>
                     </div> */}
                     </div>
                  </div>
               </div>
            </div>
         </div>
         <div class="copyright-area">
            <div class="container">
               <div class="row">
                  <div class="col-xl-6 col-lg-6 text-center text-lg-left">
                     <div class="copyright-text d-flex">
                        <p class="text-custom-white">Vinay Kumar M & CO Chartered Accountants</p>
                     </div>
                  </div>
                  <div class="col-xl-6 col-lg-6 d-none d-lg-block text-right">
                     <div class="footer-menu">
                        <span>Copyright © 2024. All rights reserved.</span>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </footer>
   )
}

export default Footer