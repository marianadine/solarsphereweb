import React, { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import './components_css/contactpagestyle.css';

const ContactPage = () => {
    const [showModal, setShowModal] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setShowModal(true);

        setTimeout(() => {
            setShowModal(false);
        }, 3000);
    };

    return (
        <section className='contact-page'>
            <div className='contact-page-text'>
                <h1>Got ideas or concerns? Let’s team up.</h1>
                <p>Contact us today for any questions or to learn more about our services. We’re here to assist you with all your solar and construction needs.</p>
                <form className="cform">
                    <input
                        className='cinput'
                        type="text"
                        placeholder="Your Name"
                        required
                    />
                </form>

                <form className="cform">
                    <input
                        className='cinput'
                        type="text"
                        placeholder="you@gmail.com"
                        required
                    />
                </form>

                <form className="cform">
                    <input
                        className='cinput'
                        type="tel"
                        placeholder="+63 900 000 0000"
                        pattern="^\+63\s(9\d{2})\s\d{3}\s\d{4}$"
                        title="Enter a valid Philippine phone number (e.g., +63 912 345 6789)"
                        required
                    />
                </form>

                <form className="message-form">
                    <textarea
                        placeholder="Leave us a message..."
                        rows="6"
                        required
                    ></textarea>
                </form>


                <button className='submit' type="submit" onClick={handleSubmit}>Submit</button>
            </div>

            <div className='contact-page-side'>
                <p className="footer-company">3MR Construction & Engineering Services</p>
                <p className="footer-tagline">Your path to ideal home and affordable living.</p>

                <h4>SUPPORT</h4>
                <p>3mrce.serv@gmail.com</p>
                <a href="tel:+639328870793" className="link">
                    (+63) 9328870793
                </a>

                <h4>SOCIALS</h4>
                <p>
                    <a href="https://www.facebook.com/3mrce" target="_blank" rel="noopener noreferrer" className="social-link">
                        <FontAwesomeIcon icon={faFacebook} className="footer-icon" /> : @3mrce
                    </a>
                </p>
                <p className='tagname'>Sustainable living starts with solar power.</p>

            </div>
            
            {showModal && (
                <div className="modaloverlay">
                    <div className="modalbox">
                        <div className="modalheader">
                            <div className="checkmark">&#10004;</div>
                        </div>
                        <div className="modalcontent">
                            <h2>Thank you!</h2>
                            <p>We appreciate your interest. Our team will review your message and get back to you as soon as possible.</p>
                            <button className="modalclose" onClick={() => setShowModal(false)}>Close</button>
                        </div>
                    </div>
                </div>
            )}
        </section>
    )
}

export default ContactPage
