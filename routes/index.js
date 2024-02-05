const express = require("express");
const router = express.Router();

const passport = require("passport");

// Google OAuth login route
router.get(
  "/auth/google",
  // `passport.authenticate` returns a middleware function that coordiantes with the OAuth server
  // The user will see the OAuth consent screen if they haven't previously consented
  passport.authenticate(
    // Name of strategy being used
    "google",
    {
      // Requesting the user's profile and email
      scope: ["profile", "email"],
      // Optionally force pick account every time
      prompt: "select_account"
    }
  )
);

// Google OAuth callback route
router.get(
  "/oauth2callback",
  passport.authenticate("google", {
    // redirect to main /movies page on both success and failure
    successRedirect: "/wellness-links",
    failureRedirect: "/",
  })
);

// OAuth logout route
router.get("/logout", function (req, res) {
  // `logout` method added to `req` by Passport
  req.logout(function () {
    res.redirect("/");
  });
});


router.get("/", (req, res) => {
    res.render('mainpage',)
});

router.get("/wellness-links", (req, res) => {
    res.render('wellness-links',)
});



 
 
module.exports = router;