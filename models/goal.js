const mongoose = require("mongoose");
const passportLocalMongoose = require('passport-local-mongoose');
const Schema = mongoose.Schema;

const goalSchema = new Schema({
  title: { type: String, required: true },
  notes: String,
  date: { type: Date, default: Date.now }
});

goalSchema.plugin(passportLocalMongoose);
const Goal = mongoose.model("Goal", goalSchema, "Goal");

module.exports = Goal;