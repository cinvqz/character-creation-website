// const express = require("express");
const router = require("express").Router();

// Route imports
const viewRoutes = require("./viewRoutes");
const userRoutes = require("./api/userRoutes");
const signupRoutes = require('./api/signupRoutes');

// Route usage
router.use("/", viewRoutes);
router.use("/user", userRoutes);
router.use('/signupRoute', signupRoutes);

module.exports = router;
