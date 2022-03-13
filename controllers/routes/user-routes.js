const router = require('express').Router();
const auth = require('../../utils/auth');
const { login, signup } = require('../userController');

// GET dashboard
//router.get('/dashboard', auth, getDashboard);

// GET login form
router.post('/login', login);

// GET signup form
router.post('/signup', signup);

module.exports = router;