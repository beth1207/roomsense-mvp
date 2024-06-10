// src/frontend/src/components/AboutSection.js
import React from 'react';
import './AboutSection.css';

const AboutSection = () => {
  return (
    <section id="about" className="about">
      <h2>About RoomSense</h2>
      <p>
        RoomSense was inspired by the need for efficient space utilization in modern workspaces and educational institutions. With the increasing demand for optimized environments, RoomSense aims to provide real-time monitoring of room occupancy to help manage and utilize spaces effectively.
      </p>
      <p>
        This project is a part of the Holberton School Portfolio Project. It showcases the integration of modern web technologies and real-time data processing.
      </p>
      <div className="team">
        <h3>Our Team</h3>
        <ul>
          <li><a href="https://www.linkedin.com/in/teammember1">LinkedIn</a> | <a href="https://github.com/teammember1">GitHub</a> | <a href="https://twitter.com/teammember1">Twitter</a></li>
          <li><a href="https://www.linkedin.com/in/teammember2">LinkedIn</a> | <a href="https://github.com/teammember2">GitHub</a> | <a href="https://twitter.com/teammember2">Twitter</a></li>
        </ul>
      </div>
      <a href="https://github.com/your-repo/roomsense-mvp" className="github-link">GitHub Repository</a>
    </section>
  );
};

export default AboutSection;
