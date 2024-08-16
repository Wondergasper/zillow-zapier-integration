// src/controllers/leadController.js
const leadService = require('../services/leadService');
const validation = require('../utils/validation');

exports.handleLead = (req, res) => {
    const leadData = req.body;
    
    // Validate incoming data
    if (!validation.isValidLeadData(leadData)) {
        return res.status(400).send('Invalid lead data.');
    }

    // Process the lead
    const result = leadService.processLead(leadData);

    if (result.success) {
        res.status(200).send('Lead data received and processed successfully.');
    } else {
        res.status(404).send('No matching CRM record found for lead.');
    }
};
