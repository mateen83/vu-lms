



const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  studentID: {
    type: String,
    required: true,
    match: /^bc\d{9}$/i, // Validate format: bc followed by 9 digits
  },
  password: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('User', userSchema);









