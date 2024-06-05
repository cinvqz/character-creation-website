const router = require('express').Router();
const { User } = require('../../models');
const bcrypt = require('bcrypt');

// Signup route
router.post('/signup', async (req, res) => {
  const { user_name, email, password } = req.body;
  try {
    const existingUser = await User.findOne({ where: { email } });
    if (existingUser) {
      return res.render('signup', { errorMessage: 'User with this email already exists' });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    await User.create({ user_name, email, password_hash: hashedPassword });
    res.redirect('/login');
  } catch (error) {
    console.error(error);
    res.render('signup', { errorMessage: 'An error occurred during signup' });
  }
});

// Login route
router.post('/login', async (req, res) => {
  console.log('Login request received:', req.body);
  try {
    const userData = await User.findOne({ where: { email: req.body.email } });
    if (!userData) {
      console.log('No user found with this email:', req.body.email);
      return res.render('login', { errorMessage: 'Failed to log in. Please check your credentials.' });
    }
    
    // Print hashed password from the database
    console.log('Hashed password from the database:', userData.password_hash);

    const validPassword = await bcrypt.compare(req.body.password, userData.password_hash);
    console.log('Password comparison results:', validPassword);
    
    if (!validPassword) {
      console.log('Invalid password for user:', req.body.email);
      return res.render('login', { errorMessage: 'Failed to log in. Please check your credentials.' });
    }

    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;
      res.redirect('/'); // Redirect to home page or dashboard
    });
  } catch (error) {
    console.error('Error during login:', error);
    res.render('login', { errorMessage: 'An error occurred during login' });
  }
});

router.post("/logout", async (req, res) => {
  if ((req.session.login = true)) {
    req.session.destroy();
    return;
  }
});

module.exports = router;
