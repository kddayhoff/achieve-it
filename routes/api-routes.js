const passportConfig = require("../passportConfig");
const bcrypt = require("bcryptjs");
const passport = require("passport")


module.exports = function (app) {
// passport authentication routes for user//////////////////////////////////

//gets all data about a user (username and password that is hashed/encrypted)
app.get("/user", (req,res) => {
  res.send(req.user);
});

//allows a user to log in to their dashboard//This will be homepage too /login or /*
app.post("/login", (req, res) => {
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
  }) (req, res, next);
});

//this will allow a new user to register their info//email and password that is then hashed/encrypted
app.post("/register", (req, res) => {
  User.fineOne({username: req.body.user}, async (err, doc) => {
    if (err) throw err;
    if (doc) res.send("User Already Exists");
    if (!doc) {
      const hashedPassword = await bcrypt.hash(req.body.password, 10);

      const newUser = new User ({
        username: req.body.username,
        passowrd: hashedPassword,
      });
      await newUser.save();
      res.send("User Created")
    }
  });
});

app.post('/login', (req, res) => {
  passport.authenticate('local', (err, user, next) => {
   if (err) throw err;
   if (!user) res.send("No User Exists");
   else {
     req.logIn(user, err => {
       if(err) throw err;
       res.send("Successfully Authenticated");
       console.log(req.user);
     })
   }
 })(req, res, next);
});




app.post("/api/signup", passport.authenticate("local-signup", {
  successRedirect: "/login",
  failureRedirect: "/"
}));


 
// Route for logging user out
app.get("/logout", function (req, res) {
  req.logout();
  res.redirect("/");
});

// Route for getting some data about our user to be used client side
app.get("/api/user_data", function (req, res) {
  if (!req.user) {
    // The user is not logged in, send back an empty object
    res.json({});
  } else {
    // Otherwise send back the user's email and id
    // Sending back a password, even a hashed password, isn't a good idea
    res.json({
      email: req.user.email,
      id: req.user.id
    });
  }
})


//NOT a passport route, this route will allow a user to update their dashboard====might need to add an id with it i.e. /:id/dashboard (something like this)
app.post("/dashboard", (req, res) => {
  console.log(req.body);
});

}

