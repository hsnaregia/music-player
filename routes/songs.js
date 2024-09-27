// routes/songs.js
const express = require('express');
const router = express.Router();
const musicData = require('../data/musicData.json');

// GET all songs
router.get('/', (req, res) => {
    res.json(musicData.songs);
});

// GET a specific song by ID
router.get('/:id', (req, res) => {
    const song = musicData.songs.find(s => s.id === parseInt(req.params.id));
    if (song) {
        res.json(song);
    } else {
        res.status(404).send('Song not found');
    }
});

module.exports = router;
