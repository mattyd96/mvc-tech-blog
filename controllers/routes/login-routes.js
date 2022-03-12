const router = require('express').Router();
const { getForm } = require('../loginController');

// GET login form
router.get('/login', getForm);

// GET signup form
router.get('/signup', getForm);

module.exports = router;