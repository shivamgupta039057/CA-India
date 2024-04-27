import React from 'react'
import './style.css'

function WhyChooseUS() {
    // Quality Deliverables | Data Confidentiality | Assured Satisfaction |
    const whychooseusdetails = [
        {
            img: "assets/images/why/closure.png",
            heading: "Quality Deliverables",
            paragraph: `High-caliber results for a Chartered Accountant's professional standards..`
        },
        {
            img: "assets/images/why/document.png",
            heading: "Data Confidentiality",
            paragraph: 'Safeguarding sensitive information with utmost confidentiality measures.',
            // className: 'background-colored'
        },
        {
            img: "assets/images/why/satisfaction.png",
            heading: "Assured Satisfaction",
            paragraph: `Guaranteed contentment with our services' exceptional standards.`
        }
    ]

    return (
        <section class="section contact-pagess">
            <div class="container">
                <div class="section-header p-0">
                    <h3 class="title">Why Choose Us</h3>
                </div>
                <div className="row">
                    {whychooseusdetails?.map((item, index) => (
                        <div className="col-sm-4" key={index}>
                            <div className={`why-choose-us-para ${item.className}`}>
                                <div className="why-choose-img">
                                    <img src={item?.img} alt="" />
                                </div>
                                <div className="why-choose-heading">
                                    <h3>{item.heading}</h3>
                                </div>
                                {/* <div className="why-choose-paragraph">
                                    <p>{item.paragraph}</p>
                                </div> */}
                            </div>
                        </div>
                    ))}

                </div>
            </div>
        </section>
    )
}

export default WhyChooseUS