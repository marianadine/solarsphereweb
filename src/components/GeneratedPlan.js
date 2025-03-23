import React, { useState } from 'react';
import "./components_css/generatedplanstyle.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from "react-router-dom";

const GeneratedPlan = () => {
    const navigate = useNavigate();

    return (
        <section className='generatedplan'>
            <div className='generatedplan_container'>
                <p className="plannercompany-name">3MR Construction & Engineering Services</p>
                <h1 className='plannertitle'>Smart Solar Planner</h1>

                <p className="section-title">Your Solar Plan</p>
                <p className='warranty'>The installation includes a 5-year workmanship warranty. Solar panels come with a 30-year performance warranty and a 12-year product warranty. The inverter is covered by a 5-year warranty. Full details will be provided in the contract.</p>

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
                    <button className="done-button">Done</button>
                </div>
            </div>

            <div className='rightsection'>
                <div>
                    <p className='panelcount'>8 Solar Panels</p>
                    <p className='wattage'>528 watts</p>
                </div>

                <div className='meet'>
                    <p>Meet with our team.</p>
                    <p>Interested with your solar plan? <a href="YOUR_APP_LINK" target="_blank" rel="noopener noreferrer">Download our app</a> and book a meeting!</p>
                </div>
            </div>
        </section>
    )
}

export default GeneratedPlan
