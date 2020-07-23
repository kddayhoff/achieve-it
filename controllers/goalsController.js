const db = require("../models");

module.exports = {
  //creates new goal with associated task and pushes it to a specific user that is logged in

  create: (req, res) => {
    console.log(req.body);
    console.log(req.user);
    db.Goal.create(req.body)
      .then(({ _id }) => {
        db.User.findByIdAndUpdate(
          { _id: req.user._id },
          { $push: { goals: _id } },
          { new: true }
        )
      })
      .then((dbModel) => {
        console.log("dbModel:", dbModel);
        res.json(dbModel);
      })
      .catch((err) => res.json(err.body));
  },

  //finds a specific goal for a user to update
  update: (req, res) => {
    db.Goal.findOneAndUpdate({ _id: req.params.id }, req.body)
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },

  //finds a specific goal that the user can delete
  delete: (req, res) => {
    db.Goal.findByIdAndDelete(req.params.id)

      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
};

