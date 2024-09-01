const mongoose = require('mongoose');

const checkoutSchema = new mongoose.Schema({
  email: { type: String, required: true },
  items: { type: Array, required: true },
  abandonedAt: { type: Date, required: true },
});

module.exports = mongoose.model('AbandonedCart', checkoutSchema);
