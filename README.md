# 🛒 Resell Hub

**Resell Hub** is a full-stack web application for buying and selling pre-owned products.  
It is built with **Django REST Framework** for the backend, **React.js** for the frontend, and **WebSockets (Django Channels)** for real-time buyer-seller chat.

---

## 🚀 Features

### 👤 User Management
- User registration & login (JWT authentication)
- User dashboard with:
  - Profile details & editing
  - Wishlist management
  - User's products (add/remove)
  - User's chat conversations
  - Logout

### 📦 Product Management
- Add, edit, and delete product listings
- Multiple images per product
- Filter products by location, price, category, and condition
- Search products by title, description, or category
- Product detail page with:
  - Title, price, description, category, location
  - Multiple images
  - **Buttons** → Buy, Chat with Seller, Add to Wishlist

### ❤️ Wishlist
- Add or remove products from wishlist
- View all saved products

### 💬 Real-Time Chat
- One-to-one buyer-seller chat per product
- Instant message delivery via WebSockets
- Chat history stored in the database

### 🛠 Admin Panel
- Manage users, products, categories
- Remove inappropriate listings
- View reports (optional)

---

## 🏗 Tech Stack

### **Backend**
- [Django](https://www.djangoproject.com/)
- [Django REST Framework](https://www.django-rest-framework.org/)
- [Django Channels](https://channels.readthedocs.io/en/stable/) for WebSockets
- PostgreSQL / MySQL (choose your DB)
- JWT Authentication with `djangorestframework-simplejwt`
- `django-filter` for advanced filtering

### **Frontend**
- [React.js](https://react.dev/)
- Axios for API requests
- React Router for navigation
- Tailwind CSS / Material-UI for styling
- Socket.IO Client / WebSocket API for real-time chat

### **Other Tools**
- Redis for channel layer
- Cloud storage for images (optional: AWS S3)
- Docker (optional for deployment)

---

## 📂 Project Structure

