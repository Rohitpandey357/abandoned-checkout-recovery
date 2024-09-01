const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const webhookRoutes = require('./routes/webhookRoutes');
const messageRoutes = require('./routes/orderRoutes');

dotenv.config();

// Connect to MongoDB
connectDB();

const app = express();

app.use(express.json());

// Set up routes
app.use('/webhook', webhookRoutes);
app.use('/', messageRoutes);

// Set the view engine to EJS
app.set('view engine', 'ejs');

// Start the server
// eslint-disable-next-line no-undef
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
