# 🛒 Nexura - Kubernetes-Based E-Commerce Microservices

A modern cloud-native e-commerce platform built using a microservices architecture with Docker and Kubernetes.

> 🚧 This project is currently under active development as part of an IBM SkillsBuild Internship project focused on Cloud Computing, Docker, Kubernetes, DevOps, and Microservices.

---

# 📌 Project Overview

Nexura is a scalable e-commerce platform designed using the Microservices Architecture. Instead of having one large backend application, every business functionality is separated into independent services that communicate through REST APIs.

The project demonstrates industry-standard software engineering practices including:

- Microservices Architecture
- Containerization using Docker
- Container Orchestration using Kubernetes
- API Gateway
- Independent Deployment
- Service Discovery
- CI/CD Ready Structure
- MongoDB Database Integration
- Cloud Deployment (Upcoming)

---

# 🎯 Project Goals

The objective of this project is to learn and implement:

- Docker Containerization
- Kubernetes Orchestration
- Scalable Microservices
- REST API Development
- Database Management
- Cloud Native Application Design
- DevOps Best Practices

---

# 🏗️ Current Architecture

```
                    Client
                       │
                Frontend (HTML/CSS/JS)
                       │
        ┌──────────────┼──────────────┐
        │                             │
 User Service                  Product Service
        │                             │
        └──────────────┬──────────────┘
                       │
                    MongoDB
```

Future Architecture

```
                       Internet
                           │
                    Ingress Controller
                           │
                     API Gateway
                           │
    ┌──────────────┬──────────────┬──────────────┐
    │              │              │              │
 User Service  Product Service Order Service Payment Service
    │              │              │              │
    └──────────────┴──────────────┴──────────────┘
                           │
                        MongoDB
```

---

# 🛠️ Tech Stack

## Frontend

- HTML5
- CSS3
- JavaScript

## Backend

- Node.js
- Express.js

## Database

- MongoDB
- Mongoose

## DevOps

- Docker
- Docker Compose
- Kubernetes (In Progress)

## Tools

- Git
- GitHub
- VS Code
- Postman

---

# 📂 Project Structure

```
Nexura-ecommerce/

│
├── frontend/
│
├── services/
│   ├── user-service/
│   ├── product-service/
│   ├── order-service (Upcoming)
│   ├── payment-service (Upcoming)
│
├── kubernetes/
│   ├── deployments/
│   ├── services/
│   ├── ingress/
│
├── docker-compose.yml
├── README.md
└── .gitignore
```

---

# ✅ Features Completed

## Frontend

- Responsive Landing Page
- Navigation Bar
- Hero Section
- Featured Products
- Product Cards
- Shopping UI
- Product Details Layout
- Responsive Design

---

## User Service

- Express Server Setup
- MongoDB Connection
- User Registration API
- User Login API
- Password Encryption
- JWT Authentication
- Authentication Middleware

---

## Product Service

- Express Server Setup
- MongoDB Integration
- Product Schema
- Product CRUD APIs
- Product Controller
- Product Routes
- Sample Product Data

---

## Backend

- REST API Architecture
- Modular Folder Structure
- Environment Configuration
- Error Handling
- Middleware Setup

---

## DevOps

- Docker Installed
- Docker Images Created
- Docker Containers Tested
- Dockerfile Created
- Docker Compose Learning Completed

---

# 🚧 Features Under Development

- Shopping Cart Service
- Wishlist
- Search API
- Category Management
- Order Service
- Payment Service
- Inventory Service
- Review System
- Admin Dashboard
- Authentication Improvements
- API Gateway

---

# ☸ Kubernetes Progress

Current Work

- Learning Kubernetes Concepts
- Containerizing Microservices
- Creating Docker Images
- Preparing Deployment Files

Upcoming

- Kubernetes Pods
- Deployments
- ReplicaSets
- Services
- ConfigMaps
- Secrets
- Persistent Volumes
- Ingress Controller
- Horizontal Pod Autoscaling
- Rolling Updates
- Self Healing
- Load Balancing

---

# 🐳 Docker Progress

Completed

- Docker Installation
- Docker Images
- Docker Containers
- Dockerfile Creation
- Docker Basics

Upcoming

- Docker Compose
- Multi-stage Builds
- Production Images
- Image Optimization

---

# 📌 API Endpoints

## User Service

| Method | Endpoint | Description |
|---------|----------|-------------|
| POST | /register | Register User |
| POST | /login | Login User |

---

## Product Service

| Method | Endpoint | Description |
|---------|----------|-------------|
| GET | /products | Get All Products |
| GET | /products/:id | Get Product |
| POST | /products | Add Product |
| PUT | /products/:id | Update Product |
| DELETE | /products/:id | Delete Product |

---

# 🚀 How to Run

## Clone Repository

```bash
git clone https://github.com/Kushal08-04/Nexura-Ecommerce.git
```

## Install Dependencies

### User Service

```bash
cd services/user-service
npm install
```

### Product Service

```bash
cd services/product-service
npm install
```

---

## Configure Environment

Create a `.env` file inside each service.

Example:

```env
PORT=5001
MONGO_URI=mongodb://localhost:27017/nexura
JWT_SECRET=your_secret_key
```

---

## Start Services

```bash
npm run dev
```

---

# 🐳 Docker (Upcoming)

```bash
docker build -t user-service .
docker build -t product-service .

docker-compose up
```

---

# ☸ Kubernetes (Upcoming)

```bash
kubectl apply -f kubernetes/
```

---

# 📈 Project Roadmap

- [x] Frontend UI
- [x] User Service
- [x] Product Service
- [x] MongoDB Integration
- [x] Docker Basics
- [ ] Shopping Cart Service
- [ ] Order Service
- [ ] Payment Service
- [ ] Inventory Service
- [ ] API Gateway
- [ ] Docker Compose
- [ ] Kubernetes Deployment
- [ ] ConfigMaps
- [ ] Secrets
- [ ] Ingress
- [ ] Horizontal Pod Autoscaler
- [ ] CI/CD Pipeline
- [ ] Cloud Deployment
- [ ] Monitoring
- [ ] Logging
- [ ] Production Deployment

---

# 🎓 Learning Outcomes

This project demonstrates practical implementation of:

- Microservices Architecture
- REST APIs
- MongoDB
- Docker
- Kubernetes
- DevOps
- Cloud Computing
- Containerization
- Service Communication
- Scalable Application Design

---

# 👨‍💻 Author

**Kushal Chaudhary**

B.Tech CSE (Data Science & Cloud Computing)

IBM SkillsBuild Internship Project

GitHub: https://github.com/Kushal08-04

---

# 📄 License

This project is developed for educational and learning purposes under the IBM SkillsBuild Internship Program.