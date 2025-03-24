import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import './components_css/loginstyle.css';

const LoginPopUp = ({ isOpen, onClose, onSignupOpen }) => {
    const [showPassword, setShowPassword] = useState(false);

    if (!isOpen) return null;

    return (
        <div className="popup-overlay" onClick={onClose}>
            <div className="popup-container" onClick={(e) => e.stopPropagation()}>
                <button className="close-button" onClick={onClose}>&times;</button>
                <p className='logincompany-name'>3MR Construction & Engineering Services</p>
                <h2 className='logintitle'>Login to Your Account</h2>
                <p className='logindesc'>Log in to manage your account and optimize your solar experience today!</p>
                <form className="login-form">
                    <input type="email" placeholder="Email Address" required />
                    
                    <div className="password-container">
                        <input 
                            type={showPassword ? "text" : "password"} 
                            placeholder="Password" 
                            required 
                        />
                        <FontAwesomeIcon 
                            icon={showPassword ? faEyeSlash : faEye} 
                            className="toggle-password" 
                            onClick={() => setShowPassword(!showPassword)} 
                        />
                    </div>

                    <button type="submit" className="login-submit">Log In</button>
                </form>

                <p className="signup-text">
                    Don't have an account?  
                    <span className="signup-link" onClick={() => { onClose(); onSignupOpen(); }}> Sign up</span>
                </p>
            </div>
        </div>
    );
};

export default LoginPopUp;
