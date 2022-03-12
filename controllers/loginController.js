module.exports = {
    getLoginForm: (req, res) => {
        try {
            res.status(200).render('loginForm');
        } catch (err) {
            //TODO: create error page
            res.status(500).json(err);
        }
    },

    getSignupForm: (req, res) => {
        try {
            res.status(200).render('signupForm');
        } catch (err) {
            //TODO: create error page
            res.status(500).json(err);
        }
    }
};