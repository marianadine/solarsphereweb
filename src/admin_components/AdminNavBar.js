import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import logohome from '../imgs/3MRlogohorizontal.png';
import profilePic from '../imgs/article1.png';
import './admincompo_css/adnavbarstyle.css';

const AdminNavBar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation(); // Get current route

  const handleLogout = () => {
    navigate('/');
  };

  return (
    <nav className="admin-navbar">
      <div className="admin-logo">
        <img src={logohome} alt="3MR Logo" />
      </div>
      <ul className="admin-links">
        <li><Link to="/dashboard" className={location.pathname === "/dashboard" ? "active" : ""}>Dashboard</Link></li>
        <li><Link to="/accounts" className={location.pathname === "/accounts" ? "active" : ""}>Accounts</Link></li>
        <li><Link to="/booking" className={location.pathname === "/booking" ? "active" : ""}>Booking</Link></li>
        <li><Link to="/solarplans" className={location.pathname === "/solarplans" ? "active" : ""}>Solar Plans</Link></li>
        <li><Link to="/materials" className={location.pathname === "/materials" ? "active" : ""}>Materials</Link></li>
      </ul>
      
      <div className="admin-profile" onClick={() => setDropdownOpen(!dropdownOpen)}>
        <img src={profilePic} alt="Profile" className="profile-pic" />
        <span className="admin-name">
          Bien Rufo 
          <FontAwesomeIcon icon={faChevronDown} className="dropdownicon" />
        </span>

        {dropdownOpen && (
          <div className="dropdown-menu">
            <button onClick={handleLogout} className="logout-button">
              <FontAwesomeIcon icon={faSignOutAlt} /> Logout
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default AdminNavBar;
