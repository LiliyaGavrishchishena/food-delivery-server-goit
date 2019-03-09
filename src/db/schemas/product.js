const mongoose = require('mongoose');
const { Schema } = mongoose;
const timestamp = require('../middleware/timestamp');

const productSchema = new Schema(
  {
    sku: {
      type: String,
      default: Date.now()
    },
    name: {
      type: String,
      required: true
    },
    description: String,
    price: {
      type: Number,
      required: true
    },
    currency: {
      type: String,
      enum: ['UAH', 'USD', 'EUR'],
      default: 'UAH'
    },
    categories: {
      type: Array,
      required: true
    },
    createdId: {
      type: String,
      default: '1'
    },
    likes: {
      type: Number,
      default: 0
    }
  },
  {
    timestamps: true
  }
);

productSchema.plugin(timestamp);

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
