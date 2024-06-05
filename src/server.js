// rent-management-backend/server.js
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());

// Routes
app.get('/api/tenants', async (req, res) => {
  // Implement logic to fetch tenants from database
});

app.post('/api/bills', async (req, res) => {
  // Implement logic to add a bill to the database
});

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/rent_management', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
