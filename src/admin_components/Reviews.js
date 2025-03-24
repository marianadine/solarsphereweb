import React, { useState } from "react";
import "./admincompo_css/reviewstyle.css";
import profilePic from "../imgs/article1.png";
import { faStar, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const fixedReviews = [
    { id: 1, name: "Na Jaemin", stars: 5, date: "March 10", reviewText: "Excellent service! Highly recommended." },
    { id: 2, name: "Mark Lee", stars: 4, date: "March 8", reviewText: "Very good but could be better in some areas." },
    { id: 3, name: "Lee Jeno", stars: 3, date: "March 5", reviewText: "Average experience, nothing special." },
    { id: 4, name: "Haechan", stars: 2, date: "March 2", reviewText: "Not satisfied. Needs improvement." },
    { id: 5, name: "Jisung Park", stars: 1, date: "March 1", reviewText: "Very bad experience. Do not recommend." },
];

const Reviews = () => {
    const [selectedReview, setSelectedReview] = useState(fixedReviews[0]);
    const [filterStars, setFilterStars] = useState("All");

    const filteredReviews = filterStars === "All"
        ? fixedReviews
        : fixedReviews.filter(review => review.stars === parseInt(filterStars));

    return (
        <div className="reviews-container">
            {/* Left Panel: Header + Review List */}
            <div className="review-panel">
                <div className="reviewheader">
                    <h2>Recent Reviews</h2>
                    <select className="review-filter" onChange={(e) => setFilterStars(e.target.value)}>
                        <option value="All">View All</option>
                        <option value="5">5 stars</option>
                        <option value="4">4 stars</option>
                        <option value="3">3 stars</option>
                        <option value="2">2 stars</option>
                        <option value="1">1 star</option>
                    </select>
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
                                <p className="reviewdate">Date: {review.date}</p>
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
                            className={i < selectedReview.stars ? "staricon filled" : "staricon empty"}
                        />
                    ))}
                </div>

                <p className="reviewtext">{selectedReview.reviewText}</p>
                <p className="reviewdate">{selectedReview.date}</p>

                <div className="showonwebsite">
                    <button className="addonwebsite">
                        <FontAwesomeIcon icon={faPlus} className="plus-icon" /> Show On Website
                    </button>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
                </div>
            </section>
        </div>
    );
};


export default Reviews;
