import React from 'react'
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import './style.css'


function ContactDetails() {
    const contactDetails = [
        {
            icon: FaLocationDot,
            heading: '8-3-169/1, 301,',
            subheading: ' Hyderabad 500038'
        },
        {
            icon: FaPhoneAlt,
            heading: '+91 8790595858',
            subheading: ' Call Now ',
            link: "tel:+ 918790595858"
        },
        {
            icon: IoMdMail,
            heading: ' contact@cavinaykumar.in',
            subheading: 'Mail US',
            link: "mailto:contact@cavinaykumar.in"
        }
    ]
    return (
        <section className="section-padding services-section-top" style={{ background: "#f9f9f9", paddingBottom: "80px" }}>
            <div className="container">
                <div className="row">
                    {contactDetails?.map((item, index) => (
                        <div className="col-sm-4" key={index}>
                            <div className="contact-info-box mb-md-40">
                                <a href={item.link}>
                                    <item.icon />
                                    <h6 className="text-theme fw-600">{item.heading}
                                        <br /> <span className='details-lower'>{item?.subheading}</span></h6>
                                </a>
                            </div>
                        </div>
                    ))}

                </div>
            </div>
        </section>
    )
}

export default ContactDetails