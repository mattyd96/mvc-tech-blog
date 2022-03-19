const { Comment } = require("../models");

module.exports = {
  // add a comment
  addComment: async (req, res) => {
    try {
      // if there is comment content
      if (req.body.comment.length !== 0) {
        //create comment
        const comment = await Comment.create({
          user_id: req.session.user_id,
          post_id: req.body.post,
          content: req.body.comment.trim(),
        });
        
        res.status(200).end();
      } else {
        //if no comment content send error message to user
        res.status(500).json({error: 'empty'});
      }
      
    } catch (err) {
      console.log(err);
      res.status(500).end();
    }
  },
};
