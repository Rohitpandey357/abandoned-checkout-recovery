const AbandonedCart = require('../models/AbandonedCart');
const scheduleMessage = require('../utils/scheduleMessage');

// Controller to handle abandoned checkouts
const handleCheckoutAbandoned = async (req, res) => {
  const { email, items } = req.body;

  const newAbandonedCart = new AbandonedCart({
    email,
    items,
    abandonedAt: new Date(),
  });

  await newAbandonedCart.save();
  scheduleMessage(email, newAbandonedCart._id);

  res.status(200).json({ message: 'Checkout abandonment recorded' });
};

module.exports = { handleCheckoutAbandoned };
