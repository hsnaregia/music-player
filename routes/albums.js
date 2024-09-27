// routes/albums.js
const express = require('express');
const router = express.Router();
const musicData = require('../data/musicData.json');

// GET all albums
router.get('/', (req, res) => {
    res.json(musicData.albums);
});

// GET a specific album by ID
router.get('/:id', (req, res) => {
    const album = musicData.albums.find(a => a.id === parseInt(req.params.id));
    if (album) {
        res.json(album);
    } else {
        res.status(404).send('Album not found');
    }
});

module.exports = router;
