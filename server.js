



const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(express.static(__dirname)); // Serve static files from login_form directory

// MongoDB Connection
mongoose.connect('mongodb://localhost:27017/vu_lms', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('Connected to MongoDB'))
.catch((err) => console.error('MongoDB connection error:', err));

// User Schema
const User = require('./models/User');

// API to handle user registration
app.post('/api/register', async (req, res) => {
  const { studentID, password } = req.body;
  console.log('Received registration request:', { studentID, password }); // Debug log

  try {
    // Create new user with plain password
    const user = new User({
      studentID,
      password, // Store plain password
    });

    await user.save();
    console.log('User saved:', { studentID, password }); // Debug log
    res.status(201).json({ message: 'User Login Successfully' });
  } catch (error) {
    console.error('Registration error:', error); // Debug log
    res.status(500).json({ message: 'Server error', error });
  }
});

// Serve index.html for the root route
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});





















