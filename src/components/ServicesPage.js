import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import './components_css/servicespagestyle.css';
import p1 from '../imgs/p1.jpeg';
import p4 from '../imgs/p4.jpeg';
import p5 from '../imgs/p5.jpeg';
import p6 from '../imgs/p6.jpg';
import p8 from '../imgs/p8.jpg';
import p9 from '../imgs/p9.jpg';

const ServicesPage = () => {
    const navigate = useNavigate();

    const [openIndex, setOpenIndex] = useState(null);
    const heatmapfaqs = [
        { question: 'Is the total estimated cost the final cost of the solar panel installation?', answer: 'The estimated cost may vary based on site conditions or unforeseen factors, but we provide a clear breakdown before starting.' },
        { question: 'What factors do you consider when recommending a solar panel plan for my home?', answer: 'We consider your energy consumption, roof size, location, and budget when recommending the best solar panel plan for your home.' },
    ];

    const plannerfaqs = [
        { question: 'Is the total estimated cost the final cost of the solar panel installation?', answer: 'The estimated cost may vary based on site conditions or unforeseen factors, but we provide a clear breakdown before starting.' },
        { question: 'What factors do you consider when recommending a solar panel plan for my home?', answer: 'We consider your energy consumption, roof size, location, and budget when recommending the best solar panel plan for your home.' },
    ];

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const [activeService, setActiveService] = useState(null);

    const toggleService = (service) => {
        setActiveService(activeService === service ? null : service);
    };

    return (
        <section className="services">
            <div className="services-header">
                <div className="services-text">
                    <p className="brand">3MR Construction & Engineering Services</p>
                    <h1 className="services-title">What we can offer.</h1>
                    <p className="services-description">
                        We provide top-tier construction, engineering, and solar panel installation services,
                        delivering sustainable, energy-efficient solutions that improve quality of life.
                    </p>
                    <button className="button" onClick={() => navigate('/planner')}>Generate a Solar Plan</button>
                </div>
                <div className="floating-images">
                    <img src={p1} alt="Pic 1" className="floating-img img1" />
                    <img src={p9} alt="Pic 2" className="floating-img img2" />
                    <img src={p8} alt="Pic 3" className="floating-img img3" />
                    <img src={p4} alt="Pic 4" className="floating-img img4" />
                </div>
            </div>

            <div className='services-offered'>
                {[
                    {
                        key: 'solar',
                        title: 'Solar Panel Installation',
                        description: 'We provide top-tier solar panel installation services, ensuring optimal energy efficiency and savings for your home.',
                    },
                    {
                        key: 'engineering',
                        title: 'Engineering Services',
                        description: 'Our engineering services are designed to meet your specific needs, ensuring quality and efficiency in every project.',
                    },
                    {
                        key: 'electrical',
                        title: 'Electrical Services',
                        description: 'We offer comprehensive electrical services, ensuring safe and efficient energy solutions for your home.',
                    }
                ].map((service) => (
                    <div
                        key={service.key}
                        className={`service-box-tab ${activeService === service.key ? 'active' : 'inactive'}`}
                        onClick={() => toggleService(service.key)}
                    >
                        <div className="service-title-tab">{service.title}</div>
                        {activeService === service.key && (
                            <p className="service-description-tab">{service.description}</p>
                        )}
                    </div>
                ))}
            </div>

            <div className="services-grid">
                <div className="service-box heatmap">
                    <div className="service-text">
                        <h2>Heatmap Calculator</h2>
                        <p>Offers a tailored estimated solar potential to help you understand energy savings and make informed solar decisions.</p>
                        <div className="faqs-list1">
                            {heatmapfaqs.map((faq, index) => (
                                <div
                                    key={index}
                                    className={`faq-item2 ${openIndex === index ? 'open' : ''}`}
                                    onClick={() => toggleFAQ(index)}
                                >
                                    <div className="faq-question2">
                                        {faq.question}
                                        <span className="icon">{openIndex === index ? '-' : '+'}</span>
                                    </div>
                                    {openIndex === index && <p className="faq-answer2">{faq.answer}</p>}
                                </div>
                            ))}
                        </div>
                        <button className="get-started-button" onClick={() => navigate('/heatmap')}>Get Started</button>
                    </div>
                    <img src={p5} alt="Heatmap" className="service-image" />
                </div>

                <div className="service-box planner">
                    <img src={p6} alt="Smart Solar Planner" className="service-image" />
                    <div className="service-text" style={{ marginLeft: '150px' }}>
                        <h2>Smart Solar Planner</h2>
                        <p>Choose the best solar solution based on your energy needs, roof size, ensuring optimal savings and efficiency.</p>
                        <div className="faqs-list2">
                            {plannerfaqs.map((faq, index) => (
                                <div
                                    key={index}
                                    className={`faq-item2 ${openIndex === index ? 'open' : ''}`}
                                    onClick={() => toggleFAQ(index)}
                                >
                                    <div className="faq-question2">
                                        {faq.question}
                                        <span className="icon">{openIndex === index ? '-' : '+'}</span>
                                    </div>
                                    {openIndex === index && <p className="faq-answer2">{faq.answer}</p>}
                                </div>
                            ))}
                        </div>
                        <button className="get-started-button" onClick={() => navigate('/planner')}>Get Started</button>
                    </div>
                </div>
            </div>
        </section>

    );
};

export default ServicesPage;
