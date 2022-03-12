const router = require('express').Router();
const auth = require('../../utils/auth');
const { getLoginForm, getSignupForm } = require('../loginController');
const { User, Post } = require('../../models');

// GET home
router.get('/login', getLoginForm);

// GET welcome if user not logged in
router.get('/signup', getSignupForm);

module.exports = router;