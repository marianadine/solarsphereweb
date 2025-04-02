import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import './components_css/loginstyle.css';

const LoginPopUp = ({ isOpen, onClose, onSignupOpen, onLoginSuccess }) => {
    const [showPassword, setShowPassword] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const navigate = useNavigate();

    if (!isOpen) return null;

    const handleLogin = (e) => {
        e.preventDefault();

        // temporary admin credentials
        const adminEmail = "1@1";
        const adminPassword = "1";

        // temporary user credentials
        const userEmail = "1@2";
        const userPassword = "1";

        if (email === adminEmail && password === adminPassword) {
            onLoginSuccess("Admin");
            navigate('/');
            onClose();
        } else if (email === userEmail && password === userPassword) {
            onLoginSuccess("User");
            navigate('/');
            onClose();
        } else {
            setErrorMessage("Invalid email or password!");
        }
    };

    return (
        <div className="popup-overlay" onClick={onClose}>
            <div className="popup-container" onClick={(e) => e.stopPropagation()}>
                <button className="close-button" onClick={onClose}>&times;</button>
                <p className='logincompany-name'>3MR Construction & Engineering Services</p>
                <h2 className='logintitle'>Login to Your Account</h2>
                <p className='logindesc'>Log in to manage your account and optimize your solar experience today!</p>

                <form className="login-form" onSubmit={handleLogin}>
                    <input 
                        type="email" 
                        placeholder="Email Address" 
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)} 
                        required 
                    />
                    
                    <div className="password-container">
                        <input 
                            type={showPassword ? "text" : "password"} 
                            placeholder="Password" 
                            value={password} 
                            onChange={(e) => setPassword(e.target.value)} 
                            required 
                        />
                        <FontAwesomeIcon 
                            icon={showPassword ? faEyeSlash : faEye} 
                            className="toggle-password" 
                            onClick={() => setShowPassword(!showPassword)} 
                        />
                    </div>

                    {errorMessage && <p className="error-message">{errorMessage}</p>}

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

