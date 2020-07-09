const mongoose = require("mongoose");

const db = require("./models");



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
    title: "Polish Resume",
    notes: "Add new skills & work experience",
    day: new Date(Date.now())
  },
  {
    title: "Finish Achieve It",
    notes: "Collab with the team and kick butt",
    date: new Date(Date.now())
  },  
  {
    title: "Get a six-pack",
    notes: "Do 50 pushups a day",
    date: new Date(Date.now())
  }
];

const userSeed = [
  {
    username: "Polly",
    password: "password",
    date: new Date(Date.now())
  },
  {
    username: "Brenda",
    password: "1234",
    date: new Date(Date.now())
  },  
  {
    username: "Chad",
    password: "password",
    date: new Date(Date.now())
  }
];



db.Goal
  .remove({})
  .then(() => db.Goal.collection.insertMany(goalSeed))
  .then(data => {
    console.log(data.result.n + " records inserted in Goals!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });

 
db.User
.remove({})
.then(() => db.User.collection.insertMany(userSeed))
.then(data => {
  console.log(data.result.n + " records inserted in Users!");
  process.exit(0);
})
.catch(err => {
  console.error(err);
  process.exit(1);
});