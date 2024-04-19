import React, { useEffect } from 'react'
import Services from '../../componets/services/Services'
import { useThemeData } from '../../context/Context';
import Subheader from '../../componets/subheader/Subheader';
import './style.css'
import { FaAngleRight } from "react-icons/fa6";
import { FaAngleDoubleRight } from "react-icons/fa";




function ServicesPages() {
    const { countdata } = useThemeData();
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [countdata])
    return (
        <>
            <Subheader
                heading={" Our Services"}
            />
            {/*  */}

            <section class="section-padding bg-light-white blog-details">
                <div class="container">
                    <div class="row">
                        <h6 class="d-none">1</h6>
                        <div class="col-12">
                            <div class="blog-details bx-wrapper bg-custom-white padding-20">
                                <main className='main-content-section'>
                                    <div className='content-start-div'>
                                        <div className="cotent-policies-datas">
                                            <div className="row police-data-contentss">

                                                <div className="col-lg-12">
                                                    <div className="row polici-main-cont">
                                                        <div className="col-lg-12 policies-data-sub-heading">
                                                            <span
                                                                id='startBussiness'
                                                                className='top-count-heading'><FaAngleDoubleRight /></span> START BUSINESS
                                                        </div>
                                                        <div className="col-lg-12 policies-content-here">
                                                            <span className='bold-data' id='startupAdvisory'>Startup Advisory:</span>
                                                            Recognizing the unique challenges startups encounter, we manage business requirements, freeing entrepreneurs to focus on business growth. Our offerings cover a comprehensive range of services for startups.

                                                        </div>


                                                        <div className="col-lg-12 policies-ul-here">

                                                            <ul services-unorder-list>
                                                                <li><span><FaAngleRight /></span>Nudging Business idea to plan</li>
                                                                <li><span><FaAngleRight /></span>Pitch Desk</li>
                                                                <li><span><FaAngleRight /></span>Monthly MIS</li>
                                                                <li><span><FaAngleRight /></span>CMA Report</li>
                                                                <li><span><FaAngleRight /></span>Budgeting and Variance Analysis</li>
                                                                <li><span><FaAngleRight /></span>Cloud Accounting</li>
                                                                <li><span><FaAngleRight /></span>Taxation and Legal Compliance</li>
                                                                <li><span><FaAngleRight /></span>Treasury and Cash flow management</li>
                                                                <li><span><FaAngleRight /></span>V-CFO services</li>
                                                            </ul>

                                                        </div>

                                                        <div className="col-lg-12 policies-content-here">
                                                            <span className='bold-data' id='BusinessRegistration'>Business Registrations and Licences:</span>
                                                            We provide full support in obtaining the essential business registrations and licenses required to launch your business successfully. Our goal is to handle the administrative and regulatory aspects efficiently and effectively, allowing you to focus on your core business activities

                                                        </div>
                                                        <div className="col-lg-12 policies-ul-here">



                                                            <div className="row">
                                                                <div className="col-lg-6">

                                                                    <ul services-unorder-list>
                                                                        <div className='sdf'>
                                                                            <span className='span-data'>Registrations</span>
                                                                        </div>
                                                                        <li><span><FaAngleRight /></span>Sole-Proprietorship Firm</li>
                                                                        <li><span><FaAngleRight /></span>Limited Liability Partnership (LLP)</li>
                                                                        <li><span><FaAngleRight /></span>One Person Company (OPC)</li>
                                                                        <li><span><FaAngleRight /></span>Private Limited Company</li>
                                                                        <li><span><FaAngleRight /></span>Finance Company (Nidhi)</li>
                                                                        <li><span><FaAngleRight /></span>Producer Company (Farmers)</li>

                                                                    </ul>

                                                                </div>

                                                                <div className="col-lg-6">
                                                                    <div className='sdf'>
                                                                        <span className='span-data' id='BusinessLicenses'>Licenses</span>
                                                                    </div>

                                                                    <ul services-unorder-list>
                                                                        <li><span><FaAngleRight /></span>Nudging Business idea to plan</li>
                                                                        <li><span><FaAngleRight /></span>Labour License (Shop & Est)</li>
                                                                        <li><span><FaAngleRight /></span>Trade License</li>
                                                                        <li><span><FaAngleRight /></span>Drug License</li>
                                                                        <li><span><FaAngleRight /></span>Import Export Code (IEC)</li>
                                                                        <li><span><FaAngleRight /></span>Food Safety License</li>
                                                                        <li><span><FaAngleRight /></span>MSME Udyam Aadhaar</li>
                                                                    </ul>

                                                                </div>
                                                            </div>

                                                        </div>
                                                    </div>
                                                </div>

                                                {/*  */}
                                                <div className="col-lg-12">
                                                    <div className="row polici-main-cont">
                                                        <div className="col-lg-12 policies-data-sub-heading"
                                                            id='ManageBusiness'
                                                        >
                                                            <span

                                                                className='top-count-heading'><FaAngleDoubleRight /></span> MANAGE BUSINESS
                                                        </div>
                                                        <div className="col-lg-12 policies-content-here">
                                                            <span className='bold-data' id='BusinessManagement'>Business Management</span>:  Our Business Management services are designed to help entrepreneurs, startups, and established businesses navigate challenges, streamline operations, and achieve sustainable growth. We offer comprehensive Business Management services.
                                                        </div>
                                                        <div className="col-lg-12 policies-ul-here">

                                                            <ul services-unorder-list>
                                                                <li><span><FaAngleRight /></span>Fundraising</li>
                                                                <li><span><FaAngleRight /></span>Project Report</li>
                                                                <li><span><FaAngleRight /></span>Internal Financial Controls</li>
                                                                <li><span><FaAngleRight /></span>Strategic Business Advisory</li>
                                                                <li><span><FaAngleRight /></span>Payroll Management</li>
                                                                <li><span><FaAngleRight /></span>Accounting & Book-keeping</li>
                                                            </ul>

                                                        </div>
                                                        <div className="col-lg-12 policies-content-here">
                                                            <span className='bold-data' id='BusinessCompliances'>Business Compliances:</span>

                                                            Staying compliant with the ever-changing regulatory landscape is essential for the smooth operation and reputation of your business. We provide Business Compliances services for your specific needs and ensure adherence to legal requirements.
                                                        </div>
                                                        <div className="col-lg-12 policies-ul-here">

                                                            <ul services-unorder-list>
                                                                <li><span><FaAngleRight /></span>MCA Compliances</li>
                                                                <li><span><FaAngleRight /></span>Change in LLP Agreement</li>
                                                                <li><span><FaAngleRight /></span>Change in Registered Office Address</li>
                                                                <li><span><FaAngleRight /></span>Add/Remove - Directors/Partners</li>
                                                                <li><span><FaAngleRight /></span>Closing/Strike off - Company/LLP</li>
                                                                <li><span><FaAngleRight /></span>Any Other Secretarial Compliances</li>
                                                            </ul>

                                                        </div>


                                                    </div>
                                                </div>

                                                {/*  */}

                                                <div className="col-lg-12">
                                                    <div className="row polici-main-cont">
                                                        <div className="col-lg-12 policies-data-sub-heading">
                                                            <span
                                                                id='SpecializedServices'
                                                                className='top-count-heading'

                                                            ><FaAngleDoubleRight /></span>  SPECIALIZED SERVICES
                                                        </div>
                                                        <div className="col-lg-12 policies-content-here">
                                                            <span className='bold-data' id='Trademark&IPrights'>Trademark & IP rights:</span> In today's innovation-driven world, protecting your intellectual property is vital for sustaining a competitive advantage. Contact us today to learn more about how our Trademark and IP Rights services can help you protect your valuable intellectual assets and drive business success

                                                        </div>
                                                        <div className="col-lg-12 policies-ul-here">

                                                            <ul>
                                                                <li><span><FaAngleRight /></span>Trademark Registration</li>
                                                                <li><span><FaAngleRight /></span>Trademark Objection</li>
                                                                <li><span><FaAngleRight /></span>Trademark Assignment Agreement</li>
                                                                <li><span><FaAngleRight /></span>Trademark Renewal</li>
                                                                <li><span><FaAngleRight /></span>Copyright Application</li>
                                                                <li><span><FaAngleRight /></span>Patent Registration</li>
                                                            </ul>

                                                        </div>
                                                        <div className="col-lg-12 policies-content-here">
                                                            <span className='bold-data' id='NonProfitOrganisation'>Non-Profit Organization:</span>

                                                            Supporting the mission-driven work of non-profit organizations is crucial for building resilient communities and driving positive social change. We offer NPO services to focus on your mission with confidence.
                                                        </div>
                                                        <div className="col-lg-12 policies-ul-here">

                                                            <ul>
                                                                <li><span><FaAngleRight /></span>Society Registration</li>
                                                                <li><span><FaAngleRight /></span>Trust Registration</li>
                                                                <li><span><FaAngleRight /></span>Section 8 Company Registration</li>
                                                                <li><span><FaAngleRight /></span>12A Registration – IT Exemption</li>
                                                                <li><span><FaAngleRight /></span>80G Certificate – Tax Free Donations</li>
                                                            </ul>

                                                        </div>

                                                        <div className="col-lg-12 policies-content-here">
                                                            <span className='bold-data' id='GlobalStructuring'>Global Structuring:</span>

                                                            In today's globalized business landscape, expanding your operations across borders requires expert guidance to navigate the complexities of international tax regulations and business strategies. Here's how we can assist you:

                                                        </div>
                                                        <div className="col-lg-12 policies-ul-here">

                                                            <ul>
                                                                <li><span><FaAngleRight /></span>Tax and Business Restructuring</li>
                                                                <li><span><FaAngleRight /></span>Transfer Pricing Documentation</li>
                                                                <li><span><FaAngleRight /></span>Annual FEMA Compliance</li>
                                                                <li><span><FaAngleRight /></span>Business Set Up Globally</li>
                                                            </ul>

                                                        </div>

                                                        <div className="col-lg-12 policies-content-here">
                                                            <span className='bold-data' id='ExtendedServices'>Extended Services:</span>

                                                            Despite the core list of services mentioned above, there are numerous cases for which clients may require Chartered Accountancy services. Therefore, we offer a wide range of extended services, including MSME arbitration and Due Diligence. Please feel free to reach out with your requirements using our contact form.

                                                        </div>
                                                        <div className="col-lg-12 policies-ul-here">

                                                            <ul>
                                                                <li><span><FaAngleRight /></span>Net Worth Certificate for VISA</li>
                                                                <li><span><FaAngleRight /></span>MSME Arbitration</li>
                                                                <li><span><FaAngleRight /></span>Due Diligence</li>
                                                            </ul>

                                                        </div>



                                                    </div>
                                                </div>

                                                {/*  */}



                                            </div>
                                        </div>
                                    </div>
                                </main>
                            </div>
                        </div>
                    </div>
                </div>
            </section>





            {/*  */}
        </>
    )
}

export default ServicesPages