const router = require('express').Router();
const { User, Post } = require('../../models');
// TODO: Import the custom middleware
//const auth = require('../utils/auth');

// GET all galleries for homepage
router.get('/', async (req, res) => {
    res.send('hi');
});

module.exports = router;