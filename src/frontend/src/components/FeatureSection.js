// src/frontend/src/components/FeatureSection.js
import React from 'react';
import './FeatureSection.css';

const FeatureSection = () => {
  return (
    <section id="features" className="features">
      <h2>Features</h2>
      <div className="feature-list">
        <div className="feature-item">
          <img src="/feature1.jpg" alt="Feature 1" />
          <h3>Real-time Monitoring</h3>
          <p>Get real-time updates on room occupancy status.</p>
        </div>
        <div className="feature-item">
          <img src="/feature.jpeg" alt="Feature 2" />
          <h3>Easy Integration</h3>
          <p>Seamlessly integrates with your existing infrastructure.</p>
        </div>
        <div className="feature-item">
          <img src="/feature3.jpg" alt="Feature 3" />
          <h3>Cost Effective</h3>
          <p>Affordable solution for all types of environments.</p>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
