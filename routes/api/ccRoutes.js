const express = require("express");
const router = express.Router();

router.get("/creationmenu", (req, res) => {
  res.render("creationmenu", { title: "Character Creation" });
});

module.exports = router;
