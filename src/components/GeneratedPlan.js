import React, { useState } from 'react';
import { useNavigate } from "react-router-dom"; // Import useNavigate for navigation
import "./components_css/generatedplanstyle.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import solarpanel from '../imgs/solarpanel.png';

const GeneratedPlan = () => {
    const navigate = useNavigate();  // Initialize the navigate hook
    const [showModal, setShowModal] = useState(false);
    const [showNoModal, setShowNoModal] = useState(false);
    const [showYesModal, setShowYesModal] = useState(false); 
    const [selected, setSelected] = useState("Yes"); // Default selection for first modal

    const handleSubmit = (e) => {
        e.preventDefault();
        setShowModal(true);  // Show the first modal when Done is clicked
    };

    const handleYesClick = () => {
        setSelected("Yes");
    };

    const handleNoClick = () => {
        setSelected("No");
    };

    const handleYesDownloadClick = () => {
        setSelected("Yes");
    };

    const handleNoDownloadClick = () => {
        setSelected("Not Now");
    };

    const handleContinue = () => {
        if (selected === "Yes") {
            setShowModal(false);  // Close the first modal
            setShowYesModal(true);  // Show the Yes modal
        } else if (selected === "No") {
            setShowModal(false);  // Close the first modal
            setShowNoModal(true);  // Show the No modal
        }
    };

    const handleNotNowClick = () => {
        if (selected === "Yes") {
            setShowYesModal(false);  // Close the Yes modal
        navigate("/");  // Navigate to home page
        } else if (selected === "Not Now") {
            setShowYesModal(false);  // Close the modal if "Not Now" is clicked
        }
    };

    return (
        <section className='generatedplan'>
            <div className='generatedplan_container'>
                <p className="plannercompany-name">3MR Construction & Engineering Services</p>
                <h1 className='plannertitle'>Smart Solar Planner</h1>

                <p className="section-title">Your Solar Plan</p>
                <p className='warranty'>
                    The installation includes a 5-year workmanship warranty. Solar panels come with a 30-year performance warranty and a 12-year product warranty. 
                    The inverter is covered by a 5-year warranty. Full details will be provided in the contract.
                </p>

                <div className='requirements'>
                    <p>Requirements:</p>
                    <ul className="materials">
                        <li>3.21 sqm Solar Panels</li>
                        <li>Inverter</li>
                    </ul>
                </div>

                <p className='note'>*To be discussed by the client.</p>

                <div className='totalsystemcost'>
                    <p>Total System Cost</p>
                    <p>Php 100,000</p>
                </div>

                <div className="note-container">
                    <p className="note">Calculation: Estimates may change after the onsite assessment based on your preferences.</p>

                    <div className="info-icon-container">
                        <FontAwesomeIcon icon={faInfoCircle} className="info-icon" />
                        <span className="tooltip">
                            The final estimate may vary based on your preferences and site conditions.
                            All details can be reviewed, adjusted, and customized during your onsite assessment and consultation.
                        </span>
                    </div>
                </div>

                <div className='generatedplan-button'>
                    <button>Adjust Calculations</button>
                    <button>Save Solar Plan</button>
                    <button className="done-button" onClick={handleSubmit}>Done</button>
                </div>
            </div>

            <div className='rightsection'>
                <div>
                    <img src={solarpanel} alt="Solar Panels" className='solarpanelpic' />
                    <p className='panelcount'>8 Solar Panels</p>
                    <p className='wattage'>528 watts</p>
                </div>

                <div className='meet'>
                    <p>Meet with our team.</p>
                    <p>Interested with your solar plan? <a href="YOUR_APP_LINK" target="_blank" rel="noopener noreferrer">Download our app</a> and book a meeting!</p>
                </div>
            </div>

            {/* First Modal (After Clicking Done) */}
            {showModal && (
                <div className="plannermodal">
                    <div className="plannermodalbox">
                        <div className="plannermodalcontent">
                            <p className="plannercompanyname">3MR Construction & Engineering Services</p>
                            <h2 className='modalquestion'>Satisfied with your Solar Plan?</h2>
                            <p className='plannerdesc'>Book a consultation today to get started and make your home more energy-efficient!</p>

                            <div className="toggle-button" data-selected={selected}>
                                <button
                                    className={selected === "Yes" ? "active" : ""}
                                    onClick={handleYesClick}
                                >
                                    Yes
                                </button>
                                <button
                                    className={selected === "No" ? "active" : ""}
                                    onClick={handleNoClick}
                                >
                                    No
                                </button>
                            </div>
                            <p className='plannernote'>If you have concerns or questions, we’re here to help you find the best solution!</p>

                            <button className="modalcontinue" onClick={handleContinue}>Continue</button>
                        </div>
                    </div>
                </div>
            )}

            {/* Second Modal (After Clicking "No" in First Modal) */}
            {showNoModal && (
                <div className="plannermodal">
                    <div className="plannermodalbox">
                        <div className="plannermodalcontent">
                            <p className="plannercompanyname">3MR Construction & Engineering Services</p>
                            <h2 className='modalquestion'>Please let us know!</h2>
                            <p className='plannerdesc'>Kindly select a reason so we can improve our solar plans and better meet your needs.</p>

                            <div className="toggle-button-three" data-selected={selected}>
                                <button
                                    className={selected === "Uncertain Plans" ? "active" : ""}
                                    onClick={() => setSelected("Uncertain Plans")}
                                >
                                    Uncertain Plans
                                </button>
                                <button
                                    className={selected === "High Upfront Cost" ? "active" : ""}
                                    onClick={() => setSelected("High Upfront Cost")}
                                >
                                    High Upfront Cost
                                </button>
                                <button
                                    className={selected === "Unexpected Cost" ? "active" : ""}
                                    onClick={() => setSelected("Unexpected Cost")}
                                >
                                    Unexpected Cost
                                </button>
                            </div>
                            <p className='plannernote'>Select a reason to help us understand your concerns.</p>

                            <button className="modalcontinue" onClick={handleContinue}>Continue</button>
                        </div>
                    </div>
                </div>
            )}

            {/* Third Modal (After Clicking "Yes" in First Modal) */}
            {showYesModal && (
                <div className="plannermodal">
                    <div className="plannermodalbox">
                        <div className="plannermodalcontent">
                            <p className="plannercompanyname">3MR Construction & Engineering Services</p>
                            <h2 className='modalquestion'>Download our App?</h2>
                            <p className='plannerdesc'>Download our app to book a consultation and start your journey!</p>

                            <div className="toggle-button" data-selected={selected}>
                                <button
                                    className={selected === "Yes" ? "active" : ""}
                                    onClick={handleYesDownloadClick} 
                                >
                                    Yes
                                </button>
                                <button
                                    className={selected === "Not Now" ? "active" : ""}
                                    onClick={handleNoDownloadClick} 
                                >
                                    Not Now
                                </button>
                            </div>
                            <p className='plannernote'>Let us know how we can assist you in making the right solar choice for your home!</p>

                            <button className="modalcontinue" onClick={handleNotNowClick}>Continue</button>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};

export default GeneratedPlan;
