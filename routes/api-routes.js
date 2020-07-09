const passport = require("passport")
const router = require("express").Router();
const usersController = require("../controllers/usersController");
const goalsController = require("../controllers/goalsController");


//DASHBOARD --- Where we get all of our user's dashboard goals/calendar
//////////////////////////////////////////////////////////
// Matches with "/api/dashboard
router.route("/dashboard")
  .get(goalsController.findAll)
  .post(goalsController.create);

// Matches with "/api/dashboard/:id"
router
  .route("/dashboard/:id")
  .get(goalsController.findById)
  .put(goalsController.update)
  .delete(goalsController.remove);
  //return user dashboard with goals only and username but no ID or password


//USER
/////////////////////////////////////////////////////////
router.route("/user/:id")
.get(usersController.findById)

//this will allow a new user to register their info//email and password that is then hashed/encrypted
router.route("/signup")
.post(usersController.signup)


//allows a user to login --- routing the page to the dashboard after login happens on the react side in State
router.route("/login")
.post(passport.authenticate("local"), usersController.login);

// Route for logging user out --- routing to the page to the homepage after logout happens with react State
router.route("/logout", function (req, res) {
  req.logout();
  res.json({msg: "Logout Successful"})
});

module.exports = router;
