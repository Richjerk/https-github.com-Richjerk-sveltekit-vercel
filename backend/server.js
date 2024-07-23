const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// MongoDB Connection
mongoose.connect('mongodb://atlas-sql-65edfbe73d7aff59625ae3b6-3q47b.a.query.mongodb.net/myVirtualDatabase?ssl=true&authSource=admin'')
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

// Define Schemas
const businessSchema = new mongoose.Schema({
  name: String,
  description: String,
  address: String,
  email: String,
  whatsapp: String,
  ownerName: String,
  featured: { type: Boolean, default: false },
});

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  whatsapp: String,
});

const reviewSchema = new mongoose.Schema({
  businessId: { type: mongoose.Schema.Types.ObjectId, ref: 'Business' },
  rating: Number,
  comment: String,
});

const analyticsSchema = new mongoose.Schema({
  businessId: String,
  views: { type: Number, default: 0 },
  clicks: { type: Number, default: 0 },
  lastUpdated: { type: Date, default: Date.now },
});

// Create Models
const Business = mongoose.model('Business', businessSchema);
const User = mongoose.model('User', userSchema);
const Review = mongoose.model('Review', reviewSchema);
const Analytics = mongoose.model('Analytics', analyticsSchema);

// API Endpoints for Businesses
app.post('/api/businesses', async (req, res) => {
  try {
    const newBusiness = new Business(req.body);
    await newBusiness.save();
    res.status(201).json(newBusiness);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

app.get('/api/businesses', async (req, res) => {
  try {
    const businesses = await Business.find();
    res.status(200).json(businesses);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// API Endpoints for Users
app.post('/api/users', async (req, res) => {
  try {
    const user = new User(req.body);
    await user.save();
    res.status(201).json(user);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// API Endpoints for Reviews
app.post('/api/review', async (req, res) => {
  try {
    const newReview = new Review(req.body);
    await newReview.save();
    res.status(201).json(newReview);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.get('/api/reviews/:businessId', async (req, res) => {
  try {
    const reviews = await Review.find({ businessId: req.params.businessId });
    res.status(200).json(reviews);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// API Endpoints for Analytics
app.post('/api/analytics/update', async (req, res) => {
  const { businessId, type } = req.body;

  try {
    let analytics = await Analytics.findOne({ businessId });

    if (!analytics) {
      analytics = new Analytics({ businessId });
    }

    if (type === 'view') {
      analytics.views += 1;
    } else if (type === 'click') {
      analytics.clicks += 1;
    }

    await analytics.save();
    res.status(200).json(analytics);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.get('/api/analytics/:businessId', async (req, res) => {
  const { businessId } = req.params;

  try {
    const analytics = await Analytics.findOne({ businessId });
    res.status(200).json(analytics || { views: 0, clicks: 0 });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
