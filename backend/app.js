// Modules
const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
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
app.use('/t', require('./routes/RedirectRouter'));

app.use('/', express.static(path.join(__dirname, '../frontend/build')));

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../frontend/build/index.html'));
});

const start = async () => {
    try {
        console.log(__dirname);
        await mongoose.connect(MONGO_URI);
        app.listen(PORT, () => console.log(`App has been started on ${PORT}...`));
    } catch (err) {
        console.log('Server Error', err.message);
        process.exit(1);
    }
}

start();

