const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/achieve-it"
);

const goalSeed = [
  {
    task: "Polish Resume",
    notes: "Add new skills & work experience"
    date: new Date(Date.now())
  },
  {
    task: "Finish Achieve It",
    notes: "Collab with the team and kick butt"
    date: new Date(Date.now())
  },  
  {
    task: "Get a six-pack",
    notes: "Do 50 pushups a day"
    date: new Date(Date.now())
  }
];

db.Goal
  .remove({})
  .then(() => db.Goal.collection.insertMany(goalSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
