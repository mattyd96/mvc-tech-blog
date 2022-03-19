const router = require('express').Router();
const { getHome, get404 } = require('../homeController');

// GET home
router.get('/', getHome);

// 404 error page
router.get('*', get404);

module.exports = router;