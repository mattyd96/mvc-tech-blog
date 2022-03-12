const router = require('express').Router();


const homeRoutes = require('./home-routes.js');
const loginRoutes = require('./login-routes');

router.use('/', homeRoutes);
router.use('/', loginRoutes);

module.exports = router;
