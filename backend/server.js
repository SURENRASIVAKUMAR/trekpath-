const express = require('express');
const cors = require('cors');
require('dotenv').config();
const db = require('./db');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// --- Testimonials API ---

// Get all testimonials
app.get('/api/testimonials', async (req, res) => {
    try {
        const result = await db.query('SELECT * FROM testimonials ORDER BY created_at DESC');
        res.json(result.rows);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

// Add a new testimonial
app.post('/api/testimonials', async (req, res) => {
    try {
        const { name, rating, review } = req.body;
        
        // Basic validation
        if (!name || !rating || !review) {
            return res.status(400).json({ error: 'Please provide name, rating, and review' });
        }

        const newTestimonial = await db.query(
            'INSERT INTO testimonials (name, rating, review) VALUES ($1, $2, $3) RETURNING *',
            [name, rating, review]
        );

        res.json(newTestimonial.rows[0]);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

// --- Contact API ---

// Add a new contact message
app.post('/api/contact', async (req, res) => {
    try {
        const { name, email, phone, subject, destination, message } = req.body;
        
        // Basic validation
        if (!name || !email || !message) {
            return res.status(400).json({ error: 'Please provide name, email, and message' });
        }

        const newContact = await db.query(
            'INSERT INTO contacts (name, email, phone, subject, destination, message) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *',
            [name, email, phone, subject, destination, message]
        );

        res.json(newContact.rows[0]);
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ error: 'Server Error' });
    }
});

// --- Planner API ---

// Submit a new trip plan
app.post('/api/planner', async (req, res) => {
    try {
        const {
            fullname, email, phone, travelers, travelType, language,
            destination, interests, startdate, enddate, budget, accommodation, notes
        } = req.body;
        
        // Basic validation
        if (!fullname || !email || !destination) {
            return res.status(400).json({ error: 'Please provide fullname, email, and destination' });
        }

        const newPlanner = await db.query(
            `INSERT INTO planners (
                fullname, email, phone, travelers, travel_type, language, 
                destination, interests, start_date, end_date, budget, accommodation, notes
            ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13) RETURNING *`,
            [
                fullname, email, phone, travelers, travelType, language,
                destination, interests, startdate || null, enddate || null, budget, accommodation, notes
            ]
        );

        // We can generate a dummy itinerary based on the destination to satisfy the frontend's expectations
        const dummyItinerary = [
            { day: 1, title: 'Arrival & Welcome', description: `Arrive at ${destination} and check into your ${accommodation || 'hotel'}. Evening free for leisure.` },
            { day: 2, title: 'Local Highlights', description: `A guided tour exploring the iconic landmarks of ${destination}.` },
            { day: 3, title: 'Departure', description: 'Transfer to the airport for your onward journey. Safe travels!' }
        ];

        res.json({
            success: true,
            plan: newPlanner.rows[0],
            itinerary: dummyItinerary
        });
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ error: 'Server Error' });
    }
});

// --- Destinations API ---
app.get('/api/destinations', (req, res) => {
    const destinations = [
        { name: 'Maldives', image_url: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=400&q=80', description: 'Crystal clear waters and white sand beaches.' },
        { name: 'Swiss Alps', image_url: 'https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?w=400&q=80', description: 'Experience the majestic mountains and snowy peaks.' },
        { name: 'Kyoto', image_url: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=400&q=80', description: 'Discover ancient temples and beautiful gardens.' },
        { name: 'Santorini', image_url: 'https://images.unsplash.com/photo-1613395877344-13d4a3242bc6?w=400&q=80', description: 'Stunning sunsets and iconic blue dome churches.' }
    ];
    res.json(destinations);
});

// --- Admin API ---

// Middleware for Admin Auth
const authenticateAdmin = (req, res, next) => {
    const authHeader = req.headers.authorization;
    if (!authHeader || authHeader !== `Bearer ${process.env.ADMIN_PASSWORD}`) {
        return res.status(401).json({ error: 'Unauthorized' });
    }
    next();
};

// Verify Admin Password
app.post('/api/admin/verify', (req, res) => {
    const { password } = req.body;
    if (password === process.env.ADMIN_PASSWORD) {
        res.json({ success: true, token: process.env.ADMIN_PASSWORD });
    } else {
        res.status(401).json({ error: 'Invalid password' });
    }
});

// Get all planners
app.get('/api/admin/planners', authenticateAdmin, async (req, res) => {
    try {
        const result = await db.query('SELECT * FROM planners ORDER BY created_at DESC');
        res.json(result.rows);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

// Get all contacts
app.get('/api/admin/contacts', authenticateAdmin, async (req, res) => {
    try {
        const result = await db.query('SELECT * FROM contacts ORDER BY created_at DESC');
        res.json(result.rows);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

// Start Server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
