# Real-Time Chat App

A full-stack real-time chat application built with the MERN stack (MongoDB, Express, React, Node.js).

## Features

- Real-time messaging
- User authentication (JWT)
- Responsive UI
- Backend API with Express & Node.js
- Frontend with React & Vite

## Tech Stack

### Frontend
- **React** (v19)
- **Vite**
- **TailwindCSS** (Implied by project type, usually standard with Vite/React recent setups, though not explicitly in package.json devDeps, likely initialized with it or using CSS file directly. If not, it's vanilla/custom CSS).
- **Stream Chat** (Backend dependency noted, likely used on frontend too or via API)

### Backend
- **Node.js**
- **Express.js**
- **MongoDB** (with Mongoose)
- **JWT** (JSON Web Tokens) for authentication
- **Bcryptjs** for password hashing
- **Stream Chat** API integration

## Project Structure

```
Real-Time-Chat-App/
├── Backend/        # Server-side code
│   ├── src/        # Source files
│   └── package.json
├── Frontend/       # Client-side code
│   ├── src/        # Source files
│   └── package.json
└── README.md
```

## Getting Started

### Prerequisites

- Node.js installed
- MongoDB installed or a MongoDB Atlas URI

### Installation

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd Real-Time-Chat-App
   ```

2. **Backend Setup:**
   ```bash
   cd Backend
   npm install
   # Create a .env file in the Backend directory and add your environment variables (PORT, MONGODB_URI, JWT_SECRET, etc.)
   npm run dev
   ```

3. **Frontend Setup:**
   Open a new terminal.
   ```bash
   cd Frontend
   npm install
   npm run dev
   ```

## Scripts

- **Backend**:
  - `npm run dev`: Runs the server with Nodemon.
  - `npm start`: Runs the server with Node.

- **Frontend**:
  - `npm run dev`: Starts the Vite development server.
  - `npm run build`: Builds the app for production.
