// src/routes/leads.js
const express = require('express');
const router = express.Router();
const leadController = require('../controllers/leadController');

router.post('/', leadController.handleLead);

module.exports = router;
