import React from 'react'
import './style.css'
import { FaPhoneAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { FaArrowRight } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import { useThemeData } from '../../context/Context';



function Footer() {

   const { setCountData, countdata } = useThemeData();



   const handleClick = () => {

      setCountData(prevCountData => prevCountData + 1);


   }

   console.log("setCountData", countdata);
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
                           <li><FaArrowRight /> <Link to={`https://www.incometax.gov.in/iec/foportal/`} target="_blank">Income Tax</Link> </li>
                           <li><FaArrowRight /> <Link to={`https://www.icai.org/`} target="_blank"> ICAI </Link>  </li>
                           <li><FaArrowRight /> <Link to={`https://www.mca.gov.in/content/mca/global/en/home.html`} target="_blank"> MCA </Link></li>
                           <li><FaArrowRight /><Link to={`https://www.rbi.org.in/`} target="_blank"> RBI </Link></li>
                           <li><FaArrowRight /><Link to={`https://www.gst.gov.in/`} target="_blank"> GST </Link></li>

                        </ul>
                     </div>
                  </div>
                  <div class=" col-lg-4 col-md-6 mb-30 mt-3">
                     <div class="footer-widget">
                        <div class="footer-widget-heading">
                           <h3>Go To</h3>
                        </div>
                        <ul>
                           <li onClick={handleClick}><FaArrowRight /><Link to='/' >Home</Link></li>
                           <li onClick={handleClick}><FaArrowRight /><Link to='/services'>Services</Link></li>
                           <li onClick={handleClick}><FaArrowRight /><Link to='/blog'>Blog</Link></li>
                           <li onClick={handleClick}><FaArrowRight /><Link to='/contact'>Contact</Link></li>
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
                  <div class="col-xl-12 col-lg-12 text-center text-lg-left">
                     <div class="copyright-text d-flex" style={{ justifyContent: "center" }}>
                        <p class="text-custom-white">C@ 2024 Vinay Kumar M & Co | All rights reserved.</p>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </footer>
   )
}

export default Footer