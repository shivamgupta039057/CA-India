import React from 'react'
import './style.css'

function ContactSection() {
    return (
        <>
            <section class="section-padding ContactSection pt-0">
                <div class="fact-counter" style={{ backgroundImage: `url("assets/images/bg/4.jpg")` }}>
                    <div class="container">
                        <div class="row">
                            <div class="content-column col-md-6 col-sm-12 col-xs-12" data-aos="fade-right"
                                data-aos-offset="300"
                                data-aos-easing="ease-in-sine">
                                <div class="inner-column">
                                    <h2>Your are <br /> 10 minitues away from the <br /> Help you need</h2>
                                    <div class="text">Capitalize on low hanging fruit to identify a ballpark <br /> value added activity to beta test.</div>
                                </div>
                            </div>
                            <div class="content-column col-md-6 col-sm-12 col-xs-12" data-aos="fade-left"
                                data-aos-offset="500"
                                data-aos-duration="500">
                                <form action="#" method="POST">
                                    <div class="row">
                                        <div class="col-md-6">
                                            <div class="form-group form-floating">
                                                <input type="text" name="name" id="fullName" class="form-control form-control-custom" placeholder="Full Name" autocomplete="off" required />
                                                <label for="fullName">Full Name</label>
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="form-group form-floating">
                                                <input type="email" name="email" id="emailId" class="form-control form-control-custom" placeholder="Email I'd" autocomplete="off" required />
                                                <label for="emailId">Email I'd</label>
                                            </div>
                                        </div>
                                        <div class="col-md-12">
                                            <div class="form-group form-floating">
                                                <input type="text" name="phone" id="phoneNo" class="form-control form-control-custom" placeholder="Phone No." autocomplete="off" required />
                                                <label for="phoneNo">Phone No.</label>
                                            </div>
                                        </div>
                                        <div class="col-md-12">
                                            <div class="form-group form-floating h-100">
                                                <textarea rows="5" name="msg" id="message" class="form-control form-control-custom" placeholder="Message" autocomplete="off"></textarea>
                                                <label for="message">Message</label>
                                            </div>
                                        </div>
                                        <div class="col-md-12 submit-data">
                                            <button type="submit" class="thm-btn btn-rectangle thm-bg-color-one w-100">Send Now</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ContactSection