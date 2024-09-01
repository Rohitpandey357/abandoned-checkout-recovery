const express = require('express');
const { getOrders } = require('../controllers/messageController');

const router = express.Router();

// Route to fetch and display sent messages
router.get('/orders', getOrders);

module.exports = router;
