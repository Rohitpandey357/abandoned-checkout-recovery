const Order = require('../models/Order');

// Controller to handle fetching and displaying orders
const getOrders = async (req, res) => {
  try {
    const orders = await Order.find().sort({ placedAt: -1 });
    res.render('orders', { orders });
  } catch (error) {
    console.error(error);
    res.status(500).send('Server Error');
  }
};

module.exports = { getOrders };
