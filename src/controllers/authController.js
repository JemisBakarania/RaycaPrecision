// controllers/authController.js

const User = require('../models/User');
const bcrypt = require('bcryptjs');

exports.registerUser = async (req, res, next) => {
  try {
    const { name, email, password } = req.body;

    // Check if user with same email already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists with this email' });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create new user
    const newUser = new User({
      name,
      email,
      password: hashedPassword,
    });

    // Save user to database
    await newUser.save();

    res.status(201).json({ message: 'User registered successfully', user: newUser });
  } catch (error) {
    next(error);
  }
};
