import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import "./components_css/heatmappagestyle.css";

const HeatmapCalculator = () => {
    const [location, setLocation] = useState("");

    return (
        <section className="heatmap-calculator">
            <div className="calculator-container">
                <div className="calculator-text">
                    <p className="company-name">3MR Construction & Engineering Services</p>
                    <h1 className="title">Heatmap Calculator</h1>
                    <p className="description">
                        Enter your location to visualize your home's solar potential and estimate energy savings instantly.
                    </p>

                    <div className="input-form">
                        <FontAwesomeIcon icon={faMapMarkerAlt} className="input-icon" />
                        <input
                            type="text"
                            className="location-input"
                            placeholder="Location"
                            value={location}
                            onChange={(e) => setLocation(e.target.value)}
                        />
                        <button className="calculate-button">Calculate</button>
                    </div>

                    <div className="heatmap-result">
                        <h1 className="percentage">85%</h1>
                        <div>
                            <p className="classification">Above 80%: Excellent for Solar Panels</p>
                            <p className="explanation">
                                Your location receives optimal sunlight, making it highly efficient for solar energy.
                            </p>
                        </div>
                    </div>

                    <p className="note">
                        Note: These results rely on API data and may vary based on real-time conditions.
                    </p>

                    <button className="generate-button">Generate a Solar Plan</button>
                    <p className="generate-text">Interested? Generate a Solar Plan with us for free!</p>
                </div>

                <div className="map-container">
                    <div className="map-image" />
                    <p className="map-note">
                        This feature utilizes Google Maps to accurately determine your location for solar potential analysis.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default HeatmapCalculator;
