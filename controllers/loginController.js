module.exports = {
    getForm: (req, res) => {

        const loginForm = req.path === '/login' ? true : false;

        try {
            loginForm ? 
            res.status(200).render('loginForm', {style: 'signup-form'}) :
            res.status(200).render('signupForm', {style: 'signup-form'});

        } catch (err) {
            //TODO: create error page
            res.status(500).json(err);
        }
    }
};