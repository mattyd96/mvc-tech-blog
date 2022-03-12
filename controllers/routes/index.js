const router = require('express').Router();


const homeRoutes = require('./home-routes.js');
const loginRoutes = require('./login-routes');
const userRoutes = require('./user-routes');

router.use('/', homeRoutes);
router.use('/', loginRoutes);
router.use('/user', userRoutes);

module.exports = router;
