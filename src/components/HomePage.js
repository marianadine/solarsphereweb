import React, { useState, useEffect } from 'react';
import './components_css/homepagestyle.css';

import { useNavigate } from "react-router-dom";

import home from '../imgs/homeimage.jpeg';
import p1 from '../imgs/p1.jpeg';
import p2 from '../imgs/p2.jpeg';
import p3 from '../imgs/p3.jpeg';
import p4 from '../imgs/p4.jpeg';
import p5 from '../imgs/p5.jpeg';
import article1 from '../imgs/article1.png';
import article2 from '../imgs/article2.png';
import article3 from '../imgs/article3.png';
import dlappphone from '../imgs/dlappphone.png';
import dlappline from '../imgs/dlappline.png';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faSun, faFire, faLeaf } from '@fortawesome/free-solid-svg-icons';

const slides = [p1, p2, p3, p4, p5];

const HomePage = () => {
    const navigate = useNavigate();

    const [location, setLocation] = useState("");

    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    const [openIndex, setOpenIndex] = useState(null);
    const faqs = [
        { question: 'How do solar panels work?', answer: 'Solar panels convert sunlight into electricity using photovoltaic cells to power your home or business.' },
        { question: 'How much can I save with solar panels?', answer: 'Savings depend on your energy consumption and location, but solar panels can significantly reduce your monthly electricity bills.' },
        { question: 'Are solar panels worth the investment?', answer: 'Yes, solar panels offer long-term savings, increased home value, and environmental benefits.' },
        { question: 'How long do solar panels last?', answer: 'Solar panels typically last 25-30 years, with minimal maintenance required over their lifespan.' },
        { question: 'Do solar panels work in cloudy weather?', answer: 'Yes, solar panels still generate electricity on cloudy days, though efficiency may be slightly reduced.' },

    ];

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div>
            <section className="home">
                <div className="home-container">
                    <div className="home-content">
                        <p className="company-name">3MR Construction & Engineering Services</p>
                        <h1 className="headline">Sustainable living starts with solar power.</h1>
                        <p className="subtext">
                            Use our Heatmap Calculator to see how solar panels can boost your savings and sustainability!
                        </p>

                        <form className="input-form">
                            <FontAwesomeIcon icon={faMapMarkerAlt} className="input-icon" />
                            <input
                                type="text"
                                placeholder="Location"
                                value={location}
                                onChange={(e) => setLocation(e.target.value)}
                            />
                            <button type="submit" onClick={() => navigate('/heatmap')}>Get Started</button>
                        </form>
                    </div>

                    <div className="home-image">
                        <img src={home} alt="Solar-powered home" />
                    </div>
                </div>

                <div className="about-cards">
                    <div className="about-card">
                        <FontAwesomeIcon icon={faSun} className="about-icon" />
                        <div className="about-text">
                            <h3>Quality</h3>
                            <p>Ensure all projects are completed with the highest quality.</p>
                        </div>
                    </div>

                    <div className="about-card">
                        <FontAwesomeIcon icon={faFire} className="about-icon" />
                        <div className="about-text">
                            <h3>Satisfaction</h3>
                            <p>Provide exceptional service and timely project completion.</p>
                        </div>
                    </div>

                    <div className="about-card">
                        <FontAwesomeIcon icon={faLeaf} className="about-icon" />
                        <div className="about-text">
                            <h3>Eco-Friendly</h3>
                            <p>Promote green solutions and help reduce energy costs.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="motto">
                <div className="motto-slideshow">
                    <p className="motto-name">3MR Construction & Engineering Services</p>
                    {slides.map((slide, index) => (
                        <img
                            key={index}
                            src={slide}
                            alt="installation"
                            className={index === currentSlide ? "active" : ""}
                        />
                    ))}
                </div>

                <div className="motto-content">
                    <p className="motto-text">
                        Providing high-quality, sustainable construction and engineering solutions that make dream homes accessible and affordable for all.
                    </p>
                    <h2 className="motto-header">Your path to ideal home and affordable living.</h2>
                </div>
            </section>

            <section className="downloadapp">
                <div className="downloadapp-content">
                    <h2 className="downloadapp-header">
                        Harness solar energy today for a brighter, greener tomorrow.
                    </h2>
                    <button className="downloadapp-button">Download App</button>
                </div>

                <div className="downloadapp-image-container">
                    <img src={dlappline} alt="Decorative Line" className="downloadapp-line" />
                    <img src={dlappphone} alt="Download App Phone" className="downloadapp-phone" />
                </div>
                <div>
                    <p className="downloadapp-text">
                        Using solar power today reduces environmental impact and paves the way
                        for a cleaner, sustainable future.
                    </p>
                </div>
            </section>

            <section className="readarticles">
                <div className="readarticles-content">
                    <h2 className="readarticles-header">Read Articles</h2>
                    <p className="readarticles-text">
                        Discover in-depth articles on solar energy, sustainability, and cost-saving tips to help you make informed decisions about your solar power journey.
                    </p>
                </div>

                <div className="readarticles-cards">
                    <div className="readarticles-card">
                        <img src={article1} alt="Benefits of Solar Energy" />
                        <div className="readarticles-card-content">
                            <p className="readarticles-card-title">Benefits of Solar Energy</p>
                            <p className="readarticles-card-text">Discover how modern solar panels maximize energy output.</p>
                        </div>
                        <div className="readarticles-card-info">7 minute read</div>
                        <div
                            className="readarticles-arrow"
                            onClick={() => navigate('/article1')}
                            style={{ cursor: 'pointer' }}
                        >↗</div>
                    </div>

                    <div className="readarticles-card">
                        <img src={article2} alt="Global Impact of Solar" />
                        <div className="readarticles-card-content">
                            <p className="readarticles-card-title">Global Impact of Solar</p>
                            <p className="readarticles-card-text">Learn how we contribute to a greener environment.</p>
                        </div>
                        <div className="readarticles-card-info">6 minute read</div>
                        <div
                            className="readarticles-arrow"
                            onClick={() => navigate('/article2')}
                            style={{ cursor: 'pointer' }}
                        >↗</div>
                    </div>

                    <div className="readarticles-card">
                        <img src={article3} alt="Future of Solar Energy" />
                        <div className="readarticles-card-content">
                            <p className="readarticles-card-title">Future of Solar Energy</p>
                            <p className="readarticles-card-text">Find out how you can reduce your electricity bills with solar.</p>
                        </div>
                        <div className="readarticles-card-info">5 minute read</div>
                        <div
                            className="readarticles-arrow"
                            onClick={() => navigate('/article3')}
                            style={{ cursor: 'pointer' }}
                        >↗</div>
                    </div>
                </div>
            </section>

            <section className="faqs">
                <div className="faqs-content">
                    <h2 className="faqs-header">Any questions? We got you.</h2>
                    <p className="faqs-text">
                        We're here to provide answers and help you every step of the way!
                    </p>
                    <button className="contact-button">Contact Us</button>
                </div>
                <div className="faqs-list">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className={`faq-item ${openIndex === index ? 'open' : ''}`}
                            onClick={() => toggleFAQ(index)}
                        >
                            <div className="faq-question">
                                {faq.question}
                                <span className="icon">{openIndex === index ? '-' : '+'}</span>
                            </div>
                            {openIndex === index && <p className="faq-answer">{faq.answer}</p>}
                        </div>
                    ))}
                </div>
            </section>

        </div>

    );
};

export default HomePage;
