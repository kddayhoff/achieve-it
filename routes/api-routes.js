const passport = require("passport")
const router = require("express").Router();
const usersController = require("../controllers/usersController");
const goalsController = require("../controllers/goalsController");


//DASHBOARD --- Where we get all of our user's dashboard goals/calendar
//////////////////////////////////////////////////////////


//Allows a user to get their info (goals and tasks), .post will allow users to create a goal that pushes to their unique user id, delete should allow a user to delete a specific goal, unable to delete specific tasks at the moment
router.route("/dashboard/goals")
  .get(usersController.findGoals);
  //client side needs to pass user ID to get dashboard
  router.route('/dashboard')
  .get(passport.authenticate('local', { failureRedirect: "/" }), function (req, res) {
      if (req.user || req.session.user)
          return res.redirect('/dashboard' + req.user._id || req.session.user._id);
      return res.redirect('/login');
  });

  router.route("/dashboard/goal/:id")
  .delete(goalsController.delete);
  // .put(goalsController.addGoal)
 
  //client side needs to pass goal ID
  router.route("/dashboard")
  .post(goalsController.create);
//client side needs to pass user ID to get dashboard
//USER
/////////////////////////////////////////////////////////
router.route("/user")
.get(usersController.getUser);
//this is important on the client side to verify that a user is logged in ==runs this route every time a page is reloaded == boolean true, null if they're not

//this will allow a new user to register their info//email and password that is then hashed/encrypted
router.route("/signup")
.post(usersController.signup);


//allows a user to login --- routing the page to the dashboard after login happens on the react side in State
router.route("/login")
.post(passport.authenticate("local"), usersController.login);

// Route for logging user out --- routing to the page to the homepage after logout happens with react State
router.route("/logout")
.get(usersController.logout);


module.exports = router;
