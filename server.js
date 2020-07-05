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
const User = require('./user');
const PORT = process.env.PORT || 3001;

const app = express();

require('dotenv').config();

// Define middleware here
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors({
  origin: "http://localhost:3000" ||"http//localhost:3001",
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
require("./routes/api-routes");

//Routes
app.post("/login", (req, res, next) => {
  passport.authenticate("local", (err, user, info) => {
    if (err) throw err;
    if (!user) res.send("No User Exists");
    else {
      req.logIn(user, (err) => {
        if (err) throw err;
        res.send("Successfully Authenticated");
        console.log(req.user);
      });
    }
  })(req, res, next);
});

app.post("/register", (req, res) => {
  User.findOne({ username: req.body.username }, async (err, doc) => {
    if (err) throw err;
    if (doc) res.send("User Already Exists");
    if (!doc) {
      const hashedPassword = await bcrypt.hash(req.body.password, 10);

      const newUser = new User({
        username: req.body.username,
        password: hashedPassword,
      });
      await newUser.save();
      res.send("User Created");
    }
  });
});
app.get("/user", (req, res) => {
  res.send(req.user); // The req.user stores the entire user that has been authenticated inside of it.
});

//Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/achieve2believe", 
{
  useNewUrlParser: true,
  useFindAndModify: false
},
() => {
  console.log ('Mongoose is Connected!!');
});
// Send every other request to the React app
// Define any API routes before this runs
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/public/index.html"));
});

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port http://localhost:${PORT} !`);
});
