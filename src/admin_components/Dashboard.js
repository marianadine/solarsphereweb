import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faStarHalfAlt, faStar as faStarOutline } from '@fortawesome/free-solid-svg-icons';
import './admincompo_css/dashboardstyle.css';
import profilePic from '../imgs/article1.png';
import logo from '../imgs/3MRlogovertical.png';
import { useNavigate } from "react-router-dom";

import { Doughnut } from "react-chartjs-2";
import { Chart, ArcElement } from "chart.js";

import ChartDataLabels from 'chartjs-plugin-datalabels';
Chart.register(ChartDataLabels);

Chart.register(ArcElement);

const Dashboard = () => {
  const navigate = useNavigate();

  const [currentTime, setCurrentTime] = useState(new Date());
  const [selectedSchedule, setSelectedSchedule] = useState(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const formattedTime = currentTime.toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: true,
  });

  const formattedDate = currentTime.toLocaleDateString('en-GB', {
    weekday: 'long',
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  });

  const schedules = [
    { date: "18", day: "Monday", details: "No events scheduled." },
    { date: "19", day: "Tuesday", highlight: "On-site Assessment", fullName: "John Doe", email: "johndoe@example.com", contactNumber: "+1234567890", purpose: "On-site Assessment", dateTime: "19 March 2025", details: "Location: 123 Solar Street" },
    { date: "20", day: "Wednesday", details: "No events scheduled." },
    { date: "21", day: "Thursday", details: "No events scheduled." },
    { date: "22", day: "Friday", details: "No events scheduled." },
    { date: "23", day: "Saturday", highlight: "Consultation", fullName: "Jane Smith", email: "janesmith@example.com", contactNumber: "+0987654321", purpose: "Consultation", dateTime: "23 March 2025, 2:00 PM - 3:30 PM", details: "Location: 456 Renewable Rd" }
  ];

  return (
    <div>
      <section className='dashboard-header'>
        <div className='title-container'>
          <h1>Your path to ideal home <br /> and affordable living.</h1>
          <p>Providing high-quality, sustainable construction <br /> and engineering solutions for all.</p>
        </div>
        <div className='rating-container'>
          <h4>Current Rating</h4>
          <div className='stars'>
            <FontAwesomeIcon icon={faStar} className="star-icon" />
            <FontAwesomeIcon icon={faStar} className="star-icon" />
            <FontAwesomeIcon icon={faStar} className="star-icon" />
            <FontAwesomeIcon icon={faStar} className="star-icon" />
            <FontAwesomeIcon icon={faStarOutline} className="star-icon" />
          </div>
          <p className='rating-score'>4.50 / 5.00</p>
          <p className='rating-desc'>Our website is performing exceptionally well, earning an impressive 4.5-star rating!</p>
        </div>
      </section>

      <section className="dashboard-content">
        {/* Upcoming Schedules */}
        <div className="upcoming-schedules">
          <div className="section-header">
            <h4>Upcoming Schedules</h4>
            <button className="view-all-btn" onClick={() => navigate('/booking')}>View All</button>
          </div>
          <div className="schedule-grid">
            {schedules.map((schedule, index) => (
              <div
                key={index}
                className={`schedule-card ${schedule.highlight ? "active" : ""}`}
                onClick={() => schedule.highlight && setSelectedSchedule(schedule)}
              >
                <p className="date">{schedule.date}</p>
                {schedule.highlight && <p className="highlight">{schedule.highlight}</p>}
                <p className="day">{schedule.day}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Reviews */}
        <div className="recent-reviews">
          <div className="section-header">
            <h4>Recent Review</h4>
            <button className="view-all-btn" onClick={() => navigate('/review')}>View All</button>
          </div>

          <div className="review-card">
            <div className="review-header">
              <img src={profilePic} alt="Profile" className="profile-pic" />
              <p className="review-name">Nadine Rufo</p>
            </div>
            <p className="review-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim veniam, quis nostrud exercitation. <br /><br />
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim veniam, quis nostrud exercitation. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.<br /><br />
              Lorem ipsum dolor susmod tempor incididunt ut labore et  magna aliqua.
            </p>
            <p className="review-date">12 September 2025</p>
          </div>
        </div>

        {/* Survey Results */}
        <div className="survey-results">
          <div className="clock">
            <p className="time">{formattedTime}</p>
            <p className="realdate">{formattedDate}</p>
          </div>

          {/* Survey Stats with Circular Graphs */}
          <div className="survey-stats">
            {/* Potential Client Count */}
            <div className="stat">
              <Doughnut
                data={{
                  labels: ["Potential Clients"],
                  datasets: [
                    {
                      data: [45, 100 - 45], // 45% filled
                      backgroundColor: ["#373025", "#E5E5E5"],
                      cutout: "0%", 
                    },
                  ],
                }}
                options={{
                  plugins: {
                    legend: { display: false },
                    tooltip: { enabled: false }, 
                    datalabels: {
                      display: true,
                      color: "#FFF",
                      font: { weight: "bold", size: 28 },
                      textAlign: "center",
                      shadowBlur: 10,
                      shadowColor: "rgba(0, 0, 0, 0.7)", 
                      formatter: (value, context) => {
                        if (context.dataIndex === 0) {
                          return `${value}%`;
                        }
                        return "";
                      },
                      anchor: "center",
                      align: "center",
                      offset: 0,
                    },
                  },
                  responsive: true,
                  maintainAspectRatio: false,
                }}
              />

              <p className="stat-label">Potential <br /> Client Count</p>
            </div>

            {/* Availed Solar Panels */}
            <div className="stat">
              <Doughnut
                data={{
                  labels: ["Availed"],
                  datasets: [
                    {
                      data: [60, 100 - 60],
                      backgroundColor: ["#39a851", "#E5E5E5"],
                      cutout: "0%",
                    },
                  ],
                }}
                options={{
                  plugins: {
                    legend: { display: false },
                    tooltip: { enabled: false },
                    datalabels: {
                      display: true,
                      color: "#FFF",
                      font: { weight: "bold", size: 28 },
                      textAlign: "center",
                      shadowBlur: 10,
                      shadowColor: "rgba(0, 0, 0, 0.7)",
                      formatter: (value, context) => (context.dataIndex === 0 ? `${value}%` : ""),
                      anchor: "center",
                      align: "center",
                      offset: 0,
                    },
                  },
                  responsive: true,
                  maintainAspectRatio: false,
                }}
              />
              <p className="stat-label">Availed <br /> Solar Panels</p>
            </div>

            {/* Not Yet Interested */}
            <div className="stat">
              <Doughnut
                data={{
                  labels: ["Not Interested"],
                  datasets: [
                    {
                      data: [14, 100 - 14],
                      backgroundColor: ["#d9534f", "#E5E5E5"],
                      cutout: "0%",
                    },
                  ],
                }}
                options={{
                  plugins: {
                    legend: { display: false },
                    tooltip: { enabled: false },
                    datalabels: {
                      display: true,
                      color: "#FFF",
                      font: { weight: "bold", size: 28 },
                      textAlign: "center",
                      shadowBlur: 10,
                      shadowColor: "rgba(0, 0, 0, 0.7)",
                      formatter: (value, context) => (context.dataIndex === 0 ? `${value}%` : ""),
                      anchor: "center",
                      align: "center",
                      offset: 0,
                    },
                  },
                  responsive: true,
                  maintainAspectRatio: false,
                }}
              />
              <p className="stat-label">Not Yet <br /> Interested</p>
            </div>
          </div>


          {/* Most Voted Response */}
          <div className="most-voted">
            <p className="voted-title">Most Voted Response</p>
            <p className="highlight-text">High Upfront Cost</p>
            <p className="voted-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
          </div>
        </div>
      </section>

      {/* Modal for Active Schedule Details */}
      {selectedSchedule && (
        <div className="modal-overlay">
          <div className="modal">
            <img src={logo} alt="Logo" className="logovertical" />

            <p>Purpose</p>
            <p className="purpose">{selectedSchedule.purpose}</p>

            <p>Date & Time</p>
            <p className="date-time">{selectedSchedule.dateTime}</p>

            <p>Email</p>
            <p className="email">{selectedSchedule.email}</p>

            <p>Contact Number</p>
            <p className="contact">{selectedSchedule.contactNumber}</p>

            <hr />

            <p>Full Name</p>
            <p className="full-name">{selectedSchedule.fullName}</p>
            <button className="close-btn" onClick={() => setSelectedSchedule(null)}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
