module.exports = {
    getLoginForm: (req, res) => {

        const loginForm = req.path === '/login' ? true : false;

        try {
            loginForm ? 
            res.status(200).render('loginForm') :
            res.status(200).render('signupForm');

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