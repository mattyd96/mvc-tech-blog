const { Post, User, Comment } = require("../models");

module.exports = {
  // get single post
  getPost: async (req, res) => {
    const postId = req.params.id; // post id
    const logged_in = req.session.logged_in;// logged in status

    // get the post by id
    const posts = await Post.findAll({
      where: {id : postId},
      include: [{model: Comment, include: [{model: User}]}, {model: User}]
    });

    // reduce results
    const postList = posts.map((post) => post.get({ plain: true }));

    // render
    res.status(200).render('post', { logged_in, post: postList[0], style: 'post' });
  },

  // get new post form
  getNewPost: async (req, res) => {
    const logged_in = req.session.logged_in;
    try {
      res.status(200).render('addPost', { logged_in, style: 'add-post' });
    } catch (err) {
      res.status(500).end();
    }
  },

  // add a new post
  addPost: async (req, res) => {
    try {
      // create new post
      const newPost = await Post.create({
        user_id: req.session.user_id,
        title: req.body.title,
        content: req.body.content
      });

      res.status(200).end();
    } catch (err) {res.status(500).end();}
  },

  // get update post form
  getUpdatePost: async (req, res) => {
    const logged_in = req.session.logged_in;
    const user_id = req.session.user_id;
    const post_id = req.params.id;

    try {
      // get post -> make sure current user made this post
      const posts = await Post.findAll({where: {id: post_id, user_id: user_id}});

      // if post is found -> reduce and render
      if (posts) {
        const postList = posts.map((post) => post.get({ plain: true }));

        res.status(200).render('updatePost', { logged_in, post: postList[0], style: 'update-post'});
      }
      
    } catch (err) {res.status(500).end();}
  },

  // update a post
  updatePost: async (req, res) => {
    try {
      // update post with request body
      const post = await Post.update(
        {title: req.body.title, content: req.body.content},
        {where: {id: req.params.id}
      });

      res.status(200).end();
    } catch (err) {
      res.status(500).end();
    }
  },

  // delete a post
  deletePost: async (req, res) => {
    try {
      const post = await Post.destroy({where: {id: req.body.id}});

      res.status(200).end();
    } catch (err) {
      res.status(500).end();
    }
  },
}