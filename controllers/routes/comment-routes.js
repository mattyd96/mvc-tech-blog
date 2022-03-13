const router = require('express').Router();
const auth = require('../../utils/auth');
const { addComment } = require('../commentController');

// POST comment -> add a comment
router.post('/add', auth, addComment);

module.exports = router;