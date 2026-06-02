# 🛒 E-Commerce Product REST API (In-Memory)

[![Deployed on Render](https://img.shields.io/badge/Deployed%20on-Render-success?style=for-the-badge&logo=render)](https://backend-assignment2-x7jc.onrender.com)
[![Postman Docs](https://img.shields.io/badge/Postman-API_Docs-orange?style=for-the-badge&logo=postman)](https://documenter.getpostman.com/view/50839186/2sBXcGFL9z)

## 📌 Project Overview
This project is a RESTful API built using **Express.js** that manages product listings for an e-commerce platform using an in-memory JSON database. The API supports `GET`, `POST`, and `PUT` operations and follows strict REST principles including proper route design and correct HTTP status codes.

> *No external database is used — all data is stored in a local JSON array inside the project.*

---

## 📖 API Documentation
Explore the detailed API endpoints, request payloads, and response examples using our interactive Postman documentation:

👉 **[View Postman API Documentation](https://documenter.getpostman.com/view/50839186/2sBXcGFL9z)**

---

## 🎯 Objective
- Build a robust REST API using **Express.js**
- Implement `GET`, `POST`, and `PUT` routes
- Utilize both static and dynamic routes
- Follow REST principles rigorously
- Return proper HTTP status codes
- Store data in an in-memory JSON array

---

## 🛠 Tech Stack
- **Node.js**
- **Express.js**
- **CORS**
- **JavaScript (ES6)**

---

## 📂 Implemented Routes

### 🔹 GET Routes
| Endpoint | Description | Status Code |
|----------|-------------|-------------|
| `GET /products` | Returns all product records. | `200 OK` |
| `GET /products/:id` | Returns specific product details. *(Dynamic Route)* | `200 OK` / `404 Not Found` |
| `GET /products/category/:categoryName` | Returns all products from a specified category (case-insensitive). | `200 OK` |

### 🔹 POST Route
| Endpoint | Description | Status Code |
|----------|-------------|-------------|
| `POST /products` | Adds a new product to the system. ID is auto-generated. | `201 Created` |

### 🔹 PUT Routes
| Endpoint | Description | Status Code |
|----------|-------------|-------------|
| `PUT /products/:id` | Replaces the entire product except its ID. | `200 OK` / `404 Not Found` |
| `PUT /products/stock/:id` | Updates only the `stock` field of a product. | `200 OK` / `404 Not Found` |
| `PUT /products/price/:id` | Updates only the `price` field of a product. | `200 OK` / `404 Not Found` |

---

## 🌍 Sample API URLs (Deployed)
You can test the deployed API using these sample endpoints:

- **Get All Products:** [https://backend-assignment2-x7jc.onrender.com/products](https://backend-assignment2-x7jc.onrender.com/products)
- **Get Product by ID:** [https://backend-assignment2-x7jc.onrender.com/products/1](https://backend-assignment2-x7jc.onrender.com/products/1)
- **Get Products by Category:** [https://backend-assignment2-x7jc.onrender.com/products/category/Electronics](https://backend-assignment2-x7jc.onrender.com/products/category/Electronics)
- **Update Stock (PUT):** `https://backend-assignment2-x7jc.onrender.com/products/stock/2`
- **Update Price (PUT):** `https://backend-assignment2-x7jc.onrender.com/products/price/3`

---

## 💻 Steps to Run Locally

1. **Clone the repository:**
   ```bash
   git clone https://github.com/priyabratasahoo780/backend_assignment2.git
   ```
2. **Navigate into the project folder:**
   ```bash
   cd backend_assignment2
   ```
3. **Install dependencies:**
   ```bash
   npm install
   ```
4. **Start the server:**
   ```bash
   npm start
   ```

**Server will run at:** `http://localhost:3000`

---

## 🚀 Deployment

This project is live and deployed on **Render**.

🔗 **Deployed Link:** [https://backend-assignment2-x7jc.onrender.com](https://backend-assignment2-x7jc.onrender.com)

---

## 📁 Project Structure

```text
backend_assignment2/
│
├── index.js             # Main server file
├── package.json         # Project configuration
├── package-lock.json    # Dependency tree
└── README.md            # Project documentation
```

---

## 📡 HTTP Status Codes Used

| Status Code | Meaning |
|:---:|---|
| **`200 OK`** | Request successful |
| **`201 Created`** | Resource successfully created |
| **`404 Not Found`** | Resource does not exist |

---

## 🧠 Key Concepts Implemented
- **RESTful API design**
- **Static and Dynamic routes**
- **Route parameters (`req.params`)**
- **Request body handling (`req.body`)**
- **Array methods (`find`, `filter`, `findIndex`)**
- **Proper HTTP status codes**
- **Middleware usage (`express.json`, `cors`)**
- **In-memory data management**

---
<div align="center">
  <i>Built with ❤️ for Backend Development</i>
</div>
