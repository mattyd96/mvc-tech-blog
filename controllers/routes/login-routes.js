const router = require('express').Router();
const auth = require('../../utils/auth');
const { getForm } = require('../loginController');
const { User, Post } = require('../../models');

// GET login form
router.get('/login', getForm);

// GET signup form
router.get('/signup', getForm);

module.exports = router;