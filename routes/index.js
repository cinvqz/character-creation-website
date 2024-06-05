const express = require('express');
const router = express.Router();
const userRoutes = require('./api/userRoutes');
const withAuth = require("../utils/auth");


router.use(userRoutes);

router.get("/login", async (req, res) => {
    if (req.session.logged_in) {
      return res.redirect('/home');
    }
    res.render("login", {
      title: "Login Page",
    });
});

// Route imports
const viewRoutes = require("./viewRoutes");
const userRoutes = require("./api/userRoutes");
const signupRoutes = require('./api/signupRoutes');

// Route usage
router.use("/", viewRoutes);
router.use("/user", userRoutes);
router.use('/signupRoute', signupRoutes);


router.get("/signup", async (req, res) => {
    if (req.session.logged_in) {
      return res.redirect('/home');
    }
    res.render("signup", {
      title: "Signup Page",
    });
});

router.get("/home", withAuth, async (req, res) => {
    res.render("home", {
      logged_in: req.session.logged_in,
      title: "Home",
    });
});

router.get("/character", withAuth, async (req, res) => {
    res.render("character", {
      logged_in: req.session.logged_in,
      title: "Character Creation",
    });
});

module.exports = router;