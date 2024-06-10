// src/frontend/src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import IntroSection from './components/IntroSection';
import FeatureSection from './components/FeatureSection';
import AboutSection from './components/AboutSection';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<>
            <IntroSection />
            <FeatureSection />
            <AboutSection />
          </>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
