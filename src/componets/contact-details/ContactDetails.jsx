import React from 'react'
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import './style.css'


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
            link: "mailto:contact@cavinaykumar.in"
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
                            </div>
                        </div>
                    ))}

                </div>
            </div>

        </section>
    )
}

export default ContactDetails