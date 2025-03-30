import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './components_css/NavBar.css';
import logohome from '../imgs/3MRlogohorizontal.png';
import LoginPopUp from './LoginPopUp';
import SignupPopUp from './SignupPopUp';

const NavBar = () => {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isSignupOpen, setIsSignupOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={logohome} alt="Logo" />
      </div>
      <div className="navbar-right">
        <ul className="navbar-links">
          <li>
            <Link to="/" className={location.pathname === "/" ? "active" : ""}>Home</Link>
          </li>
          <li>
            <Link to="/services" className={location.pathname === "/services" ? "active" : ""}>Services</Link>
          </li>
          <li>
            <Link to="/learn" className={location.pathname === "/learn" ? "active" : ""}>Learn</Link>
          </li>
          <li>
            <Link to="/contact" className={location.pathname === "/contact" ? "active" : ""}>Contact</Link>
          </li>
        </ul>
        <div className="navbar-auth">
          <button className="auth-button login" onClick={() => setIsLoginOpen(true)}>Login</button>
          <button className="auth-button signup" onClick={() => setIsSignupOpen(true)}>Sign Up</button>
        </div>
      </div>
      <div className="navbar-menu">
        <i className="fas fa-bars"></i>
      </div>

      <LoginPopUp isOpen={isLoginOpen} onClose={() => setIsLoginOpen(false)} onSignupOpen={() => setIsSignupOpen(true)} />
      <SignupPopUp isOpen={isSignupOpen} onClose={() => setIsSignupOpen(false)} onLoginOpen={() => setIsLoginOpen(true)} />
    </nav>
  );
};

export default NavBar;
