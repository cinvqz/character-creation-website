const router = require("express").Router();
const withAuth = require("../utils/auth");

router.get("/login", async (req, res) => {
  // Send the rendered Handlebars.js template back as the response
  res.render("login", {
    title: "Login Page",
  });
});

router.get("/signup", async (req, res) => {
  // Send the rendered Handlebars.js template back as the response
  res.render("signup", {
    title: "Signup Page",
  });
});

router.get("/home", withAuth, async (req, res) => {
  // Send the rendered Handlebars.js template back as the response
  res.render("home", {
    logged_in: req.session.logged_in,
    title: "Home",
  });
});

router.get("/character", withAuth, async (req, res) => {
  // Send the rendered Handlebars.js template back as the response
  res.render("character", {
    logged_in: req.session.logged_in,
    title: "Character Creation",
  });
});

module.exports = router;
