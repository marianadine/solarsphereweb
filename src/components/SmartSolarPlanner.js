import React, { useState } from 'react';
import "./components_css/plannerstyle.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from "react-router-dom";

const SmartSolarPlanner = () => {
    const navigate = useNavigate();

    const [location, setLocation] = useState('');
    const [roofType, setRoofType] = useState('');
    const [bill, setBill] = useState('');
    const [selected, setSelected] = useState("Yes");

    return (
        <section className="planner">
            <div className="planner_container">
                <p className="plannercompany-name">3MR Construction & Engineering Services</p>
                <h1 className='plannertitle'>Smart Solar Planner</h1>

                <p className="section-title">Solar Related Information</p>

                <p className="label">Address</p>
                <div className="planner-form">
                    <FontAwesomeIcon icon={faMapMarkerAlt} className="planner-icon" />
                    <input
                        type="text"
                        placeholder="Location"
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                    />
                </div>

                <p className="label">Roof Type</p>
                <div className="planner-dropdown">
                    <select value={roofType} onChange={(e) => setRoofType(e.target.value)}>
                        <option value="">Select Roof Type</option>
                        <option value="Metal">Metal</option>
                        <option value="Flat">Flat</option>
                    </select>
                </div>
                <p className='note'>Installation fees may vary based on your roof type and specific site conditions.</p>

                <div className="label-container">
                    <p className="label">Electricity Bill</p>
                    <div className="info-icon">
                        <FontAwesomeIcon icon={faInfoCircle} />
                        <span className="tooltip">To determine your monthly electricity bill from your Meralco bill, check the Total kWh Used and the Total Amount Due. Divide the amount due by the kWh used to get the cost per kWh. Reviewing past bills can help track usage and find ways to save.</span>
                    </div>
                </div>
                <div className="planner-form">
                    <input
                        type="text"
                        placeholder="Monthly Electricity Bill"
                        value={bill}
                        onChange={(e) => setBill(e.target.value)}
                    />
                </div>
                <p className='note'>Enter your latest Meralco bill to help us estimate your solar energy savings.</p>

                <div className="label-container">
                    <p className="label">Apply for Net Metering</p>
                    <div className="info-icon">
                        <FontAwesomeIcon icon={faInfoCircle} />
                        <span className="tooltip">Net Metering is a government-approved program that allows solar panel owners to sell excess electricity to Meralco. This helps reduce electricity bills by offsetting power consumed from the grid.</span>
                    </div>
                </div>

                <div className="toggle-button" data-selected={selected}>
                    <button
                        className={selected === "Yes" ? "active" : ""}
                        onClick={() => setSelected("Yes")}
                    >
                        Yes
                    </button>
                    <button
                        className={selected === "No" ? "active" : ""}
                        onClick={() => setSelected("No")}
                    >
                        No
                    </button>
                </div>
                <p className='note'>Please note that fees may apply when applying for net metering with your solar installation.</p>

                <button className="planner-button" onClick={() => navigate('/summary')}>Generate</button>
            </div>

            <div className='imagecontainer'>
                <p>Map Image Placeholder</p>
            </div>

        </section>
    );
}

export default SmartSolarPlanner;
