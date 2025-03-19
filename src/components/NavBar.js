import React from 'react';
import { Link } from 'react-router-dom';  // Import Link from react-router-dom
import './components_css/NavBar.css';
import logohome from '../imgs/3MRlogohorizontal.png';

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={logohome} alt="Logo" />
      </div>
      <ul className="navbar-links">
        <li>
          <Link to="/home">Home</Link>
        </li>
        <li>
          <Link to="/services">Services</Link>
        </li>
        <li>
          <Link to="/learn">Learn</Link>
        </li>        
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
      <div className="navbar-menu">
        <i className="fas fa-bars"></i>
      </div>
    </nav>
  );
};

export default NavBar;
