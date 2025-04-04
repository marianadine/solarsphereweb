import React, { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import aboutpanels from "../imgs/aboutpanels.png";
import logo from '../imgs/3MRlogohorizontal.png';
import sunIcon from "../imgs/3dsun.png";

import { X, Leaf, Heart, Wrench } from "lucide-react";
import "./components_css/aboutpagestyle.css";

const AboutPage = () => {
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

    const [reviewsData, setReviewsData] = useState([
        { name: "John Doe", text: "Excellent service and great attention to detail!", date: new Date(), anonymous: false, rating: 5 },
        { name: "Anonymous", text: "Highly recommend this team for solar panel installation.", date: new Date(), anonymous: true, rating: 4 },
        { name: "Emily Smith", text: "Fast and reliable construction services. Very satisfied!", date: new Date(), anonymous: false, rating: 4 },
        { name: "Michael Johnson", text: "Affordable pricing and professional team.", date: new Date(), anonymous: false, rating: 5 },
        { name: "Anonymous", text: "Great customer support and after-sales service.", date: new Date(), anonymous: true, rating: 4 },
        { name: "Sophia Martinez", text: "Highly efficient and eco-friendly solutions!", date: new Date(), anonymous: false, rating: 5 },
    ]);

    const renderStars = (rating) => {
        return [...Array(5)].map((_, index) => (
            <span key={index} className={`star ${index < rating ? "filled" : "empty"}`}>★</span>
        ));
    };

    const formatDate = (date) => {
        return new Intl.DateTimeFormat('en-US', { month: 'long', day: 'numeric', year: 'numeric' }).format(date);
    };

    const reviewRef = useRef(null);

    useEffect(() => {
        const reviews = reviewRef.current;
        if (!reviews) return;

        let scrollSpeed = 1;
        let requestId;

        const scrollReviews = () => {
            reviews.scrollLeft += scrollSpeed;
            if (reviews.scrollLeft >= reviews.scrollWidth / 2) {
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
        const newReview = {
            name: isAnonymous ? "Anonymous" : "User",
            text: reviewText,
            date: new Date(),
            anonymous: isAnonymous,
            rating: rating,
        };

        setReviewsData((prevReviews) => [...prevReviews, newReview]);
        setShowPopup(false);
        setReviewText("");
        setRating(0);
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
                    <p className="tag">Our Vision</p>
                    <h1 className="vision-title">Who We Are</h1>
                    <p className="vision-description">
                        We are a team of dedicated professionals passionate about delivering high-quality
                        construction, engineering, and solar panel installation services.
                    </p>
                </div>

                <div className="vision-image">
                    <img src={aboutpanels} alt="Solar Panels" />

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
                </div>

                <div className="mission">
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

            <section className="team">
                <div className="team-content">
                    <p className="tag">Our Team</p>
                    <h1 className="team-title">Meet the Team</h1>
                    <p className="team-description">
                        We are currently a growing company, and by trusting us, you help us grow while we provide you with exceptional service.
                    </p>
                </div>

                <div className="ownersection">
                    <div className="owner-box">
                        <div className="owner-img">
                            <div className="placeholder-box owner-placeholder"></div>
                            <h3 className="owner-name">Bien Rufo</h3>
                            <p className="owner-position">Owner</p>
                        </div>
                    </div>

                    <div className="ownermsg">
                        <p>As an expanding organization, your confidence propels our advancement and empowers us to provide outstanding and unparalleled service. Your trust fuels our dedication to innovation, quality, and sustainability, allowing us to build not just homes but brighter futures. Together, we create lasting value, one project at a time.</p>

                        <div className="ownermsgfooter">
                            <p className="tag">3MRCE</p>
                            <p className="tag">May 2023</p>
                        </div>
                    </div>
                </div>

                <div className="employeesection">
                    <div className="employee-row">
                        <div className="employee-box">
                            <div className="employee-img">
                                <div className="placeholder-box employee-placeholder"></div>
                            </div>
                            <div className="employee-info">
                                <h3 className="employee-name">Employee Name</h3>
                                <p className="employee-position">Project Manager</p>
                            </div>
                        </div>

                        <div className="employee-box">
                            <div className="employee-img">
                                <div className="placeholder-box employee-placeholder"></div>
                            </div>
                            <div className="employee-info">
                                <h3 className="employee-name">Employee Name</h3>
                                <p className="employee-position">Lead Engineer</p>
                            </div>
                        </div>

                        <div className="employee-box">
                            <div className="employee-img">
                                <div className="placeholder-box employee-placeholder"></div>
                            </div>
                            <div className="employee-info">
                                <h3 className="employee-name">Employee Name</h3>
                                <p className="employee-position">Marketing Specialist</p>
                            </div>
                        </div>
                    </div>

                    <div className="employee-row">
                        <div className="employee-box">
                            <div className="employee-img">
                                <div className="placeholder-box employee-placeholder"></div>
                            </div>
                            <div className="employee-info">
                                <h3 className="employee-name">Employee Name</h3>
                                <p className="employee-position">Sales Executive</p>
                            </div>
                        </div>

                        <div className="employee-box">
                            <div className="employee-img">
                                <div className="placeholder-box employee-placeholder"></div>
                            </div>
                            <div className="employee-info">
                                <h3 className="employee-name">Employee Name</h3>
                                <p className="employee-position">Design Lead</p>
                            </div>
                        </div>

                        <div className="employee-box">
                            <div className="employee-img">
                                <div className="placeholder-box employee-placeholder"></div>
                            </div>
                            <div className="employee-info">
                                <h3 className="employee-name">Employee Name</h3>
                                <p className="employee-position">Developer</p>
                            </div>
                        </div>
                    </div>
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
                <div className="aboutreviews" ref={reviewRef}>
                    {reviewsData.map((review, index) => (
                        <div className="aboutreviewbox" key={index}>
                            <div className="aboutreviewheader">
                                <div className="profile-pic">
                                    {review.anonymous ? (
                                        <div className="anonymous-pic">A</div>
                                    ) : (
                                        <img src={`profile-image-${index}.jpg`} alt="User Profile" />
                                    )}
                                </div>
                                <span className="review-name">{review.anonymous ? "Anonymous" : review.name}</span>
                            </div>
                            <div className="aboutreviewrating">
                                {renderStars(review.rating)}
                            </div>
                            <p className="aboutreviewtext">{review.text}</p>
                            <div className="aboutreviewfooter">
                                <span className="aboutreviewdate">{formatDate(review.date)}</span>
                            </div>
                        </div>
                    ))}
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

export default AboutPage;
