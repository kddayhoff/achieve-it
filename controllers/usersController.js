const db = require("../models");
const User = require("../models/user");
const bcrypt = require("bcryptjs");

// Defining methods for the usersController
module.exports = {
  findAll: (req, res) => {
    db.User
      .find(req.query)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
//finds user by unique ID
  // findById: (req, res) => {
  //   db.User
  //     .findById(req.params.id)
  //     .then(dbModel => {
  //       const user = {
  //         _id: dbModel._id,
  //         goals: dbModel.goals,
  //         username: dbModel.username
  //       }
  //       res.json(user)})
  //     .catch(err => res.status(422).json(err));
  // },
  //puts a new user in the database with hashed password and unique ID
  signup: (req, res) => {
    User.findOne({username: req.body.username}, async (err, doc) => {
      if (err) throw err;
      if (doc) res.send("User Already Exists");
      if (!doc) {
        const hashedPassword = await bcrypt.hash(req.body.password, 10);
  
        const newUser = new User ({
          username: req.body.username,
          password: hashedPassword,
        });
        const response = await newUser.save();
        console.log(response);
        res.send("User Created");
      }
      });
    },
  //
  // getUser: (req, res) => {
  //   console.log(req.user);
  //   if (req.user){
  //     return res.json({user: req.user});
  //  }
  //  else {
  //     return res.json({user: null});
  //  }
  // },
  
  login: (req, res) => {
    console.log('POST to /login');
    console.log(req.user);
    
    const user = JSON.parse(JSON.stringify(req.user)); // hack
      const cleanUser = Object.assign({}, user);
      if (cleanUser) {
        console.log(`Deleting ${cleanUser.password}`);
        delete cleanUser.password;
      }
      res.json({ user: cleanUser });
  },

  // remove: function(req, res) {
  //   db.User
  //     .findById({ _id: req.params.id })
  //     .then(dbModel => dbModel.remove())
  //     .then(dbModel => res.json(dbModel))
  //     .catch(err => res.status(422).json(err));
  // },
 
  // populateUserGoals: (req, res) =>
  //  {
  //   db.User.find(req.user.id)
  //     .populate("notes")
  //     .then(dbUser => {
  //       res.json(dbUser);
  //     })
  //     console.log(dbUser)
  //     .catch(err => {
  //       res.json(err);
  //     });
  //  }
};
