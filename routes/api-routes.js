const passportConfig = require("../passportConfig");
const bcrypt = require("bcryptjs");
const passport = require("passport")
const User = require("../models/user");
const router = require("express").Router();
const usersController = require("../controllers/usersController");
const goalsController = require("../controllers/goalsController");


//DASHBOARD
//////////////////////////////////////////////////////////THIS CODE WORKS!!!!!  Dashboard goal route
// Matches with "/api/dashboard
router.route("/dashboard")
  .get(goalsController.findAll)
  .post(goalsController.create);

// Matches with "/api/dashboard/:id"
router
  .route("/:id")
  .get(goalsController.findById)
  .put(goalsController.update)
  .delete(goalsController.remove);




//USER
// passport authentication routes for user//////////////////////////////////

//gets all data about a user (username and password that is hashed/encrypted)
// app.get("/user", (req,res) => {
//   res.send(req.user);
// });


///////////////////////////////////////////////////
//THIS WORKS!!!!
router.route("/user")
.get(usersController.findAll)
.post(usersController.create);

router.route("/:id")
.get(usersController.findById)
.put(usersController.update)
.delete(usersController.remove)




///////////////////////////////////////////////////////////////
//THIS CODE WORKS PLEASE DON'T TOUCH  (YET)
//this will allow a new user to register their info//email and password that is then hashed/encrypted
router.post("/signup", (req, res) => {
  User.findOne({username: req.body.username}, async (err, doc) => {
    if (err) throw err;
    if (doc) res.send("User Already Exists");
    if (!doc) {
      const hashedPassword = await bcrypt.hash(req.body.password, 10);

      const newUser = new User ({
        username: req.body.username,
        password: hashedPassword,
      });
      const response = await newUser.save();
      console.log(response)
      res.send("User Created")
    }
  });
});
/////////////////////////////////////////////////////////////////














//allows a user to log in to their dashboard//This will be homepage too /login or /*
// router.post("/login", (req, res) => {
//   ("local", (err, user, info) => {
//     if (err) throw err;
//     if (!user) res.send("No User Exists");
//     else {
//       req.logIn(user, (err) => {
//         if (err) throw err;
//         res.send("Successfully Authenticated");
//         console.log(req.user);
//       });
//     }
//   }) (req, res, next);
// });

// this redirects client to homepage --- need error page to redirect to if there's an error???
// app.post("/api/signup", ("local-signup", {
//   successRedirect: "/login",
//   failureRedirect: "/"
// }));


// Route for logging user out
//authentication needs to happen here
router.get("/logout", function (req, res) {
  req.logout();
  res.redirect("/");
});

// Route for getting some data about our user to be used client side
router.get("/user_data", function (req, res) {
  if (!req.user) {
    // The user is not logged in, send back an empty object
    res.json({});
  } else {
    // Otherwise send back the user's email and id
    // Sending back a password, even a hashed password, isn't a good idea
    res.json({
      username: req.user.username,
      id: req.user.id
    });
  }
})


//NOT a passport route, this route will allow a user to update their dashboard====might need to add an id with it i.e. /:id/dashboard (something like this)
router.post("/goal", (req, res) => {
  console.log(req.body);
});


// app.get("/goal", (req, res) => {
//   console.log(req.body);
// });

// app.get("/api/user/username", (req, res) => {
  
// })

module.exports = router;
