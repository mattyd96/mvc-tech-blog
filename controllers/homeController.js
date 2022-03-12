const { Post } = require('../models');

module.exports = {
    getHome: (req, res) => {
        try {
            // get login status
            const logged_in = req.session.logged_in;

            // get all posts TODO this needs more arguments to included author etc
            const posts = Post.findAll();

            res.status(200).render('dashboard', { logged_in });
        } catch (err) {
            //TODO: create error page
            res.status(500).json(err);
        }
    }
};