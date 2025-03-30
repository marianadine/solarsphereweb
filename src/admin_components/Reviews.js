import React, { useState } from "react";
import "./admincompo_css/reviewstyle.css";
import profilePic from "../imgs/article1.png";
import { faStar, faPlus, faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const fixedReviews = [
    {
        id: 1,
        name: "Na Jaemin",
        stars: 5,
        date: "March 10, 2025",
        reviewText: "Excellent service! The team was professional, punctual, and extremely knowledgeable. They answered all my questions and ensured the installation process was smooth. I’ve noticed a significant decrease in my electricity bills, and I couldn't be happier. Highly recommended!"
    },
    {
        id: 2,
        name: "Mark Lee",
        stars: 4,
        date: "March 8, 2025",
        reviewText: "Very good service overall, but there’s still room for improvement. The installation was done well, and the solar panels are performing efficiently. However, customer support took a bit longer than expected to respond to my inquiries. Still, I appreciate their effort and dedication."
    },
    {
        id: 3,
        name: "Lee Jeno",
        stars: 3,
        date: "March 5, 2025",
        reviewText: "An average experience. The team was friendly, but there were some delays in the installation schedule. The panels are working fine, but I was expecting a bit more in terms of after-sales support and guidance on maintenance. It's okay, but not outstanding."
    },
    {
        id: 4,
        name: "Lee Haechan",
        stars: 2,
        date: "March 2, 2025",
        reviewText: "Not satisfied with the service. The installation took longer than promised, and there was a lack of clear communication. While the system works, I faced some initial issues that should have been avoided with better planning and coordination."
    },
    {
        id: 5,
        name: "Jisung Park",
        stars: 1,
        date: "March 1, 2025",
        reviewText: "Very bad experience. The customer service was unresponsive, and the installation team seemed disorganized. I encountered multiple issues with the setup, and getting them resolved was a hassle. I would not recommend this service based on my experience."
    },
    {
        id: 6,
        name: "Kim Doyoung",
        stars: 5,
        date: "February 28, 2025",
        reviewText: "Outstanding work! The team provided a detailed consultation, ensuring I understood the benefits of solar energy. The installation was seamless, and the panels have been delivering great results. A fantastic investment!"
    },
    {
        id: 7,
        name: "Jungwoo Kim",
        stars: 4,
        date: "February 25, 2025",
        reviewText: "Happy with my solar setup! The team was efficient, and the pricing was reasonable. My only issue was a minor delay in scheduling, but apart from that, everything went smoothly. Would definitely recommend them!"
    },
    {
        id: 8,
        name: "Johnny Suh",
        stars: 3,
        date: "February 20, 2025",
        reviewText: "The installation was okay, but the initial consultation could have been more informative. I had to do a lot of my own research. The system works fine, but the process felt a bit rushed. Decent, but not exceptional."
    },
    {
        id: 9,
        name: "Lee Taeyong",
        stars: 2,
        date: "February 15, 2025",
        reviewText: "I had high expectations, but unfortunately, the service did not meet them. The team was late, and there was a lack of proper communication. While the system functions, the overall experience left much to be desired."
    },
    {
        id: 10,
        name: "Yuta Nakamoto",
        stars: 1,
        date: "February 10, 2025",
        reviewText: "Extremely disappointed. The installation was not done properly, and I had to call them multiple times to fix issues. Customer support was slow to respond, and the experience was frustrating. Would not recommend."
    }
];

const Reviews = () => {
    const [selectedReview, setSelectedReview] = useState(fixedReviews[0]);
    const [filterStars, setFilterStars] = useState("All");
    const [showConfirmation, setShowConfirmation] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);

    const sortedReviews = [...fixedReviews].sort((a, b) => new Date(b.date) - new Date(a.date));

    const filteredReviews =
        filterStars === "All"
            ? sortedReviews
            : filterStars === "Latest"
                ? sortedReviews
                : sortedReviews.filter((review) => review.stars === parseInt(filterStars));
    
    const handleConfirmShowOnWebsite = () => {
        setShowConfirmation(true);
    };

    const handleAddToWebsite = () => {
        setShowConfirmation(false);
        setShowSuccess(true);
        setTimeout(() => setShowSuccess(false), 3000);
    };

    return (
        <div className="reviews-container">
            {/* Left Panel: Header + Review List */}
            <div className="review-panel">
                <div className="reviewheader">
                    <h2>Recent Reviews</h2>

                    <div className="review-filter-wrapper">
                        <select className="review-filter" onChange={(e) => setFilterStars(e.target.value)}>
                            <option value="All">View All</option>
                            <option value="Latest">By Date</option>
                            <option value="5">5 stars</option>
                            <option value="4">4 stars</option>
                            <option value="3">3 stars</option>
                            <option value="2">2 stars</option>
                            <option value="1">1 star</option>
                        </select>
                        <FontAwesomeIcon icon={faChevronDown} className="review-dropdown-icon" />
                    </div>
                </div>


                <section className="reviewlist">
                    <div className="review-cards">
                        {filteredReviews.map((review) => (
                            <div
                                key={review.id}
                                className={`reviewcard ${selectedReview.id === review.id ? "active" : ""}`}
                                onClick={() => setSelectedReview(review)}
                            >
                                <p className="reviewname">{review.name}</p>
                                <p>{review.stars} stars</p>
                                <p>{review.date}</p>
                            </div>
                        ))}
                    </div>
                </section>
            </div>

            {/* Right Panel: Detailed Review */}
            <section className="viewreview">
                <p className="total-reviews">Total Reviews: {filteredReviews.length}</p>

                <div className="reviewer">
                    <img src={profilePic} alt="Profile" className="profile-pic" />
                    <p className="reviewername">{selectedReview.name}</p>
                </div>

                <div className="reviewstars">
                    {[...Array(5)].map((_, i) => (
                        <FontAwesomeIcon
                            key={i}
                            icon={faStar}
                            className={`staricon ${i < selectedReview.stars ? "filled" : "empty"}`}
                        />
                    ))}
                </div>

                <p className="reviewtext">{selectedReview.reviewText}</p>
                <p className="reviewdate">{selectedReview.date}</p>

                <div className="showonwebsite">
                    <button className="addonwebsite" onClick={handleConfirmShowOnWebsite}>
                        <FontAwesomeIcon icon={faPlus} className="plus-icon"/> Show On Website
                    </button>
                    <p>Easily manage customer reviews by reviewing, filtering, and selecting which testimonials to display on the website.</p>
                </div>
            </section>

            {/* Confirmation Modal */}
            {showConfirmation && (
                <div className="modaloverlay">
                    <div className="confirmationmodalbox">
                        <h2>Are you sure?</h2>
                        <p>Do you want to add this review to your website?</p>
                        <div className="modal-buttons">
                            <button className="modalyesbtn" onClick={handleAddToWebsite}>Yes</button>
                            <button className="modalnobtn" onClick={() => setShowConfirmation(false)}>No</button>
                        </div>
                    </div>
                </div>
            )}

            {/* Success Modal */}
            {showSuccess && (
                <div className="modaloverlay">
                    <div className="modalbox">
                        <div className="modalheader">
                            <div className="checkmark">&#10004;</div>
                        </div>
                        <div className="modalcontent">
                            <h2>Success!</h2>
                            <p>The review has been added to the website.</p>
                            <button className="modalclose" onClick={() => setShowSuccess(false)}>Close</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};


export default Reviews;
