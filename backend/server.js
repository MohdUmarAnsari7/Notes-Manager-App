const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

// Production optimizations
const isProduction = process.env.NODE_ENV === 'production';

const authRoutes = require('./routes/auth');
const noteRoutes = require('./routes/notes');

const app = express();

// CORS configuration
const corsOptions = {
  origin: isProduction 
    ? true // Allow same origin in production
    : ['http://localhost:3000', 'http://localhost:3001', 'https://localhost:3000'],
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
};

app.use(cors(corsOptions));
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/notesapp';

mongoose.connect(MONGODB_URI)
.then(() => {
  console.log('✅ MongoDB connected successfully');
  console.log(`🌍 Environment: ${isProduction ? 'Production' : 'Development'}`);
})
.catch(err => {
  console.error('❌ MongoDB connection error:', err.message);
  process.exit(1);
});

app.use('/api/auth', authRoutes);
app.use('/api/notes', noteRoutes);

// Serve static files from React app in production
if (isProduction) {
  const path = require('path');
  app.use(express.static(path.join(__dirname, '../frontend/build')));
  
  app.get(/.*/, (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/build/index.html'));
  });
} else {
  app.get('/', (req, res) => {
    res.json({ message: 'Notes Manager API is running!' });
  });
}

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
