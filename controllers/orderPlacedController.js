const Order = require('../models/Order');
const AbandonedCart = require('../models/AbandonedCart');

// Controller to handle order placed
const handleOrderPlaced = async (req, res) => {
    const { email, items } = req.body;
  
    await AbandonedCart.deleteOne({ email });
  
    const newOrder = new Order({
      email,
      items,
      placedAt: new Date(),
    });
  
    await newOrder.save();
  
    res.status(200).json({ message: 'Order placed successfully' });
  };
  
  module.exports = { handleOrderPlaced };