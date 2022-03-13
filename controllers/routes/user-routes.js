const router = require('express').Router();
const auth = require('../../utils/auth');
const { login, signup, logout } = require('../userController');

// POST login -> login user
router.post('/login', login);

// POST signup -> signup new user
router.post('/signup', signup);

// POST signup -> signup new user
router.post('/logout', logout);

module.exports = router;