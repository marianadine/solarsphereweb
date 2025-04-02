import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './components_css/NavBar.css';
import logohome from '../imgs/3MRlogohorizontal.png';
import LoginPopUp from './LoginPopUp';
import SignupPopUp from './SignupPopUp';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faChevronDown, faCog, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

const NavBar = () => {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isSignupOpen, setIsSignupOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState("User");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const location = useLocation();

  const handleLoginSuccess = (name) => {
    setIsLoggedIn(true);
    setUserName(name);
    setIsLoginOpen(false);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setDropdownOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={logohome} alt="Logo" />
      </div>
      <div className="navbar-right">
        <ul className="navbar-links">
          <li><Link to="/" className={location.pathname === "/" ? "active" : ""}>Home</Link></li>
          <li><Link to="/about" className={location.pathname === "/about" ? "active" : ""}>About</Link></li>
          <li><Link to="/services" className={location.pathname === "/services" ? "active" : ""}>Services</Link></li>
          <li><Link to="/contact" className={location.pathname === "/contact" ? "active" : ""}>Contact</Link></li>
        </ul>

        <div className="navbar-auth">
          {isLoggedIn ? (
            <div className={`profile-menu ${dropdownOpen ? 'active' : ''}`} onClick={() => setDropdownOpen(!dropdownOpen)}>
              <FontAwesomeIcon icon={faUser} className="profile-icon" />
              <span className="profile-name">{userName}</span>
              <FontAwesomeIcon icon={faChevronDown} className="dropdownicon" />

              {/* dropdown menu */}
              <div className="profile-dropdown">
                <Link to="/profile">
                  <FontAwesomeIcon icon={faCog} /> Profile Settings
                </Link>
                <button className="logout-btn" onClick={handleLogout}>
                  <FontAwesomeIcon icon={faSignOutAlt} /> Logout
                </button>
              </div>
            </div>
          ) : (
            <>
              <button className="auth-button login" onClick={() => setIsLoginOpen(true)}>Login</button>
              <button className="auth-button signup" onClick={() => setIsSignupOpen(true)}>Sign Up</button>
            </>
          )}
        </div>
      </div>

      <LoginPopUp isOpen={isLoginOpen} onClose={() => setIsLoginOpen(false)} onSignupOpen={() => setIsSignupOpen(true)} onLoginSuccess={handleLoginSuccess} />
      <SignupPopUp isOpen={isSignupOpen} onClose={() => setIsSignupOpen(false)} onLoginOpen={() => setIsLoginOpen(true)} />
    </nav>
  );
};

export default NavBar;
