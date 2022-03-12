const userAuth = (req, res, next) => {
    req.session.logged_in ? next() : res.redirect('/welcome');
};

module.exports = userAuth;