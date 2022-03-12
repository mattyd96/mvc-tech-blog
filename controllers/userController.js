const { User, Post } = require('../models');

module.exports = {
    login: (req, res) => {

    },
    signup: async (req, res) => {
      console.log(req.body.username);
      try {
        // see if username already exists
      const usernameExists = await User.findOne({   
        where: { username: req.body.username }
      });

      // see if email already exists
      const emailExists = await User.findOne({   
        where: { email: req.body.email }
      });

      if (usernameExists) {
        res.status(400).json({
          message: 'username'
        });
      }

      if (emailExists) {
        res.status(400).json({
          message: 'email'
        });
      }

      const newUser = User.create({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password
      });

      req.session.save(() => {
        req.session.user_id = newUser.id;
        req.session.logged_in = true;

        res.redirect('/');
      });
      } catch (err) {console.log(err)}
      
    },
};