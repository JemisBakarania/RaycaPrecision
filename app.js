// app.js

const express = require('express');
const mongoose = require('mongoose');
const authRoutes = require('./routes/authRoutes');

const app = express();

// Middleware
app.use(express.json()); // Parse JSON bodies
app.use('/api/auth', authRoutes); // Register auth routes

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/support-ticket-db', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.error('MongoDB connection error:', err));

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
