# 📚 MERN Stack Online Bookstore

A sophisticated, full-stack e-commerce application for an online bookstore built using the **MERN Stack** (MongoDB, Express, React, Node.js). This project features a custom design implementation using **Stitch** and **Antigravity**, integrated with **Firebase Auth** and **Redux Toolkit**.

## 🚀 Live Demo

*   **Frontend:** [https://book-store-frontend-bay-five.vercel.app/](https://book-store-frontend-bay-five.vercel.app/)
*   **Admin Dashboard:** [https://book-store-frontend-bay-five.vercel.app/admin](https://book-store-frontend-bay-five.vercel.app/admin)

---

## 🛡️ Admin Access (Test Credentials)

The administrative side is protected by JWT authentication. Use the following credentials to test the dashboard:

*   **URL:** `/admin`
*   **Username:** `admin`
*   **Password:** `123456`

---

## ✨ Key Features

### 🎨 Design & UI/UX
*   **Stitch Design:** Implemented for a consistent, scalable component architecture.
*   **Antigravity:** Utilized for modern, fluid layouts and unique UI interactions.
*   **Responsive UI:** Fully optimized for mobile, tablet, and desktop experiences.
*   **Interactive Sliders:** Smooth book browsing using **Swiper.js**.

### 🛒 Customer Features
*   **Book Discovery:** Filter books by category and a real-time search functionality.
*   **Cart Management:** Add/Remove items with state persistence via **Redux Toolkit**.
*   **Secure Auth:** User registration and login powered by **Firebase** (Google Social Login included).
*   **Order System:** Seamless checkout process with order history tracking.

### 📊 Admin Management
*   **Inventory Control:** Full CRUD functionality to add, update, and delete books.
*   **Data Analytics:** Visual sales stats and trending data via **Chart.js**.
*   **Protected Routes:** Backend and Frontend security using **JWT (JSON Web Tokens)**.

---

## 🛠️ Tech Stack

**Frontend**
*   **React.js** (Vite)
*   **Stitch & Antigravity** (Design & Layout)
*   **Redux Toolkit** (State Management & API Fetching)
*   **Tailwind CSS** (Styling)

**Backend**
*   **Node.js & Express.js** (API Server)
*   **MongoDB & Mongoose** (Database & Modeling)
*   **JWT & Bcrypt** (Security & Password Hashing)

**Services**
*   **Firebase** (Authentication)
*   **Vercel** (Hosting)

---

## ⚙️ Installation & Setup

### 1. Clone the repository
```bash
git clone [https://github.com/your-username/bookstore-mern.git](https://github.com/your-username/bookstore-mern.git)
cd bookstore-mern

2. Backend Configuration
Navigate to the backend directory: cd backend

Install dependencies: npm install

Create a .env file and add your credentials:

Code snippet
DB_URL=your_mongodb_connection_string
JWT_SECRET_KEY=your_jwt_secret
PORT=5000
Start the server: npm run dev

3. Frontend Configuration
Navigate to the frontend directory: cd ../frontend

Install dependencies: npm install

Create a .env.local file for Firebase:

Code snippet
VITE_API_KEY=your_firebase_key
VITE_AUTH_DOMAIN=your_auth_domain
VITE_PROJECT_ID=your_project_id
VITE_STORAGE_BUCKET=your_storage_bucket
VITE_MESSAGING_SENDER_ID=your_sender_id
VITE_APP_ID=your_app_id
Start the app: npm run dev
