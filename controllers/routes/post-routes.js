const router = require('express').Router();
const auth = require('../../utils/auth');
const { getPost, getNewPost, addPost, getUpdatePost, updatePost } = require('../postController');

// GET post form
router.get('/add', auth, getNewPost);

// Post new post
router.post('/add', auth, addPost);

// GET update post form
router.get('/update/:id', auth, getUpdatePost);

// PUT update post
router.put('/update/:id', updatePost);

// GET post
router.get('/:id', getPost);

module.exports = router;