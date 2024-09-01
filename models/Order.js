const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  email: { type: String, required: true },
  items: { type: Array, required: true },
  placedAt: { type: Date, required: true },
});

module.exports = mongoose.model('Order', orderSchema);
