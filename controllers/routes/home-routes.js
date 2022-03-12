const router = require('express').Router();
const { getHome } = require('../homeController');

// GET home
router.get('/', getHome);

module.exports = router;