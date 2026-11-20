
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log('MongoDB Connected Successfully!');
  })
  .catch((error) => {
    console.log('MongoDB Connection Error:', error.message);
  });

// Home route
app.get('/', (req, res) => {
  res.json({
    message: 'Welcome to ApplyTrack Backend!',
    status: 'Server is running successfully'
  });
});

// Health check route
app.get('/api/health', (req, res) => {
  res.json({
    success: true,
    message: 'ApplyTrack API is working!'
  });
});

// Start server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`ApplyTrack server running on port ${PORT}`);
});
