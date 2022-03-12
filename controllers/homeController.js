module.exports = {
    getHome: (req, res) => {
        try {
            const logged_in = req.session.logged_in;
            res.status(200).render('dashboard', { logged_in });
        } catch (err) {
            //TODO: create error page
            res.status(500).json(err);
        }
    },

    getWelcome: (req, res) => {
        try {
            res.status(200).render('welcome');
        } catch (err) {
            //TODO: create error page
            res.status(500).json(err);
        }
    }
};