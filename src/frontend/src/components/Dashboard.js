import React, { useState, useEffect } from 'react';
import axios from 'axios'; // For making HTTP requests to the backend API
import './Dashboard.css';


const Dashboard = () => {
  // State variables to store sensor data and alerts
  const [roomConditions, setRoomConditions] = useState({});
  const [recentReadings, setRecentReadings] = useState([]);
  const [alerts, setAlerts] = useState([]);

  // Function to fetch sensor data and alerts from the backend API
  const fetchSensorData = async () => {
    try {
      // Fetch room conditions
      const roomConditionsResponse = await axios.get('/api/roomConditions');
      setRoomConditions(roomConditionsResponse.data);

      // Fetch recent sensor readings
      const recentReadingsResponse = await axios.get('/api/recentReadings');
      setRecentReadings(recentReadingsResponse.data);

      // Fetch alerts
      const alertsResponse = await axios.get('/api/alerts');
      setAlerts(alertsResponse.data);
    } catch (error) {
      console.error('Error fetching sensor data:', error);
    }
  };

  // Fetch sensor data and alerts when the component mounts
  useEffect(() => {
    fetchSensorData();
  }, []);

  return (
    <div className="dashboard">
      {/* Summary Section */}
      <div className="summary">
        <h2>Room Conditions Summary</h2>
        {/* Display room conditions */}
        <p>Temperature: {roomConditions.temperature} °C</p>
        <p>Humidity: {roomConditions.humidity} %</p>
        <p>Air Quality: {roomConditions.airQuality}</p>
        <p>Occupancy: {roomConditions.occupancy}</p>
      </div>

      {/* Recent Sensor Readings */}
      <div className="recent-readings">
        <h2>Recent Sensor Readings</h2>
        {/* Display recent sensor readings */}
        <ul>
          {recentReadings.map((reading, index) => (
            <li key={index}>
              {reading.timestamp}: {reading.value}
            </li>
          ))}
        </ul>
      </div>

      {/* Alerts Section */}
      <div className="alerts">
        <h2>Alerts</h2>
        {/* Display alerts */}
        <ul>
          {alerts.map((alert, index) => (
            <li key={index}>{alert.message}</li>
          ))}
        </ul>
      </div>

      {/* Insights and Recommendations */}
      <div className="insights">
        <h2>Insights and Recommendations</h2>
        {/* Placeholder for insights and recommendations */}
        <p>Coming soon...</p>
      </div>

      {/* User Settings */}
      <div className="settings">
        <h2>User Settings</h2>
        {/* Placeholder for user settings */}
        <p>Coming soon...</p>
      </div>
    </div>
  );
};

export default Dashboard;
