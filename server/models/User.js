const { model, Schema } = require('mongoose');

const userSchema = new Schema({
  firstName: String,
  lastName: String,
  email: {
    type: String,
    required: true,
    unique: true
  },
  passwordHash: {
    type: String,
    required: true
  },
  birthday: Date,
  imagePath: String
});

const User = model('User', userSchema);

module.exports = User;
