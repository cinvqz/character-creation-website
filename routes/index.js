// const express = require("express");
const router = require("express").Router();

// Route imports
const viewRoutes = require("./viewRoutes");
const userRoutes = require("./api/userRoutes");

// Route usage
router.use("/", viewRoutes);
router.use("/user", userRoutes);

module.exports = router;
