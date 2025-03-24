import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faStarHalfAlt, faStar as faStarOutline } from '@fortawesome/free-solid-svg-icons';
import './admincompo_css/dashboardstyle.css';
import profilePic from '../imgs/article1.png';
import { useNavigate } from "react-router-dom";

import { Doughnut } from "react-chartjs-2";
import { Chart, ArcElement } from "chart.js";

Chart.register(ArcElement);

const Dashboard = () => {
  const navigate = useNavigate();

  const [currentTime, setCurrentTime] = useState(new Date());

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
            <button className="view-all-btn">View All</button>
          </div>
          <div className="schedule-grid">
            <div className="schedule-card">
              <p className="date">18</p>
              <p className="day">Monday</p>
            </div>
            <div className="schedule-card active">
              <p className="date">19</p>
              <p className="highlight">On-site <br /> Assessment</p>
              <p className="day">Tuesday</p>
            </div>
            <div className="schedule-card">
              <p className="date">20</p>
              <p className="day">Wednesday</p>
            </div>
            <div className="schedule-card">
              <p className="date">21</p>
              <p className="day">Thursday</p>
            </div>
            <div className="schedule-card">
              <p className="date">22</p>
              <p className="day">Friday</p>
            </div>
            <div className="schedule-card active">
              <p className="date">23</p>
              <p className="highlight">Consultation</p>
              <p className="day">Saturday</p>
            </div>
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
                      data: [24, 100 - 24], // 24% filled
                      backgroundColor: ["#373025", "#E5E5E5"],
                      cutout: "60%",
                    },
                  ],
                }}
                options={{ plugins: { legend: { display: false } } }}
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
                      data: [60, 100 - 60], // 10% filled
                      backgroundColor: ["#39a851", "#E5E5E5"],
                      cutout: "60%",
                    },
                  ],
                }}
                options={{ plugins: { legend: { display: false } } }}
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
                      data: [14, 100 - 14], // 14% filled
                      backgroundColor: ["#d9534f", "#E5E5E5"],
                      cutout: "60%",
                    },
                  ],
                }}
                options={{ plugins: { legend: { display: false } } }}
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
    </div>
  );
};

export default Dashboard;
