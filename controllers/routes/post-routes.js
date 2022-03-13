const router = require('express').Router();
const auth = require('../../utils/auth');
const { getPost } = require('../postController');

// GET post
router.get('/:id', getPost);

module.exports = router;