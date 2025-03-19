import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './HomePage';
import LearnPage from './LearnPage';
import NavBar from './NavBar';
import Footer from './Footer';

const ServicesPage = () => <h1>Services Page</h1>;
const ContactPage = () => <h1>Contact Page</h1>;

const WebsiteController = () => {
  return (
    <Router>
      <NavBar /> {/* Show Navbar on all pages */}
      <Routes>
        <Route path="/home" element={<HomePage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/learn" element={<LearnPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      <Footer /> 
    </Router>
  );
};

export default WebsiteController;
