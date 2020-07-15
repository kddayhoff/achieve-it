const db = require("../models");
//find by user id, then find all by that user, need association/populate to associate specific goals with one user unit 17 act 15, reference array to all of their goals, 
// Defining methods for the goalsController
module.exports = {
  findAll: (req, res) => {
    db.Goal
      .find(req.query)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: (req, res) => {
    db.Goal
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  //////////////////////////////////////////////////////////
  //add user id here to add it to user field in goal collection
  // create: (req, res) => {
  //   db.Goal
  //     .create(req.body)
  //     .then(({_id}) => 
  //     db.User.findOneAndUpdate({}, 
  //       { $push: {goal: _id}}, {new: true})) 
  //     .then(dbModel => {
  //       res.json(dbModel);
  //     })
  //     .catch(err => res.status(422).json(err));
  // },
addGoal: (req,res) => {
  console.log(req.body)
  db.User.update({
    _id: req.params.id
  }, 
  {
    $push: {"notes": req.body}
  }).then(note => {
    res.json(note);
  } ) 
  .catch(err => {
    res.json(err);
  });
},
  create: ({ body }, res) => {
    db.Goal.create(body)
    .then(({_id}) => db.User.findOneAndUpdate({},
      { $push: { notes: _id} }, {new: true} ))
      .then(dbUser => {
        res.json(dbUser);
      }) 
      .catch(err => {
        res.json(err);
      });
  },

  update: (req, res) => {
    db.Goal
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: (req, res) => {
    db.Goal
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};