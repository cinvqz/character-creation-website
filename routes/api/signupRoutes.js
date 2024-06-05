const router = require("express").Router();
const { User } = require("../../models");

router.post('/check', async (req, res) => {
  try {
    // Finds the user by email
    const userName = await User.findOne({where: { name: req.body.name}});
    if (userName) {
        res
        .status(400)
        .json({ message: "Name or Email taken, try again" });
        return; 
        }
    const userData = await User.findOne({ where: { email: req.body.email } });
    if (userData) {
        res
        .status(400)
        .json({ message: "Name or Email taken, try again" }); 
        return;
      }
    // Set up session data here
    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;

      // Redirect or send a successful response
      // res.json({ user: userData, message: "You are now logged in!" });
      console.log("sent");
      res.render("home");
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Internal server error" });
  }
});

module.exports = router;