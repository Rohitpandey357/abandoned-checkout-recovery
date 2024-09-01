const express = require('express');
const { handleCheckoutAbandoned } = require('../controllers/abandonedCartController');
const { handleOrderPlaced } = require('../controllers/orderPlacedController');

const router = express.Router();

// Routes for abandoned checkout and order placed 
router.post('/checkout-abandoned', handleCheckoutAbandoned);
router.post('/order-placed', handleOrderPlaced);

module.exports = router;
