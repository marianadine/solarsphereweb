import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import HomePage from './HomePage';
import LearnPage from './LearnPage';
import NavBar from './NavBar';
import Footer from './Footer';
import ServicesPage from './ServicesPage';
import ContactPage from './ContactPage';

const WebsiteController = () => {
  return (
    <Router>
      <NavBar />
      <MainRoutes />
    </Router>
  );
};

const MainRoutes = () => {
  const location = useLocation();
  
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/learn" element={<LearnPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      {location.pathname !== "/contact" && <Footer />}
    </>
  );
};

export default WebsiteController;
