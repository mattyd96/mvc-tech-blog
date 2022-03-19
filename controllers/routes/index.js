const router = require('express').Router();

const homeRoutes = require('./home-routes.js');
const loginRoutes = require('./login-routes');
const userRoutes = require('./user-routes');
const postRoutes = require('./post-routes');
const commentRoutes = require('./comment-routes');
const dashboardRoutes = require('./dashboard-routes');

router.use('/', homeRoutes);
router.use('/', loginRoutes);
router.use('/user', userRoutes);
router.use('/posts', postRoutes);
router.use('/comment', commentRoutes);
router.use('/dashboard', dashboardRoutes);

module.exports = router;
