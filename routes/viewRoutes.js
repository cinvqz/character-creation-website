const router = require("express").Router();

router.get("/", async (req, res) => {
  // Send the rendered Handlebars.js template back as the response
  res.render("login"), {
    title: "Login Page",
  };
});

router.get("/", async (req, res) => {
  // Send the rendered Handlebars.js template back as the response
  res.render("signup", {
    title: 'Signup Page',
  });
});

module.exports = router;
