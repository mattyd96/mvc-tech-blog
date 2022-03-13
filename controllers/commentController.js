const { Comment } = require("../models");

module.exports = {
  addComment: async (req, res) => {
    try {
      const comment = await Comment.create({
        user_id: req.session.user_id,
        post_id: req.body.post,
        content: req.body.comment,
      });
      
      res.status(200).end();
    } catch (err) {
      console.log(err);
      res.status(500).end();
    }
  },
};
