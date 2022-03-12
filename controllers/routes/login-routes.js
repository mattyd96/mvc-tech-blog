const router = require('express').Router();
const auth = require('../../utils/auth');
const { getLoginForm, getSignupForm } = require('../loginController');
const { User, Post } = require('../../models');

// GET login form
router.get('/login', getLoginForm);

// GET signup form
router.get('/signup', getSignupForm);

module.exports = router;