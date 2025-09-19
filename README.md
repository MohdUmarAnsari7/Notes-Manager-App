# 📚 Notes Manager App - Full Stack MERN Application

> A modern, responsive notes management application built with the MERN stack (MongoDB, Express.js, React, Node.js)

## 🎯 Overview

This is a full-stack web application that allows users to create, manage, edit, and delete personal notes. The app features user authentication, a clean modern interface, and complete CRUD functionality.

## ✨ Features

### User Authentication
- 🔐 User registration with validation
- 🔑 Secure login system
- 🛡️ JWT token-based authentication
- 🚪 Logout functionality

### Notes Management
- ➕ Create new notes with title and description
- 👀 View all personal notes in an organized grid
- ✏️ Edit existing notes
- 🗑️ Delete notes with confirmation
- 📅 Automatic timestamps for creation and updates

### User Experience
- 📱 Responsive design for all devices
- 🎨 Modern, clean interface with gradient backgrounds
- 🌟 Smooth animations and transitions
- 📝 Modal-based note creation and editing
- ⚡ Real-time updates

## 🛠️ Tech Stack

### Backend
- **Node.js** - JavaScript runtime
- **Express.js** - Web framework
- **MongoDB** - Database
- **Mongoose** - MongoDB object modeling
- **JWT** - Authentication tokens
- **bcryptjs** - Password hashing
- **cors** - Cross-origin resource sharing

### Frontend
- **React** - UI library
- **TypeScript** - Type safety
- **React Router** - Navigation
- **Axios** - HTTP client
- **CSS3** - Styling with modern features

## 📁 Project Structure

```
Notes-Manager-App/
├── backend/
│   ├── models/
│   │   ├── User.js
│   │   └── Note.js
│   ├── routes/
│   │   ├── auth.js
│   │   └── notes.js
│   ├── middleware/
│   │   └── auth.js
│   ├── server.js
│   ├── .env
│   └── package.json
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── NoteCard.tsx
│   │   │   └── NoteModal.tsx
│   │   ├── contexts/
│   │   │   └── AuthContext.tsx
│   │   ├── pages/
│   │   │   ├── Login.tsx
│   │   │   ├── Register.tsx
│   │   │   └── Dashboard.tsx
│   │   ├── services/
│   │   │   └── api.ts
│   │   ├── types/
│   │   │   └── index.ts
│   │   ├── App.tsx
│   │   └── App.css
│   └── package.json
└── README.md
```

## 🚀 Installation & Setup

### Prerequisites
- Node.js (v14 or higher)
- MongoDB (local or cloud instance)
- Git

### 1. Clone the Repository
```bash
git clone https://github.com/your-username/Notes-Manager-App.git
cd Notes-Manager-App
```

### 2. Backend Setup
```bash
cd backend
npm install
```

### 3. Environment Variables
Create a `.env` file in the backend directory:
```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/notesapp
JWT_SECRET=your_super_secret_jwt_key_here
```

### 4. Frontend Setup
```bash
cd ../frontend
npm install
```

## 🎮 Running the Application

### Start MongoDB
Make sure MongoDB is running on your system:
```bash
# If using local MongoDB
mongod
```

### Start Backend Server
```bash
cd backend
npm run dev
```
Server will run on `http://localhost:5000`

### Start Frontend Application
```bash
cd frontend
npm start
```
Application will open on `http://localhost:3000`

## 🔌 API Endpoints

### Authentication
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - Login user

### Notes (Protected Routes)
- `GET /api/notes` - Get all user notes
- `POST /api/notes` - Create new note
- `GET /api/notes/:id` - Get specific note
- `PUT /api/notes/:id` - Update note
- `DELETE /api/notes/:id` - Delete note

## 💡 Usage

1. **Register/Login**: Create an account or sign in
2. **Dashboard**: View all your notes in a responsive grid
3. **Create Note**: Click "+ New Note" to add a new note
4. **Edit Note**: Click the edit icon (✏️) on any note
5. **Delete Note**: Click the delete icon (🗑️) and confirm
6. **Logout**: Use the logout button in the header

## 🎨 Design Features

- **Modern Gradient Background**: Beautiful purple-blue gradient
- **Glass Morphism**: Frosted glass effects on headers
- **Smooth Animations**: Hover effects and transitions
- **Responsive Grid**: Adaptive note cards layout
- **Modal Dialogs**: Clean note editing interface
- **Typography**: Modern font stack for readability

## 🔒 Security Features

- Password hashing with bcrypt
- JWT token authentication
- Protected API routes
- Input validation and sanitization
- CORS enabled for cross-origin requests

## 📱 Responsive Design

- Mobile-first approach
- Flexible grid layouts
- Touch-friendly interactions
- Optimized for all screen sizes