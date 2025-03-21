import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import './components_css/contactpagestyle.css';

const ContactPage = () => {
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
                        placeholder="you@email.com"
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


                <button className='submit' type="submit">Submit</button>
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
                <p><FontAwesomeIcon icon={faFacebook} className="icon" /> : @3mrce</p>

                <p className='tagname'>Sustainable living starts with solar power.</p>

            </div>

        </section>
    )
}

export default ContactPage
