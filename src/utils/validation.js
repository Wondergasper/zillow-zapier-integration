// src/utils/validation.js
exports.isValidLeadData = (data) => {
    // Check if necessary fields are present and valid
    return data.listingId && data.name && data.email && data.phone;
};
