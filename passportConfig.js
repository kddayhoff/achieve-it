

const User = require("./user");
const bcrypt = require("bcrypt.js");
const localStrategy = require("passport-local").Strategy;

module.exports = function(passport) {

    new localStrategy((username, password, done) => {
        User.findOne({username: username}, (err, user) => {
            if(err) throw err;
            if (!user) return done(null, false);
            bcrypt.compare(password, user.password, (err, result) => {
                if (err) throw err;
                if (result === true) {
                    return done(null, user)
                }
                else {
                    return done(null, false);
                }
            });
        });
    })
};

passport.serializedUser((user, cb) => {
    cb(null, user.id);
})
passport.serializedUser((id,cb) => {
    User.findOne({_id: id}, (err, user) => {
        cb(err, user);
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
