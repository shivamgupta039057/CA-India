import React from 'react'
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import './style.css'
import { FaWhatsapp } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa6";
import { Link } from 'react-router-dom';


function ContactDetails() {
    const contactDetails = [

        {
            icon: FaPhoneAlt,
            heading: '+91 8790595858',
            subheading: ' Call Now ',
            link: "tel:+ 918790595858"
        },
        {
            icon: IoMdMail,
            heading: ' contact@cavinaykumar.in',
            subheading: 'Mail Us',
            link: "mailto:contact@cavinaykumar.in",
            socialicon: "true"
        },
        {
            icon: FaLocationDot,
            heading: '8-3-169/1, 301,',
            subheading: ' Hyderabad 500038'
        },
    ]
    return (
        <section className="section-padding services-section-to p-0">
            <div className="container">
                <div className="row">
                    {contactDetails?.map((item, index) => (
                        <div className="col-sm-12" key={index}>
                            <div className="contact-info-box mb-md-40">
                                <a href={item.link}>
                                    <item.icon />
                                    <h6 className="text-theme fw-600">{item.subheading}
                                        <br /> <span className='details-lower'>{item?.heading}</span></h6>
                                </a>
                                {
                                    item.socialicon ? (
                                        <>
                                            <div className="social-icon contat-page-iconss" style={{ marginLeft: 0 }}>
                                                <Link to="https://wa.me/8918790595858" target='_blank'><FaWhatsapp style={{ color: "#25D366" }} /></Link>
                                                {/* <Link to="https://www.linkedin.com/in/vinay-kumar-mandava/" target='_blank'><FaLinkedinIn style={{ color: "#0077B5" }} /></Link> */}
                                                <Link to="https://t.me/cavinaykumar_7" target='_blank'><FaTelegram style={{ color: "#0088cc" }} /></Link>

                                            </div>
                                        </>
                                    ) : <></>
                                }

                            </div>

                        </div>
                    ))}

                </div>
            </div>

        </section>
    )
}

export default ContactDetails