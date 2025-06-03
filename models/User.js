



// const mongoose = require('mongoose');

// const userSchema = new mongoose.Schema({
//   studentID: {
//     type: String,
//     required: true,
//     match: /^bc\d{9}$/i, // Validate format: bc followed by 9 digits
//   },
//   password: {
//     type: String,
//     required: true,
//   },
//   createdAt: {
//     type: Date,
//     default: Date.now,
//   },
// });

// module.exports = mongoose.model('User', userSchema);







const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
  studentID: {
    type: String,
    required: true,
    match: /^bc\d{9}$/i,
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

// Hash password before saving
userSchema.pre('save', async function (next) {
  if (this.isModified('password')) {
    this.password = await bcrypt.hash(this.password, 10);
  }
  next();
});

module.exports = mongoose.model('User', userSchema);

