# ✨ InkSpace — Community Blog Platform

InkSpace is a modern full-stack community blogging platform where users can create, publish, edit, delete, and explore stories.

The project uses **React + Vite** for the frontend and **Node.js + Express + MongoDB** for the backend.

---

## 🚀 Features

### 👤 Authentication
- User registration
- User login
- JWT authentication
- Secure password hashing with bcrypt
- Protected routes
- Logout functionality

### 📝 Blog Management
- Create new stories
- View all published stories
- Open and read individual stories
- Edit your own stories
- Delete your own stories
- Author information
- Automatic reading-time calculation
- Word counter while writing

### 🔎 Search
- Search stories by title
- Search by story content
- Search by author name
- Displays the number of matching stories

### 🎨 Modern UI
- Clean and responsive design
- Modern navigation bar
- Hero section
- Featured story section
- Blog cards
- Search panel
- Profile panel
- Write/Edit story modal
- Story details modal
- Responsive mobile layout
- Smooth scrolling
- Interactive buttons and hover effects

---

## 🛠️ Technologies Used

### Frontend
- React
- Vite
- JavaScript
- CSS
- Lucide React Icons

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT
- bcryptjs
- CORS
- dotenv

---

## 📁 Project Structure

```text
InkSpace/
│
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── App.jsx
│   │   ├── App.css
│   │   └── ...
│   │
│   ├── index.html
│   ├── package.json
│   ├── package-lock.json
│   ├── vite.config.js
│   ├── eslint.config.js
│   └── README.md
│
├── backend/
│   ├── middleware/
│   │   └── authMiddleware.js
│   │
│   ├── models/
│   │   ├── User.js
│   │   └── Post.js
│   │
│   ├── routes/
│   │   ├── authRoutes.js
│   │   └── postRoutes.js
│   │
│   ├── server.js
│   ├── package.json
│   └── package-lock.json
│
└── README.md
