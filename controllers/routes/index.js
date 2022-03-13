const router = require('express').Router();


const homeRoutes = require('./home-routes.js');
const loginRoutes = require('./login-routes');
const userRoutes = require('./user-routes');
const postRoutes = require('./post-routes');
const commentRoutes = require('./comment-routes');

router.use('/', homeRoutes);
router.use('/', loginRoutes);
router.use('/user', userRoutes);
router.use('/posts', postRoutes);
router.use('/comment', commentRoutes);

module.exports = router;
