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
            heading: 'Hyderabad 500038',
            subheading: ' 8-3-169/1, 301,',
            link: "#",
        },

    ]
    return (
        <section className="section-padding services-section-to p-0">
            <div className="container">
                <div className="row">
                    <div className="col-sm-12">
                        <div className="contact-info-box mb-md-40">
                            <Link to='#' target='_blank'>
                                <img src="assets/images/dm.png" className='dm-class-foterr' alt="" style={{ color: '#000', zIndex: '999' }} />
                                <h6 className="text-theme fw-600">{`Direct Messages`}
                                    <br />
                                    <div className="whatsappp-telegram">
                                        <Link to='https://t.me/cavinaykumar_in' target='_blank'><FaTelegram style={{ background: `#0088cc` }} /></Link>
                                        <Link to='https://wa.me/918790595858' target='_blank'><FaWhatsapp style={{ background: `#25D366` }} /></Link>
                                    </div>


                                </h6>
                            </Link>
                        </div>
                    </div>
                    {contactDetails?.map((item, index) => (
                        <div className="col-sm-12" key={index}>
                            <div className="contact-info-box mb-md-40">
                                <Link to={item.link} target='_blank'>
                                    <item.icon style={{ background: `${item.heading === 'WhatsApp' ? "#25D366" : (item.heading === 'Telegram' ? "#0088cc" : "")}` }} />
                                    <h6 className="text-theme fw-600">{item.subheading}
                                        <br /> <span className='details-lower'>{item?.heading}</span></h6>
                                </Link>
                            </div>

                        </div>
                    ))}


                </div>



            </div>

        </section>
    )
}

export default ContactDetails