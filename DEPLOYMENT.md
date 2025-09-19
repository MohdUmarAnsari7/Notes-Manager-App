# Deployment Guide

## Environment Configuration

### Backend (.env)
Copy `.env.example` to `.env` and configure:
```
PORT=5000
MONGODB_URI=mongodb+srv://YOUR_DB_USER:YOUR_DB_PASSWORD@your-cluster.mongodb.net/notesapp
JWT_SECRET=your_super_secure_random_jwt_secret_here
```

### Frontend (.env)
Copy `.env.example` to `.env` and configure:
```
REACT_APP_API_URL=http://localhost:5000/api
```

For production, use your deployed backend URL:
```
REACT_APP_API_URL=https://your-backend-domain.com/api
```

## Development Setup

1. Start backend:
   ```bash
   cd backend
   npm install
   npm start
   ```

2. Start frontend:
   ```bash
   cd frontend
   npm install
   npm start
   ```

## Production Deployment

### Backend Deployment
- Use MongoDB Atlas for database
- Deploy to Heroku, Railway, or similar
- Set environment variables in your hosting platform

### Frontend Deployment
- Deploy to Netlify, Vercel, or similar
- Set `REACT_APP_API_URL` to your backend URL
- Build with: `npm run build`

## Security Notes
- Never commit `.env` files
- Use strong JWT secrets in production
- Use MongoDB Atlas with authentication
- Enable CORS only for your frontend domain in production
