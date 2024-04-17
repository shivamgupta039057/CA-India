import React, { useState, useEffect } from 'react'
import Subheader from '../../componets/subheader/Subheader'
import ContactDetails from '../../componets/contact-details/ContactDetails'
import { send } from 'emailjs-com';
import { ToastContainer, toast } from 'react-toastify';

function Contact() {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, []);

    const [value, setValue] = useState({
        name: '',
        email: '',
        phone: '',
        msg: ''
    });
    const [result, setResult] = useState("");
    console.log("fresfultt", result);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setValue((prevValue) => ({
            ...prevValue,
            [name]: value
        }));
    };

    const [errors, setErrors] = useState({});

    // console.log("errosfdifs", errors);

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Basic validation
        const errors = {};
        if (!value.name.trim()) {
            errors.name = 'Name is required';
        }
        if (!value.email.trim()) {
            errors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(value.email)) {
            errors.email = 'Email is invalid';
        }
        if (!value.msg.trim()) {
            errors.msg = 'Message is required';
        }

        if (Object.keys(errors).length === 0) {

            e.preventDefault();
            setResult("Sending....");
            toast("Sending....");
            const formData = new FormData(e.target);
            formData.append("access_key", "fda50228-ec51-4d80-9790-b45544a34fed");
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData
            });

            const data = await response.json();

            if (data.success) {
                setResult("Form Submitted Successfully");
                toast("Form Submitted Successfully");
                setValue({
                    name: '',
                    email: '',
                    phone: '',
                    msg: ''
                })
            } else {
                console.log("Error", data);
                setResult(data.message);
            }

            console.log('Form submitted successfully');
        } else {
            setErrors(errors);
        }


    };


    return (
        <>

            <Subheader
                images={"assets/images/contact-us-sub.jpg"}
            />

            <ContactDetails />



            <section class="section contact-pagess">
                <div class="container">
                    <div class="section-header p-0">
                        <h3 class="title">How can we help </h3>
                        <p className='submit-data'>{result ? result : ''}</p>
                    </div>

                    <form className="row contact_form" onSubmit={handleSubmit} style={{ alignItems: "center" }}>
                        <div className="col-lg-7">
                            <div className="form-group form-floating">
                                <input
                                    type="text"
                                    name="name"
                                    id="fullName"
                                    className="form-control form-control-custom"
                                    placeholder="Name"
                                    autoComplete="off"
                                    value={value.name}
                                    onChange={handleChange}
                                />
                                <label htmlFor="fullName">Name</label>
                                {errors.name && <p className="text-danger">{errors.name}</p>}
                            </div>
                            <div className="form-group form-floating">
                                <input
                                    type="email"
                                    name="email"
                                    id="emailId"
                                    className="form-control form-control-custom"
                                    value={value.email}
                                    onChange={handleChange}
                                    placeholder="Email ID" autoComplete="off"
                                />
                                <label htmlFor="emailId">Email ID</label>
                                {errors.email && <p className="text-danger">{errors.email}</p>}
                            </div>
                            <div className="form-group form-floating">
                                <input
                                    type="text"
                                    name="phone"
                                    id="phoneNo"
                                    className="form-control form-control-custom"
                                    placeholder="Phone No."
                                    autoComplete="off"
                                    value={value.phone}
                                    onChange={handleChange}
                                />
                                <label htmlFor="phoneNo">Phone No.</label>
                            </div>
                            <div className="form-group form-floating h-100">
                                <textarea
                                    rows="3"
                                    name="msg"
                                    id="message"
                                    className="form-control form-control-custom"
                                    placeholder="Explain Your Requirement"
                                    autoComplete="off"
                                    value={value.msg}
                                    onChange={handleChange}
                                ></textarea>
                                <label htmlFor="message">Explain Your Requirement</label>
                                {errors.msg && <p className="text-danger">{errors.msg}</p>}
                            </div>

                            <button type="submit" className="thm-btn">Submit</button>
                            <ToastContainer />
                        </div>
                        <div className="col-lg-5">
                            <div className="contact-img" style={{ position: "relative", top: "-40px" }}>
                                <img src="assets/images/contact.jpeg" alt="" style={{ borderRadius: "10px" }} />
                            </div>
                        </div>
                    </form>
                </div>
            </section>
        </>
    )
}

export default Contact