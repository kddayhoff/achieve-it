const express = require("express");
const session = require("express-session");
const mongoose = require("mongoose");
const path = require("path");
const cors = require("cors");
const passportLocalMongoose = require('passport-local-mongoose');
const passportLocal = require("passport-local").Strategy();
const passport = require("passport");
const bcrypt = require("bcryptjs");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");

const PORT = process.env.PORT || 3001;

const app = express();

require('dotenv').config();

// Define middleware here
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}});
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors({
  origin: "http//localhost:3001",
  credentials: true
}))

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}


// We need to use sessions to keep track of our user's login status

app.use(session({ 
  secret: "secretcode", 
  resave: true, 
  saveUninitialized: true }));

app.use(passport.initialize());
app.use(passport.session());
app.use(cookieParser("secretcode"));

require("./passportConfig")(passport);
require("./routes/api-routes")

//Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/achieve2believe", 
{
  useNewUrlParser: true,
  useFindAndModify: false
});
// Send every other request to the React app
// Define any API routes before this runs
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/public/index.html"));
});

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port http://localhost:${PORT} !`);
});
