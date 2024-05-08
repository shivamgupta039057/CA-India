import React, { useState } from 'react';
import './style.css';
import { FaAngleRight } from "react-icons/fa6";
import { Link } from 'react-router-dom';


function Services() {
    const [isOpenList, setIsOpenList] = useState(new Array(9).fill(false));

    console.log("isOpenList ", isOpenList);

    // Updated selected options array with initial values for each box
    const [selectedOptions, setSelectedOptions] = useState([
        'Startup Advisory', // For box 1
        ' Business License ', // For box 2
        'Business Registration ',
        'GST ', // For box 3
        'Income Tax', // For box 3
        'Business Management ', // For box 3
        'Business Compliances ', // For box 3
        'Trademark & IP Rights ', // For box 3
        'Non-Profit Organization ', // For box 3
        'Global structuring ', // For box 3
        // For box 3
        // Add more initial values as needed
    ]);

    // Updated options array with new heading names and inner option data
    const options = [
        {
            heading: "Startup Advisory",
            innerOptions: [
                "Nudging Business idea to plan",
                "Pitch Desk",
                "Monthly MIS",
                "CMA Report",
                "Budgeting and Variance Analysis",
                "Cloud Accounting",
                "Taxation and Legal Compliance",
                "Treasury and Cash flow management",
                "V-CFO services"
            ]
        },
        {
            heading: "Business License",
            innerOptions: [
                "Labour License (Shop & Est)",
                "Trade License",
                "Drug License",
                "Import Export Code (IEC)",
                "Food Safety License",
                "MSME Udyam Aadhaar"
            ]
        },
        {
            heading: "Business Registration",
            innerOptions: [
                "Sole-Proprietorship Firm",
                "Limited Liability Partnership (LLP)",
                "One Person Company (OPC)",
                "Private Limited Company",
                "Finance Company (Nidhi)",
                "Producer Company (Farmers)"
            ]
        },
        {
            heading: "GST",
            innerOptions: [
                "GST Registration",
                "GST Returns",
                "GST Cancellation",
                "Reply to GST Notice",
                "Refunds for IGST",
                "Liaison with the department for dispute resolution and assessment"
            ]
        },
        {
            heading: "Income Tax",
            innerOptions: [
                "Income Tax Return",
                "TDS Returns",
                "Form 16 Issuance",
                "e-Pay Tax",
                "Tax Audit",
                "Assessment/Appeal/Scrutiny",
                "Reply to IT Notice"
            ]
        },
        {
            heading: "Business Management",
            innerOptions: [
                "Fundraising",
                "Project Report",
                "Internal Financial Controls",
                "Strategic Business Advisory",
                "Payroll Management",
                "Accounting & Book-keeping"
            ]
        },
        {
            heading: "Trademark & IP Rights",
            innerOptions: [

                "MCA Compliances",
                "Change in LLP Agreement",
                "Change in Registered Office Address",
                "Add/Remove - Directors/Partners",
                "Closing/Strike off - Company/LLP",
                "Any Other Secretarial Compliances"

            ]
        },
        {
            heading: "Business Compliances",
            innerOptions: [


                "Trademark Registration",
                "Trademark Objection",
                "Trademark Assignment Agreement",
                "Trademark Renewal",
                "Copyright Application",
                "Patent Registration"
            ]
        },
        {
            heading: "Non-Profit Organization",
            innerOptions: [
                "Society Registration",
                "Trust Registration",
                "Section 8 Company Registration",
                "12A Registration – IT Exemption",
                "80G Certificate – Tax Free Donations"
            ]
        },
        // {
        //     heading: "Global Structuring",
        //     innerOptions: [
        //         "Tax and business restructuring",
        //         "Transfer pricing documentation",
        //         "Annual FEMA compliance",
        //         "Business set up globally"
        //     ]
        // }
    ];

    const toggleOptionsList = (index) => {
        const newList = [...isOpenList];
        newList[index] = !newList[index];
        setIsOpenList(newList);
    };

    const selectOption = (option, index) => {
        const newOptions = [...selectedOptions];
        newOptions[index] = option;
        // setSelectedOptions(newOptions);
        const newList = [...isOpenList];
        newList[index] = false;
        // setIsOpenList(newList);
    };

    return (
        <section className="section-padding services-section-top" style={{ paddingBottom: "80px" }}>
            <div className="container">
                <div className="section-header">
                    <h3 className="title"> A glimpse  of our services</h3>
                </div>
                <div className="row">
                    {options.map((item, index) => (
                        <div key={index} className="col-sm-6 px-3 slide_item">
                            <div className={`fuchure-box text-center`}>
                                <div className="select-menu">
                                    <div className="select" onClick={() => toggleOptionsList(index)}>
                                        <span>{selectedOptions[index]}</span>
                                        <i className={`fas ${isOpenList[index] ? 'fa-angle-up' : 'fa-angle-down'}`}></i>
                                    </div>
                                    <div className={`options-list ${isOpenList[index] ? 'active' : ''}`}>
                                        {item.innerOptions.map((opt, i) => (
                                            <div
                                                key={i}
                                                className={`option ${selectedOptions[index] === opt ? 'selected' : ''}`}
                                                onClick={() => selectOption(opt, index)}
                                            >
                                                <>
                                                    <div className="innerdata">
                                                        <FaAngleRight />
                                                        {opt}
                                                    </div>
                                                </>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                    <div className="services-dd">
                        <Link to="/services" class="thm-btn sdf"> Read More</Link>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Services;
