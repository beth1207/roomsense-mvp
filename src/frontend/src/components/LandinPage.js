// src/frontend/src/components/LandingPage.js
import React from 'react';
import { Link } from 'react-router-dom';
import FeatureSection from './FeatureSection';
import AboutSection from './AboutSection';
import './LandingPage.css';

const LandingPage = () => {
  return (
    <div className="landing-page">
      <header className="landing-header">
        <img src="/cover-image.jpg" alt="Cover" className="cover-image" />
        <h1>RoomSense</h1>
        <p>Real-time room occupancy monitoring for optimized space utilization</p>
        <nav>
          <ul className="nav-links">
            <li><a href="#features">Features</a></li>
            <li><a href="#about">About</a></li>
          </ul>
        </nav>
        <Link to="/dashboard" className="cta-button">Go to Dashboard</Link>
      </header>
      <FeatureSection />
      <AboutSection />
    </div>
  );
};

export default LandingPage;
