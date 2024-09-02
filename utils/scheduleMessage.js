const nodeSchedule = require('node-schedule');
const sendMail = require('../config/mailer');
const AbandonedCart = require('../models/AbandonedCart');
const Order = require('../models/Order');

const scheduleMessage = (email, checkoutId) => {
  const scheduleTimes = [30 * 60 * 1000, 24 * 60 * 60 * 1000, 3 * 24 * 60 * 60 * 1000];
  // less time for testing  
  // const scheduleTimes = [1000, 10 * 1000, 20 * 1000];
  scheduleTimes.forEach((time, index) => {
    nodeSchedule.scheduleJob(Date.now() + time, async () => {
      try {
        const abandonedCart = await AbandonedCart.findById(checkoutId);
        
        // No cart found, skip sending the email
        if (!abandonedCart) {
          console.log(`No abandoned cart found for ${email}. Skipping reminder ${index + 1}`);
          return; 
        }

        // Get the time the cart was abandoned
        const abandonedCartTime = abandonedCart.abandonedAt;

        // Check if an order exists for the email that was placed after the abandoned cart time
        const existingOrder = await Order.findOne({
          email: email,
          placedAt: { $gt: abandonedCartTime }, // Order placed after cart abandonment
        });
        
        // Skip sending the email if the order is placed after cart abandonment
        if (existingOrder) {
          console.log(`Order placed after cart abandonment by ${email}. Skipping reminder ${index + 1}`);
          // Delete the abandoned cart since the order has been placed
          await AbandonedCart.deleteOne({ _id: abandonedCart._id });
          return; 
        }

        // If no recent order exists, send the reminder email
        await sendMail(email, `Reminder ${index + 1}`, 'You have items left in your cart. Complete your purchase!');
      } catch (error) {
        console.error('Error in scheduled job:', error);
      }
    });
  });
};

module.exports = scheduleMessage;
