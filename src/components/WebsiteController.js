import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import HomePage from './HomePage';
import LearnPage from './LearnPage';
import NavBar from './NavBar';
import Footer from './Footer';
import ServicesPage from './ServicesPage';
import ContactPage from './ContactPage';
import ScrollToTop from './ScrollToTop';
import ScrollToTopButton from './ScrollToTopButton';  // ✅ Import the button
import HeatmapCalculator from './HeatmapCalculator';
import SmartSolarPlanner from './SmartSolarPlanner';

const WebsiteController = () => {
  return (
    <Router>
      <ScrollToTop />  {/* ✅ Ensures page always starts at top on route change */}
      <NavBar />
      <MainRoutes />
      <ScrollToTopButton />  {/* ✅ Ensures scroll-to-top button appears */}
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
        <Route path="/heatmap" element={<HeatmapCalculator />} />
        <Route path="/planner" element={<SmartSolarPlanner />} />
      </Routes>
      {location.pathname !== "/contact" && <Footer />}
    </>
  );
};

export default WebsiteController;
