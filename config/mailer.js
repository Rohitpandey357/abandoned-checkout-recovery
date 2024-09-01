const nodemailer = require('nodemailer');
const dotenv = require('dotenv');
const Order = require('../models/Order'); 
const AbandonedCart = require('../models/AbandonedCart'); 
const mongoose = require('mongoose');

dotenv.config();

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

async function sendMail(toEmail, subject, messageBody) {
  try {
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: toEmail,
      subject: subject,
      text: messageBody,
    };

    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent successfully:', info.response);
  } catch (error) {
    console.error('Error sending email:', error);
  }
}

module.exports = sendMail;
