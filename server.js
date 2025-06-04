const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');
const bcrypt = require('bcrypt');

console.log('Starting server...');

const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

// Test route
app.get('/test', (req, res) => {
  console.log('Received /test request');
  res.status(200).json({ message: 'Server is running' });
});

// MongoDB Connection
mongoose.set('strictQuery', false);
mongoose.connect('mongodb://localhost:27017/vu-lms', {
  serverSelectionTimeoutMS: 30000,
})
  .then(() => console.log(' Connected to MongoDB'))
  .catch((err) => console.error(' MongoDB connection error:', err));

// User Schema
let User;
try {
  User = require('./models/User');
  console.log(' User model loaded');
} catch (error) {
  console.error(' Error loading User model:', error);
}

// API to handle user registration
app.post('/api/register', async (req, res) => {
  const { studentID, password } = req.body;
  console.log('Received registration request:', { studentID });
  try {
    if (!User) throw new Error('User model not loaded');
    const user = new User({ studentID, password });
    await user.save();
    res.status(201).json({ message: 'User Registered Successfully' });
  } catch (error) {
    console.error('Registration error:', error);
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

// API to handle user login
app.post('/api/login', async (req, res) => {
  const { studentID, password } = req.body;
  console.log('Received login request:', { studentID });
  try {
    if (!User) throw new Error('User model not loaded');
    const user = await User.findOne({ studentID });
    if (!user) {
      return res.status(400).json({ message: 'Invalid Student ID or Password' });
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid Student ID or Password' });
    }
    res.status(200).json({ message: 'Login Successful' });
  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

// Serve index.html
app.get('/', (req, res) => {
  console.log('Serving index.html');
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});



































