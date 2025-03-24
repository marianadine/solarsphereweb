import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import './components_css/signupstyle.css';

const SignupPopUp = ({ isOpen, onClose, onLoginOpen }) => {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    if (!isOpen) return null;

    const togglePasswordVisibility = () => {
        setShowPassword((prev) => !prev);
    };

    const toggleConfirmPasswordVisibility = () => {
        setShowConfirmPassword((prev) => !prev);
    };

    return (
        <div className="signup-popup-overlay" onClick={onClose}>
            <div className="signup-popup-container" onClick={(e) => e.stopPropagation()}>
                <button className="signup-close-button" onClick={onClose}>&times;</button>
                <p className='signup-company-name'>3MR Construction & Engineering Services</p>
                <h2 className='signup-title'>Create an Account</h2>
                <p className='signup-desc'>Sign up to start your solar journey with us today!</p>
                <form className="signup-form">
                    <input type="text" placeholder="Full Name" required />
                    <input type="email" placeholder="Email Address" required />

                    <div className="signup-password-container">
                        <input
                            type={showPassword ? "text" : "password"}
                            placeholder="Password"
                            required
                        />
                        <FontAwesomeIcon
                            icon={showPassword ? faEyeSlash : faEye}
                            className="signup-toggle-password"
                            onClick={togglePasswordVisibility}
                        />
                    </div>

                    <div className="signup-password-container">
                        <input
                            type={showConfirmPassword ? "text" : "password"}
                            placeholder="Confirm Password"
                            required
                        />
                        <FontAwesomeIcon
                            icon={showConfirmPassword ? faEyeSlash : faEye}
                            className="signup-toggle-password"
                            onClick={toggleConfirmPasswordVisibility}
                        />
                    </div>

                    <button type="submit" className="signup-submit">Sign Up</button>
                </form>
                <p className="login-text">
                    Already have an account?<span className="login-link" onClick={() => { onClose(); onLoginOpen(); }}> Log in</span>
                </p>
            </div>
        </div>
    );
};

export default SignupPopUp;
