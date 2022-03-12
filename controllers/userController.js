const { User, Post } = require('../models');

const createErrorMessage = errors => {
  const resError = {
    errorList: []
  }

  errors.forEach(err => {
    resError.errorList.push(err.path);
  });

  return resError;
};


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

        // if it does return error message
        if (usernameExists) {
          res.status(400).json({
            errorList: ['username exists']
          });
        }


        // see if email already exists
        const emailExists = await User.findOne({   
          where: { email: req.body.email }
        });

        // if it does return error message
        if (emailExists) {
          res.status(400).json({
            errorList: ['email exists'],
          });
        }

        // Create New user
        const newUser = await User.create({
          username: req.body.username,
          email: req.body.email,
          password: req.body.password
        });

        req.session.save(() => {
          req.session.user_id = newUser.id;
          req.session.logged_in = true;

          res.redirect('/');
        });
  
      } catch (err) {
        const error = createErrorMessage(err.errors);
        res.status(500).json(error);
      }
      
    },
};