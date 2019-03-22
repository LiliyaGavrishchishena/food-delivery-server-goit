const mongoose = require('mongoose');
const { Schema } = mongoose;
const timestamp = require('../middleware/timestamp');

const userSchema = new Schema(
  {
    username: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    favoriteProducts: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Product'
      }
    ],
    viewedProducts: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Product'
      }
    ],
    orders: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Order'
      }
    ]
  },
  {
    timestamps: true
  }
);

userSchema.plugin(timestamp);

const User = mongoose.model('User', userSchema);

module.exports = User;
