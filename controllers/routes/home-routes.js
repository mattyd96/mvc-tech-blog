const router = require('express').Router();
const auth = require('../../utils/auth');
const { getHome, getWelcome } = require('../homeController');
const { User, Post } = require('../../models');

//router.use(auth);

// GET home
router.get('/', auth, getHome);

// GET welcome if user not logged in
router.get('/welcome', getWelcome);

module.exports = router;