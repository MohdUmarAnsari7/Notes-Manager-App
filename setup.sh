#!/bin/bash

echo "🚀 Setting up Notes Manager App..."

# Backend setup
echo "📦 Installing backend dependencies..."
cd backend
npm install

# Copy environment file
if [ ! -f .env ]; then
    echo "📝 Creating backend environment file..."
    cp .env.example .env
    echo "✅ Please update .env with your MongoDB URI and JWT secret"
fi

# Frontend setup
echo "📦 Installing frontend dependencies..."
cd ../frontend
npm install

# Copy environment file
if [ ! -f .env ]; then
    echo "📝 Creating frontend environment file..."
    cp .env.example .env
fi

echo "🎉 Setup complete!"
echo ""
echo "To start the application:"
echo "1. Start MongoDB: mongod"
echo "2. Start backend: cd backend && npm run dev"
echo "3. Start frontend: cd frontend && npm start"
echo ""
echo "🌐 Frontend will be available at: http://localhost:3000"
echo "🔌 Backend API will be available at: http://localhost:5000"
