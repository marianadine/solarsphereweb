import React, { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import pic from "../imgs/learngradient.png";
import logo from '../imgs/3MRlogohorizontal.png';
import sunIcon from "../imgs/3dsun.png";

import { X, Leaf, Heart, Wrench } from "lucide-react";
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

    const reviewRef = useRef(null);

    useEffect(() => {
        const reviews = reviewRef.current;
        if (!reviews) return;

        let scrollSpeed = 1;
        let requestId;

        const scrollReviews = () => {
            reviews.scrollLeft += scrollSpeed;

            if (reviews.scrollLeft >= reviews.scrollWidth - reviews.clientWidth) {
                reviews.scrollLeft = 0;
            }

            requestId = requestAnimationFrame(scrollReviews);
        };

        requestId = requestAnimationFrame(scrollReviews);

        return () => cancelAnimationFrame(requestId);
    }, []);

    const [showPopup, setShowPopup] = useState(false);
    const [reviewText, setReviewText] = useState("");
    const [isAnonymous, setIsAnonymous] = useState(false);

    const togglePopup = () => setShowPopup(!showPopup);

    const handleReviewSubmit = () => {
        console.log("Review Submitted:", { review: reviewText, anonymous: isAnonymous });
        setShowPopup(false);
        setReviewText("");
        setIsAnonymous(false);
        setShowModal(true);

        setTimeout(() => {
            setShowModal(false);
        }, 3000);
    };

    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);
    const [showModal, setShowModal] = useState(false);

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
                    <button className="rate-button" onClick={togglePopup}>Rate Us</button>
                    <div className="rate-info">
                        <h2 className="rate-title">What our clients say about us</h2>
                        <p className="rate-description">
                            Your review helps us improve and guide others in choosing quality construction, engineering, and solar solutions.
                        </p>
                    </div>
                </div>
                <div className="reviews" ref={reviewRef}>
                    {[...Array(2)].flatMap(() => ([
                        <div className="review-box">Review 1</div>,
                        <div className="review-box">Review 2</div>,
                        <div className="review-box">Review 3</div>,
                        <div className="review-box">Review 4</div>,
                        <div className="review-box">Review 5</div>,
                        <div className="review-box">Review 6</div>,
                        <div className="review-box">Review 7</div>,
                        <div className="review-box">Review 8</div>
                    ]))}
                </div>
            </section>

            {showPopup && (
                <div className="popup-review-overlay">
                    <div className="popup-review-box">
                        <div className="popup-review-header">
                            <img src={logo} alt="3MR Logo" className="review-logo" />
                            <button className="closereviewbutton" onClick={togglePopup}>
                                <X size={24} />
                            </button>
                        </div>
                        <h2 className="review-title">How are you feeling?</h2>
                        <p className="review-description">
                            Share your thoughts with us! Let us know about your experience. Your feedback helps us improve and serve you better.
                        </p>

                        <div className="star-rating">
                            {[...Array(5)].map((_, index) => {
                                const starValue = index + 1;
                                return (
                                    <span
                                        key={index}
                                        className={`star ${starValue <= (hover || rating) ? "filled" : "empty"}`}
                                        onClick={() => setRating(starValue)}
                                        onMouseEnter={() => setHover(starValue)}
                                        onMouseLeave={() => setHover(0)}
                                    >
                                        ★
                                    </span>
                                );
                            })}
                        </div>

                        <textarea
                            className="review-textarea"
                            placeholder="Write your review..."
                            value={reviewText}
                            maxLength={800}
                            rows={5}
                            onChange={(e) => setReviewText(e.target.value)}
                        ></textarea>
                        <div className="review-footer">
                            <span className="char-count">{reviewText.length}/800</span>
                            <label className="anonymous-option">
                                <input type="checkbox" checked={isAnonymous} onChange={() => setIsAnonymous(!isAnonymous)} />
                                Submit Anonymously
                            </label>
                        </div>
                        <button className="submit-review-button" onClick={handleReviewSubmit}>
                            Submit
                        </button>
                    </div>
                </div>
            )}

            {showModal && (
                <div className="modalreviewoverlay">
                    <div className="modalreviewcontent">
                        <div className="popup-review-header">
                            <img src={logo} alt="3MR Logo" className="review-logo" />
                        </div>
                        <img src={sunIcon} alt="Thank you" className="modalreviewicon" />
                        <h2>Thank you for your feedback!</h2>
                        <p>We appreciate your time and will use your feedback to improve our services.</p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default LearnPage;
