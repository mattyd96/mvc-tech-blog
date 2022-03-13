const { Post, User } = require('../models');

module.exports = {
    getHome: async (req, res) => {
        try {
            // get login status
            const logged_in = req.session.logged_in;

            // get all posts TODO this needs more arguments to included author etc
            const posts = await Post.findAll({
                include: [{ model: User, attributes: ['username']}],
            });

            const postList = posts.map((post) => post.get({ plain: true }));
            console.log(postList);

            res.status(200).render('home', { logged_in, postList });
        } catch (err) {
            //TODO: create error page
            res.status(500).json(err);
        }
    }
};