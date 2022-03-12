module.exports = {
    getLoginForm: (req, res) => {
        try {
            //res.status(200).render('welcome');
            res.send('login');
        } catch (err) {
            //TODO: create error page
            res.status(500).json(err);
        }
    },

    getSignupForm: (req, res) => {
        try {
            res.send('signup');
        } catch (err) {
            //TODO: create error page
            res.status(500).json(err);
        }
    }
};