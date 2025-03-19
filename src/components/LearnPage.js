import React from 'react';
import pic from '../imgs/whowearepic.png';
import './components_css/learnpagestyle.css';

const LearnPage = () => {
    return (
        <div>
            <section className="vision">
                <div className="vision-content">
                    <button className="tag">Our Vision</button>
                    <h1 className="vision-title">Who We Are</h1>
                    <p className="vision-description">
                        We are a team of dedicated professionals passionate about delivering high-quality
                        construction, engineering, and solar panel installation services.
                    </p>
                </div>

                <div className="vision-image">
                    <img src={pic} alt="Solar Panels" />
                </div>
            </section>

            <section className="mission">
            <div className="mission-content">
                <button className="tag">Our Mission</button>
                <p className="mission-description">
                    Our mission is to provide affordable housing, eco-friendly energy solutions, and innovative engineering to 
                    <span className="highlight"> make a lasting impact on the communities we serve.</span>
                </p>

                <div className="mission-footer">
                    <p className="mission-subtext">
                        We strive to build a future where quality construction and sustainable living are accessible to everyone.
                    </p>
                    <p className="mission-brand">3MR Construction & Engineering Services</p>
                </div>
            </div>
        </section>

        <section className='rate'>
            <div className='rate-content'>
                <button className="rate-button">Rate Us</button>
                <div className='rate-info'>
                    <h2 className="rate-title">what our clients say about us</h2>
                    <p className='rate-description'>Your review helps us improve and guide others in choosing quality construction, engineering, and solar solutions.</p>
                </div>
            </div>
            <div className='reviews'>

            </div>
        </section>
        </div>

    );
};

export default LearnPage;
