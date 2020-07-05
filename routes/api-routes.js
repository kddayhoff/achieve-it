const passportConfig = require("../passportConfig");
const bcrypt = require("bcryptjs");


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

//NOT a passport route, this route will allow a user to update their dashboard====might need to add an id with it i.e. /:id/dashboard (something like this)
app.post("/dashboard", (req, res) => {
  console.log(req.body);
});



