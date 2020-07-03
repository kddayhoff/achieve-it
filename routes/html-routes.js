// Dependencies
// =============================================================
var path = require("path");

// Routes
// =============================================================
// Requiring our custom middleware for checking if a user is logged in
var isAuthenticated = require(path.join(__dirname, "..", "config", "middleware", "isAuthenticated.js"));

app.get("/login", function (req, res) {
    // If the user already has an account send them to the members page
    if (req.user) {
      res.redirect("/userdest");
    }
    res.redirect("/");
    // res.sendFile(path.join(__dirname, "../public/login.html"));
  });
}

function isLoggedIn(req, res, next) {
  // If the user is logged in, continue with the request to the restricted route
  if (req.isAuthenticated()) {
    console.log("log auth")
    return next();
  }
  console.log("not auth");
  // If the user isn't logged in, redirect them to the login page
  res.redirect("/");
}