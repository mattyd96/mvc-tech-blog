const router = require('express').Router();
const auth = require('../../utils/auth');
const { getDashboard } = require('../dashboardController');

// GET all posts by user and render page
router.get('/', auth, getDashboard);

module.exports = router;