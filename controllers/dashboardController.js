const { Post, User, Comment } = require("../models");

module.exports = {
  // load the user dashboard
  getDashboard: async (req, res) => {
    // get session status
    const logged_in = req.session.logged_in;

    // get all posts by current user
    const posts = await Post.findAll({
      where: {user_id: req.session.user_id},
      include: [{ model: User, attributes: ['username']}]
    });

    // reduce results
    const postList = posts.map((post) => post.get({ plain: true }));

    // render
    res.status(200).render('dashboard', { logged_in, postList, style: 'dashboard' });
  }
}