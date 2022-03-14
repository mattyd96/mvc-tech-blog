const router = require('express').Router();
const { userAuth } = require('../../utils/auth');
const { getPost, getNewPost, addPost, getUpdatePost, updatePost } = require('../postController');

// GET post form
router.get('/add', userAuth, getNewPost);

// Post new post
router.post('/add', userAuth, addPost);

// GET update post form
router.get('/update/:id', userAuth, getUpdatePost);

// PUT update post
router.put('/update/:id', updatePost);

// GET post
router.get('/:id', getPost);

module.exports = router;