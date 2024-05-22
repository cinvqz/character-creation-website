const express = require('express');
const router = express.Router();

const userRoutes = require("../routes/api/userRoutes");
const loginRoutes = require("../routes/api/loginRoutes");
const signupRoutes = require("../routes/api/signupRoutes");
const viewRoutes = require("../routes/viewRoutes");

// for the router
router.use("/users", userRoutes);
router.use("/login", loginRoutes);
router.use("/signup", signupRoutes);
router.use("/", viewRoutes);