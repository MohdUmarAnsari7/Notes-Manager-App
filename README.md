# 📝 Notes Manager App

A full-stack note-taking application built with React, Node.js, Express, and MongoDB. Users can create accounts, securely login, and manage their personal notes with full CRUD operations.

![Notes Manager](https://img.shields.io/badge/Version-1.0.0-blue.svg)
![License](https://img.shields.io/badge/License-MIT-green.svg)
![Node](https://img.shields.io/badge/Node.js-18+-green.svg)
![React](https://img.shields.io/badge/React-18+-blue.svg)

## ✨ Features

- 🔐 **User Authentication** - Secure registration and login with JWT tokens
- 📝 **Note Management** - Create, read, update, and delete notes
- 🎨 **Modern UI** - Clean and responsive React interface
- ☁️ **Cloud Database** - MongoDB Atlas integration
- 🔒 **Secure** - Password hashing with bcrypt, JWT authentication
- 📱 **Responsive** - Works on desktop and mobile devices

## 🛠 Tech Stack

### Frontend
- **React** (v18+) with TypeScript
- **React Router** for navigation
- **Axios** for API calls
- **CSS3** for styling

### Backend
- **Node.js** (v18+)
- **Express.js** web framework
- **MongoDB** with Mongoose ODM
- **JWT** for authentication
- **bcryptjs** for password hashing

### Database
- **MongoDB Atlas** (Cloud Database)

## 🚀 Quick Start

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn
- MongoDB Atlas account

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/MohdUmarAnsarii/Notes-Manager-App.git
   cd Notes-Manager-App
   ```

2. **Setup Backend**
   ```bash
   cd backend
   npm install
   cp .env.example .env
   # Edit .env file with your MongoDB Atlas credentials
   npm start
   ```

3. **Setup Frontend**
   ```bash
   cd ../frontend
   npm install
   cp .env.example .env
   # Edit .env file with your backend URL
   npm start
   ```

4. **Open your browser**
   - Frontend: http://localhost:3000
   - Backend API: http://localhost:5000

## 🚀 Demo

You can test the app immediately with these demo credentials:
- **Email**: `testing01@example.com`
- **Password**: `Test@7860`

These credentials are displayed on the login page for easy access.

## 📋 Environment Variables

### Backend (.env)
```
PORT=5000
MONGODB_URI=mongodb+srv://YOUR_USERNAME:YOUR_PASSWORD@your-cluster.mongodb.net/notesapp
JWT_SECRET=your_super_secure_random_jwt_secret_key_here
```

### Frontend (.env)
```
REACT_APP_API_URL=http://localhost:5000/api
```

## 📁 Project Structure

```
Notes-Manager-App/
├── frontend/                 # React frontend application
│   ├── public/
│   ├── src/
│   │   ├── components/       # React components
│   │   ├── contexts/         # React context providers
│   │   ├── pages/           # Page components
│   │   ├── services/        # API services
│   │   └── App.tsx          # Main App component
│   └── package.json
├── backend/                  # Node.js backend API
│   ├── middleware/          # Express middleware
│   ├── models/              # Mongoose models
│   ├── routes/              # API routes
│   ├── server.js           # Main server file
│   └── package.json
└── README.md               # This file
```

## 🔐 API Endpoints

### Authentication
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - Login user

### Notes (Protected Routes)
- `GET /api/notes` - Get user's notes
- `POST /api/notes` - Create new note
- `PUT /api/notes/:id` - Update note
- `DELETE /api/notes/:id` - Delete note

## 🚀 Deployment

### Backend Deployment (Heroku/Railway/Render)
1. Create account on your preferred platform
2. Connect your GitHub repository
3. Set environment variables:
   - `MONGODB_URI`
   - `JWT_SECRET`
   - `NODE_ENV=production`
4. Deploy!

### Frontend Deployment (Netlify/Vercel)
1. Build the project: `npm run build`
2. Deploy the `build` folder
3. Set environment variable: `REACT_APP_API_URL`


## 🤝 Contributing

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👤 Author

**Umar Ansari**
- GitHub: [@MohdUmarAnsarii](https://github.com/MohdUmarAnsarii)

## 🙏 Acknowledgments

- MongoDB Atlas for cloud database hosting
- React team for the amazing frontend framework
- Express.js for the robust backend framework

---

⭐ **Star this repo if you find it helpful!**

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

## 🚀 Deployment

### Backend Deployment (Heroku/Railway)
1. Set environment variables
2. Connect to MongoDB Atlas
3. Deploy backend service

### Frontend Deployment (Vercel/Netlify)
1. Build the React app: `npm run build`
2. Deploy the build folder
3. Set API URL environment variable

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 👨‍💻 Developer

Developed as part of LC Corporate Internship Assignment

---

**Enjoy managing your notes! 📝✨**
