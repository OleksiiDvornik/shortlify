// Modules
const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv').config();
const corsMiddleware = require('./middlewares/CorsMiddleware');

// Constants
const app = express();
const PORT = process.env.PORT;
const MONGO_URI = process.env.MONGO_URI;

// Middlewares
app.use(corsMiddleware);
app.use(express.json());

// Routes
app.use('/api/auth', require('./routes/AuthRouter'));
app.use('/api/links', require('./routes/LinksRouter'));

const start = async () => {
    try {
        await mongoose.connect(MONGO_URI);
        app.listen(PORT, () => console.log(`App has been started on ${PORT}...`));
    } catch (err) {
        console.log('Server Error', err.message);
        process.exit(1);
    }
}

start();

