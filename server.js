// server.js
const express = require('express');
const cors = require('cors'); // Import cors middleware
const path = require('path');

const app = express();

// Allow requests from http://localhost:3325
const allowedOrigins = ['http://localhost:3325', 'http://localhost:3323'];

// CORS middleware configuration
app.use(cors({
    origin: function (origin, callback) {
        // Check if the origin is allowed or not in the allowedOrigins array
        console.log(origin)
        if (!origin || allowedOrigins.includes(origin)) {
            callback(null, true);
        } else {
            callback(new Error('Origin not allowed by CORS'));
        }
    },
    methods: ['GET', 'POST'], // Allow these HTTP methods
    allowedHeaders: ['Content-Type'], // Allow these headers
}));

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Serve static files from the 'chat_bot' directory
app.use('/chat_bot', express.static(path.join(__dirname, 'chat_bot')));

// Start server
const PORT = 3325;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
