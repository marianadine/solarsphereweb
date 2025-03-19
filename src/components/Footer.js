import React from "react";
import "./components_css/footersectionstyle.css";
import logo from '../imgs/3MRlogoicon.png';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons"; 

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-left">
                    <img src={logo} alt="3MR Logo" className="footer-logo" />
                    <p className="footer-company">3MR Construction & Engineering Services</p>
                    <p className="footer-tagline">Your path to ideal home and affordable living.</p>
                </div>

                <div className="footer-section">
                    <h4>SUPPORT</h4>
                    <p>3mrce.serv@gmail.com</p>
                    <a href="tel:+639328870793" className="footer-link">
                        (+63) 9328870793
                    </a>
                </div>

                <div className="footer-section">
                    <h4>SOCIALS</h4>
                    <p>
                    <FontAwesomeIcon icon={faFacebook} className="footer-icon" /> : @3mrce
                    </p>
                </div>

                <div className="footer-section">
                    <h4>QUICK LINKS</h4>
                    <a href="/" className="footer-link">Home</a>
                    <a href="/solar-plan" className="footer-link">Solar Plan Generator</a>
                    <a href="/heatmap" className="footer-link">Heatmap Calculator</a>
                    <a href="/articles" className="footer-link">Articles</a>
                </div>
            </div>

            <div className="footer-bottom">
                <p>Capstone Project | Git Good 2025</p>
                <p>3MR Construction & Engineering Services</p>
            </div>
        </footer>
    );
};

export default Footer;
