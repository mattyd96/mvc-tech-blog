const { Post, User } = require('../models');

module.exports = {
    // get the home page
    getHome: async (req, res) => {
        try {
            // get login status
            const logged_in = req.session.logged_in;

            // get all posts TODO this needs more arguments to included author etc
            const posts = await Post.findAll({
                include: [{ model: User, attributes: ['username']}],
            });

            // reduce results
            const postList = posts.map((post) => post.get({ plain: true }));

            // render
            res.status(200).render('home', { logged_in, postList, style: 'home' });
        } catch (err) {
            //TODO: create error page
            res.status(500).json(err);
        }
    },

    // get 404 error page
    get404: async (req,res) => {
        // get login status
        const logged_in = req.session.logged_in;

        // render
        res.status(404).render('404', {logged_in, style: '404'});
    }
};