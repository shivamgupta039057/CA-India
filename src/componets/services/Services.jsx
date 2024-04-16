import React, { useState } from 'react';
import './style.css';
import { FaAngleRight } from "react-icons/fa6";


function Services() {
    const [isOpenList, setIsOpenList] = useState(new Array(9).fill(false));

    console.log("isOpenList ", isOpenList);

    // Updated selected options array with initial values for each box
    const [selectedOptions, setSelectedOptions] = useState([
        'Startup Advisory', // For box 1
        'Startudfsagp Advisory', // For box 2
        'Startup Advisory',
        'Startup Advisory', // For box 3
        'Startup Advisory', // For box 3
        'Startup Advisory', // For box 3
        'Startup Advisory', // For box 3
        'Startup Advisory', // For box 3
        'Startup Advisory', // For box 3
        'Startup Advisory', // For box 3
        // For box 3
        // Add more initial values as needed
    ]);

    // Updated options array with new heading names and inner option data
    const options = [
        {
            heading: 'Heading 1',
            innerOptions: [
                'Nudging Business idea to plan',
                'Pitch Desk',
                'Monthly MIS',
                'CMA Report',
                'Budgeting and Variance Analysis',
                'Cloud Accounting',
                'Taxation and Legal Compliance',
                'Treasury and Cash flow management',
                'V-CFO services'
            ]
        },
        {
            heading: 'Heading 2',
            innerOptions: [
                'New Option A',
                'New Option B',
                'New Option C',
                // Add more options as needed
            ]
        },
        {
            heading: 'Heading 1',
            innerOptions: [
                'Nudging Business idea to plan',
                'Pitch Desk',
                'Monthly MIS',
                'CMA Report',
                'Budgeting and Variance Analysis',
                'Cloud Accounting',
                'Taxation and Legal Compliance',
                'Treasury and Cash flow management',
                'V-CFO services'
            ]
        },
        {
            heading: 'Heading 1',
            innerOptions: [
                'Nudging Business idea to plan',
                'Pitch Desk',
                'Monthly MIS',
                'CMA Report',
                'Budgeting and Variance Analysis',
                'Cloud Accounting',
                'Taxation and Legal Compliance',
                'Treasury and Cash flow management',
                'V-CFO services'
            ]
        },
        {
            heading: 'Heading 1',
            innerOptions: [
                'Nudging Business idea to plan',
                'Pitch Desk',
                'Monthly MIS',
                'CMA Report',
                'Budgeting and Variance Analysis',
                'Cloud Accounting',
                'Taxation and Legal Compliance',
                'Treasury and Cash flow management',
                'V-CFO services'
            ]
        },
        {
            heading: 'Heading 1',
            innerOptions: [
                'Nudging Business idea to plan',
                'Pitch Desk',
                'Monthly MIS',
                'CMA Report',
                'Budgeting and Variance Analysis',
                'Cloud Accounting',
                'Taxation and Legal Compliance',
                'Treasury and Cash flow management',
                'V-CFO services'
            ]
        },
        {
            heading: 'Heading 1',
            innerOptions: [
                'Nudging Business idea to plan',
                'Pitch Desk',
                'Monthly MIS',
                'CMA Report',
                'Budgeting and Variance Analysis',
                'Cloud Accounting',
                'Taxation and Legal Compliance',
                'Treasury and Cash flow management',
                'V-CFO services'
            ]
        },
        {
            heading: 'Heading 1',
            innerOptions: [
                'Nudging Business idea to plan',
                'Pitch Desk',
                'Monthly MIS',
                'CMA Report',
                'Budgeting and Variance Analysis',
                'Cloud Accounting',
                'Taxation and Legal Compliance',
                'Treasury and Cash flow management',
                'V-CFO services'
            ]
        },
        {
            heading: 'Heading 1',
            innerOptions: [
                'Nudging Business idea to plan',
                'Pitch Desk',
                'Monthly MIS',
                'CMA Report',
                'Budgeting and Variance Analysis',
                'Cloud Accounting',
                'Taxation and Legal Compliance',
                'Treasury and Cash flow management',
                'V-CFO services'
            ]
        },
        {
            heading: 'Heading 1',
            innerOptions: [
                'Nudging Business idea to plan',
                'Pitch Desk',
                'Monthly MIS',
                'CMA Report',
                'Budgeting and Variance Analysis',
                'Cloud Accounting',
                'Taxation and Legal Compliance',
                'Treasury and Cash flow management',
                'V-CFO services'
            ]
        },
        // Add more objects for additional boxes
    ];

    const toggleOptionsList = (index) => {
        const newList = [...isOpenList];
        newList[index] = !newList[index];
        setIsOpenList(newList);
    };

    const selectOption = (option, index) => {
        const newOptions = [...selectedOptions];
        newOptions[index] = option;
        setSelectedOptions(newOptions);
        const newList = [...isOpenList];
        newList[index] = false;
        setIsOpenList(newList);
    };

    return (
        <section className="section-padding services-section-top" style={{ paddingBottom: "80px" }}>
            <div className="container">
                <div className="section-header">
                    <h3 className="title">Our Services</h3>
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
                </div>
            </div>
        </section>
    );
}

export default Services;
