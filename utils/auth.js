const userAuth = (req, res, next) => {
    req.session.loggedIn ? next() : res.redirect('/welcome');
};

module.exports = userAuth;