const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db.js');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();

// Load environment variables
dotenv.config();

// Connect to MongoDB
connectDB();

// Initialize app
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());

// Routes
app.use('/api/companyDetails', require('./routes/companyDetails.js'));

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
