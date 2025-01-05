const express = require('express');
const bodyParser = require('body-parser');
const itemRoutes = require('./routes/itemRoutes');
const connectDB = require('./config/db');

const app = express();

// Middleware
app.use(bodyParser.json()); // To parse JSON bodies

// Connect to the database
connectDB();

// Routes
app.use('/api/items', itemRoutes);

module.exports = app;
