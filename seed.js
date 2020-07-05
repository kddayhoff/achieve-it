const mongoose = require("mongoose");
const db = require("./models/index");

// This file empties the Goals collection and inserts the goals below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/achieve2believe", {
    useNewUrlParser: true,
  useFindAndModify: false
  }
);

const goalSeed = [
  {
    task: "Polish Resume",
    notes: "Add new skills & work experience",
    day: new Date(Date.now())
  },
  {
    task: "Finish Achieve It",
    notes: "Collab with the team and kick butt",
    date: new Date(Date.now())
  },  
  {
    task: "Get a six-pack",
    notes: "Do 50 pushups a day",
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
