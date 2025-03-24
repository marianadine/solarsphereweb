import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';

import HomePage from './HomePage';
import LearnPage from './LearnPage';
import NavBar from './NavBar';
import Footer from './Footer';
import ServicesPage from './ServicesPage';
import ContactPage from './ContactPage';
import ScrollToTop from './ScrollToTop';
import ScrollToTopButton from './ScrollToTopButton';
import HeatmapCalculator from './HeatmapCalculator';
import SmartSolarPlanner from './SmartSolarPlanner';
import GeneratedPlan from './GeneratedPlan';

import Dashboard from '../admin_components/Dashboard';
import Accounts from '../admin_components/Accounts';
import AdminNavBar from '../admin_components/AdminNavBar'; // Import AdminNavBar

const WebsiteController = () => {
  return (
    <Router>
      <ScrollToTop />
      <MainLayout />
      <ScrollToTopButton />
    </Router>
  );
};

const MainLayout = () => {
  const location = useLocation();
  const adminRoutes = ["/dashboard", "/accounts"];
  const isAdminPage = adminRoutes.includes(location.pathname);

  return (
    <>
      {isAdminPage ? <AdminNavBar /> : <NavBar />}
      <Routes>
        {/* Website Routes */}
        <Route path="/" element={<HomePage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/learn" element={<LearnPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/heatmap" element={<HeatmapCalculator />} />
        <Route path="/planner" element={<SmartSolarPlanner />} />
        <Route path="/summary" element={<GeneratedPlan />} />

        {/* Admin Routes */}
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/accounts" element={<Accounts />} />
      </Routes>
      {!isAdminPage && <Footer />}
    </>
  );
};

export default WebsiteController;
