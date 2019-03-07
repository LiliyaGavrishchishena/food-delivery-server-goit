const mongoose = require('mongoose');
const { Schema } = mongoose;
const timestamp = require('../middleware/timestamp');
const uniqueValidator = require('mongoose-unique-validator');

const productSchema = new Schema(
  {
    sku: {
      type: String,
      default: Date.now()
    },
    name: String,
    description: String,
    price: Number,
    currency: {
      type: String,
      default: 'UAH'
    },
    categories: {
      type: Array,
      default: ['pizza']
    },
    likes: { type: Number, default: 0 }
  },
  {
    timestamps: true
  }
);

productSchema.plugin(timestamp);
productSchema.plugin(uniqueValidator);

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
