// require('dotenv').config(); // This loads .env variables

// const mongoose = require('mongoose');

// mongoose.connect(process.env.MONGODB_URI)
//   .then(() => console.log('✅ Connected to MongoDB Atlas'))
//   .catch((err) => console.error('❌ MongoDB connection error:', err));




// const express = require('express');
// const mongoose = require('mongoose');
// const cors = require('cors');
// const bodyParser = require('body-parser');
// const path = require('path');

// const app = express();
// const PORT = 3000;

// // Middleware
// app.use(cors());
// app.use(bodyParser.json());
// app.use(express.static(__dirname)); // Serve static files from login_form directory

// // MongoDB Connection
// mongoose.connect('mongodb://localhost:27017/vu_lms', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// })
// .then(() => console.log('Connected to MongoDB'))
// .catch((err) => console.error('MongoDB connection error:', err));

// // User Schema
// const User = require('./models/User');

// // API to handle user registration
// app.post('/api/register', async (req, res) => {
//   const { studentID, password } = req.body;
//   console.log('Received registration request:', { studentID, password }); // Debug log

//   try {
//     // Create new user with plain password
//     const user = new User({
//       studentID,
//       password, // Store plain password
//     });

//     await user.save();
//     console.log('User saved:', { studentID, password }); // Debug log
//     res.status(201).json({ message: 'User Login Successfully' });
//   } catch (error) {
//     console.error('Registration error:', error); // Debug log
//     res.status(500).json({ message: 'Server error', error });
//   }
// });

// // Serve index.html for the root route
// app.get('/', (req, res) => {
//   res.sendFile(path.join(__dirname, 'index.html'));
// });

// // Start server
// app.listen(PORT, () => {
//   console.log(`Server running on http://localhost:${PORT}`);
// });






// require('dotenv').config(); // Load .env

// const express = require('express');
// const mongoose = require('mongoose');
// const cors = require('cors');
// const bodyParser = require('body-parser');
// const path = require('path');

// const app = express();
// const PORT = process.env.PORT || 3000;

// // Middleware
// app.use(cors());
// app.use(bodyParser.json());
// app.use(express.static(__dirname));

// // MongoDB Atlas Connection
// mongoose.connect(process.env.MONGODB_URI)
//   .then(() => console.log('✅ Connected to MongoDB Atlas'))
//   .catch((err) => console.error('❌ MongoDB connection error:', err));

// // User Schema
// const User = require('./models/User');

// // Registration API
// app.post('/api/register', async (req, res) => {
//   const { studentID, password } = req.body;

//   try {
//     const user = new User({ studentID, password });
//     await user.save();
//     res.status(201).json({ message: 'User Login Successfully' });
//   } catch (error) {
//     console.error('❌ Registration error:', error);
//     res.status(500).json({ message: 'Server error', error });
//   }
// });

// // Serve index.html
// app.get('/', (req, res) => {
//   res.sendFile(path.join(__dirname, 'index.html'));
// });

// // Start server
// app.listen(PORT, () => {
//   console.log(`🚀 Server running on http://localhost:${PORT}`);
// });



























require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');
const bcrypt = require('bcrypt');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

// MongoDB Connection
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('✅ Connected to MongoDB'))
  .catch((err) => console.error('❌ MongoDB connection error:', err));

// User Schema
const User = require('./models/User');

// API to handle user registration
app.post('/api/register', async (req, res) => {
  const { studentID, password } = req.body;
  console.log('Received registration request:', { studentID });
  try {
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
  try {
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
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});