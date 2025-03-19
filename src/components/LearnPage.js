import React, { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import pic from "../imgs/learngradient.png";
import { Leaf, Heart, Wrench } from "lucide-react";
import "./components_css/learnpagestyle.css";

const LearnPage = () => {
    const missionText = "Our mission is to provide affordable housing, eco-friendly energy solutions, and innovative engineering to make a lasting impact on the communities we serve.";
    const [typedText, setTypedText] = useState("");

    const missionRef = useRef(null);
    const isInView = useInView(missionRef, { once: true });

    useEffect(() => {
        if (!isInView) return;

        let index = 0;
        const typeEffect = setInterval(() => {
            if (index < missionText.length) {
                setTypedText(missionText.slice(0, index + 1));
                index++;
            } else {
                clearInterval(typeEffect);
            }
        }, 30);

        return () => clearInterval(typeEffect);
    }, [isInView]);

    const renderMissionText = () => {
        return typedText.split(" ").map((word, index) => (
            <span key={index} className="hover-word">
                {word}
                <span>&nbsp;</span>
            </span>
        ));
    };

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

                    <div className="floating-box sustainability">
                        <div className="icon-wrapper">
                            <Leaf size={30} color="white" />
                        </div>
                        <div className="floating-text">
                            <h3>Sustainability</h3>
                            <p>Lead sustainable construction with energy-efficient solutions.</p>
                        </div>
                    </div>

                    <div className="floating-box community">
                        <div className="icon-wrapper">
                            <Heart size={30} color="white" />
                        </div>
                        <div className="floating-text">
                            <h3>Community</h3>
                            <p>Transform communities by providing affordable, proud homes.</p>
                        </div>
                    </div>

                    <div className="floating-box innovation">
                        <div className="icon-wrapper">
                            <Wrench size={30} color="white" />
                        </div>
                        <div className="floating-text">
                            <h3>Innovation</h3>
                            <p>Innovate construction through efficient engineering.</p>
                        </div>
                    </div>

                    <motion.div
                        className="mission-content"
                        ref={missionRef}
                        initial={{ opacity: 0, y: 50 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 1.2 }}
                    >
                        <button className="tag" style={{ color: "#fff", border: "1.5px solid #fff", margin: "-20px 20px" }}>
                            Our Mission
                        </button>
                        <p className="mission-description">{renderMissionText()}</p>

                        <div className="mission-footer">
                            <p className="mission-subtext">
                                We strive to build a future where quality construction and sustainable living are accessible to everyone.
                            </p>
                            <p className="mission-brand">3MR Construction & Engineering Services</p>
                        </div>
                    </motion.div>
                </div>
            </section>

            <section className="rate">
                <div className="rate-content">
                    <button className="rate-button">Rate Us</button>
                    <div className="rate-info">
                        <h2 className="rate-title">What our clients say about us</h2>
                        <p className="rate-description">
                            Your review helps us improve and guide others in choosing quality construction, engineering, and solar solutions.
                        </p>
                    </div>
                </div>
                <div className="reviews"></div>
            </section>
        </div>
    );
};

export default LearnPage;
