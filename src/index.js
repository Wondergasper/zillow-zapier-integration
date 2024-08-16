// src/index.js
const express = require('express');
const bodyParser = require('body-parser');
const leadRoutes = require('./routes/leads');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse the body of the request
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
app.use('/leads', leadRoutes);

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
