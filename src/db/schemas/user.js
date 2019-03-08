const mongoose = require('mongoose');
const { Schema } = mongoose;
const timestamp = require('../middleware/timestamp');
const uniqueValidator = require('mongoose-unique-validator');

const userSchema = new Schema(
  {
    username: { type: String, required: true, unique: true },
    email: { type: String, index: true, unique: true, required: true },
    password: { type: String, required: true },
    favoriteProducts: Array,
    viewedProducts: Array,
    orders: Array
  },
  {
    timestamps: true
  }
);

userSchema.plugin(timestamp);
userSchema.plugin(uniqueValidator);

const User = mongoose.model('User', userSchema);

module.exports = User;
