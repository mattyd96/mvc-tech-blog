const { Post, User, Comment } = require("../models");

module.exports = {
  getPost: async (req, res) => {
    const postId = req.params.id;
    const logged_in = req.session.logged_in;

    const posts = await Post.findAll({
      where: {id : postId},
      include: [{model: Comment, include: [{model: User}]}]
    });

    const postList = posts.map((post) => post.get({ plain: true }));
    console.log(postList);

    res.status(200).render('post', { logged_in, post: postList[0] });
  }
}