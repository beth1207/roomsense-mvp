// src/backend/routes.js

const express = require('express');
const router = express.Router();

// Dummy data for demonstration purposes
const sensorData = [
    { name: 'Temperature', value: '22°C' },
    { name: 'Humidity', value: '60%' }
];

const alerts = [
    { message: 'Temperature too high!' },
    { message: 'Humidity too low!' }
];

router.get('/api/sensor-data', (req, res) => {
    res.json(sensorData);
});

router.get('/api/alerts', (req, res) => {
    res.json(alerts);
});

module.exports = router;
