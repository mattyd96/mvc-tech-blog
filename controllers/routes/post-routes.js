const router = require('express').Router();
const auth = require('../../utils/auth');
const { getPost, getNewPost, addPost } = require('../postController');

// GET post form
router.get('/add', auth, getNewPost);

// Post new post
router.post('/add', auth, addPost);

// GET post
router.get('/:id', getPost);

module.exports = router;