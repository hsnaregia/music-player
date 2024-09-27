// server.js
const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Load Routes
const songsRouter = require('./routes/songs');
const albumsRouter = require('./routes/albums');

// Middleware to parse JSON
app.use(express.json());

// Serve static files from the public directory
app.use('/public', express.static(path.join(__dirname, 'public')));

// Use the routes
app.use('/api/songs', songsRouter);
app.use('/api/albums', albumsRouter);

// Default route to serve the music player page
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Start the server
app.listen(port, () => {
    console.log(`Music API is running at http://localhost:${port}`);
});
