const router = require('express').Router();
const { userAuth, userAuthFetch } = require('../../utils/auth');
const { getPost, getNewPost, addPost, getUpdatePost, updatePost, deletePost } = require('../postController');

// GET post form
router.get('/add', userAuth, getNewPost);

// Post new post
router.post('/add', userAuth, addPost);

// GET update post form
router.get('/update/:id', userAuth, getUpdatePost);

// PUT update post
router.put('/update/:id', userAuthFetch, updatePost);

// DELETE post
router.delete('/delete/:id', userAuthFetch, deletePost);

// GET post
router.get('/:id', getPost);

module.exports = router;