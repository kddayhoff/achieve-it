app.post("/api/signup", passport.authenticate("local-signup", {
    successRedirect: "/userdest",
    failureRedirect: "/"
  }));

  app.post('/login', passport.authenticate('local-login', { failureRedirect: "/" }),
    function (req, res) {
      console.log(res);
      res.redirect('/userdest')
    }
  )
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
