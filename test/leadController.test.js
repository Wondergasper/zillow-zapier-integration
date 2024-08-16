// tests/leadController.test.js
const request = require('supertest');
const express = require('express');
const bodyParser = require('body-parser');
const leadRoutes = require('../src/routes/leads');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/leads', leadRoutes);

describe('Lead API', () => {
    it('should return 200 for valid lead data', async () => {
        const res = await request(app)
            .post('/leads')
            .send('listingId=p01023&name=John%20Doe&email=john%40gmail.com&phone=555-555-5555');

        expect(res.statusCode).toEqual(200);
        expect(res.text).toContain('Lead data received and processed successfully.');
    });

    it('should return 400 for invalid lead data', async () => {
        const res = await request(app)
            .post('/leads')
            .send('listingId=');

        expect(res.statusCode).toEqual(400);
        expect(res.text).toContain('Invalid lead data.');
    });

    it('should return 404 for unmatched lead data', async () => {
        const res = await request(app)
            .post('/leads')
            .send('listingId=unknownId&name=John%20Doe&email=john%40gmail.com&phone=555-555-5555');

        expect(res.statusCode).toEqual(404);
        expect(res.text).toContain('No matching CRM record found for lead.');
    });
});
