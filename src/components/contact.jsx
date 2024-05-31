import React from 'react'

function Contact(props) {
    return (
        <div>
            <div id='contact'>
                <div className='container'>
                    <div className='col-md-8'>
                        <div className='row'>
                            <div className='section-title'>
                                <h2>Get in touch</h2>
                                <p>
                                    Please fill out the form below to send us an email and we will
                                    get back to you as soon as possible.
                                </p>
                            </div>
                            <form validate name='sentMessage' onSubmit={() => { }}>
                                <div className='row'>
                                    <div className='col-md-6'>
                                        <div className='form-group'>
                                            <input
                                                type='text'
                                                placeholder='enter your name'
                                                className='form-control'
                                                name='name'
                                                required
                                                onChange={() => { }}
                                            />
                                            <p className='help-block text-danger'></p>
                                        </div>
                                    </div>
                                    <div className='col-md-6'>
                                        <div className='form-group'>
                                            <input
                                                type='email'
                                                placeholder='enter your email'
                                                className='form-control'
                                                name='email'
                                                required
                                                onChange={() => { }}
                                            />
                                            <p className='help-block text-danger'></p>
                                        </div>
                                    </div>
                                </div>
                                <div className='form-group'>
                                    <textarea
                                        name='message'
                                        id='message'
                                        required rows="4"
                                        placeholder='message'
                                        className='form-control'
                                        onChange={() => { }}
                                    />
                                    <p className="help-block text-danger"></p>
                                </div>
                                <div id='success'></div>
                                <button type='submit' className='btn btn-lg btn-custom'>
                                    Send Message
                                </button>
                            </form>
                        </div>
                    </div>
                    {/* Contacts section */}
                    <div className='col-md-3 col-md-offset-1 contact-info'>
                        <div className='contact-item'>
                            <h3>Contact Info</h3>
                            <p>
                                <span>
                                    <i className='fa fa-map-marker'></i> Address
                                </span>
                            </p>
                            {props.data ? props.data.address : 'loading...'}
                        </div>
                        <div className='contact-item'>
                            <p>
                                <span> <i className='fa fa-phone'></i> Phone</span>
                            </p>
                            {props.data ? props.data.phone : 'loading...'}
                        </div>
                        <div className='contact-item'>
                            <p>
                                <span>
                                    <i className='fa fa-envelope-o'></i> Email
                                </span>
                            </p>
                            {props.data ? props.data.email : 'loading...'}
                        </div>
                    </div>
                    {/* Contact Links */}
                    <div className='col-md-12'>
                        <div className='row'>
                            <div className='social'>
                                <ul>
                                    <li>
                                        <a href={props.data ? props.data.instagram : "/"} />
                                        <i className='fa fa-instagram'></i>
                                    </li>
                                    <li>
                                        <a href={props.data ? props.data.linkedin : "/"} />
                                        <i className='fa fa-linkedin'></i>
                                    </li>
                                    <li>
                                        <a href={props.data ? props.data.github : "/"} />
                                        <i className='fa fa-github'></i>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div className='footer'>
                <div className='container text-center'>
                    <p>
                        &copy; 2024 Startup - Developed & Design by{" "}
                        <a href="https://www.linkedin.com/in/avi-jha" rel="nofollow">
                            Avinash
                        </a>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Contact