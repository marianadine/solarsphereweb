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
import Article1 from './Article1';
import Article2 from './Article2';
import Article3 from './Article3';

import AdminNavBar from '../admin_components/AdminNavBar';
import Dashboard from '../admin_components/Dashboard';
import Accounts from '../admin_components/Accounts';
import Reviews from '../admin_components/Reviews';
import Booking from '../admin_components/Booking';
import SolarPlans from '../admin_components/SolarPlans';
import Materials from '../admin_components/Materials';

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
  const adminRoutes = ["/dashboard", "/accounts", "/review", "/booking", "/solarplans", "/materials"];
  const noFooterRoutes = ["/contact", ...adminRoutes];
  const isAdminPage = adminRoutes.includes(location.pathname);
  const hideFooter = noFooterRoutes.includes(location.pathname);

  return (
    <>
      {isAdminPage ? <AdminNavBar /> : <NavBar />}
      <Routes>
        {/* Website Routes */}
        <Route path="/" element={<HomePage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/about" element={<LearnPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/heatmap" element={<HeatmapCalculator />} />
        <Route path="/planner" element={<SmartSolarPlanner />} />
        <Route path="/summary" element={<GeneratedPlan />} />
        <Route path="/article1" element={<Article1 />} />
        <Route path="/article2" element={<Article2 />} />
        <Route path="/article3" element={<Article3 />} />

        {/* Admin Routes */}
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/accounts" element={<Accounts />} />
        <Route path="/review" element={<Reviews />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/solarplans" element={<SolarPlans />} />
        <Route path="/materials" element={<Materials />} />
      </Routes>
      {!hideFooter && <Footer />}
    </>
  );
};


export default WebsiteController;
