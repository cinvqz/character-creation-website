const express = require("express");
const router = express.Router();

const userRoutes = require("../routes/api/userRoutes");
const loginRoutes = require("../routes/api/loginRoutes");
const signupRoutes = require("../routes/api/signupRoutes");
const viewRoutes = require("../routes/viewRoutes");
const ccRoutes = require("../routes/api/ccRoutes");
const characterRoutes = require("../routes/api/characterRoutes");

// for the router
router.use("/users", userRoutes);
router.use("/login", loginRoutes);
router.use("/signup", signupRoutes);
router.use("/home", ccRoutes);
router.use("/character", characterRoutes);
router.use("/", viewRoutes);
