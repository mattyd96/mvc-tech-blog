// general redirect on server side
const userAuth = (req, res, next) => {
    req.session.logged_in ? next() : res.redirect('/login');
};
// general redirect message for fetch request response -> redirect initiated on client side
const userAuthFetch = (req, res, next) => {
    req.session.logged_in ? next() : res.status(302).end();
};

module.exports = { userAuth, userAuthFetch };