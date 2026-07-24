# 🚀 AI-Powered NGO Learning Management System

![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=next.js&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Express](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-336791?style=for-the-badge&logo=postgresql&logoColor=white)
![Prisma](https://img.shields.io/badge/Prisma-2D3748?style=for-the-badge&logo=prisma)
![TailwindCSS](https://img.shields.io/badge/Tailwind-38B2AC?style=for-the-badge&logo=tailwind-css)
![JWT](https://img.shields.io/badge/JWT-black?style=for-the-badge&logo=jsonwebtokens)
![Groq](https://img.shields.io/badge/Groq-AI-blue?style=for-the-badge)

A full-stack Learning Management System (LMS) built for NGOs to manage training programs, student enrollments, certificates, and AI-powered skill gap analysis.
---

## 🌐 Live Demo

**Frontend:** https://ai-ngo-lms.onrender.com

**Backend API:** https://ai-ngo-lms-production.up.railway.app

---

## ✨ Features

### 🔐 Authentication & Authorization
- Secure JWT Authentication
- Role-Based Access Control (Student & NGO)
- Login & Registration
- Protected Routes

### 👨‍🎓 Student Module
- Student Dashboard
- Browse Available Programs
- Apply for NGO Programs
- Track Applications
- AI Skill Gap Analysis
- View Certificates

### 🏢 NGO Module
- NGO Dashboard
- Create Training Programs
- Edit & Delete Programs
- Manage Student Applications
- View Enrollments

### 🤖 AI Skill Gap Analyzer
- Analyze current skills
- Compare with desired career role
- AI-generated learning roadmap
- Personalized improvement suggestions
- Powered by Groq LLM

### 📜 Certificate Management
- View Earned Certificates


---

# 🛠 Tech Stack

## Frontend
- Next.js
- React
- TypeScript
- Tailwind CSS
- Axios

## Backend
- Node.js
- Express.js
- Prisma ORM
- JWT Authentication
- bcrypt

## Database
- PostgreSQL

## AI
- Groq API

## Deployment
- Render (Frontend)
- Railway (Backend)

---

# 📁 Project Structure

```
ai-ngo-lms/
│
├── frontend/
│   ├── src/
│   ├── app/
│   ├── components/
│   └── services/
│
├── backend/
│   ├── src/
│   │   ├── controllers/
│   │   ├── middleware/
│   │   ├── routes/
│   │   ├── services/
│   │   └── utils/
│   │
│   └── prisma/
│
├── screenshots/
│
└── README.md
```

---

# 🏗 System Architecture

```
                    +----------------------+
                    |     Next.js Client   |
                    +----------+-----------+
                               |
                               | REST API
                               |
                    +----------v-----------+
                    |    Express Server    |
                    +----------+-----------+
                               |
          +--------------------+--------------------+
          |                                         |
          |                                         |
+---------v---------+                   +-----------v-----------+
| PostgreSQL DB     |                   |   Groq AI API         |
| (Prisma ORM)      |                   | Skill Gap Analysis    |
+-------------------+                   +-----------------------+
```

---

# 🚀 Getting Started

## Clone Repository

```bash
git clone https://github.com/rakshika797/ai-ngo-lms.git

cd ai-ngo-lms
```

---

## Backend Setup

```bash
cd backend

npm install

npm run dev
```

---

## Frontend Setup

```bash
cd frontend

npm install

npm run dev
```

---

# 🔑 Environment Variables

## Backend (.env)

```env
DATABASE_URL=your_postgresql_database_url

JWT_SECRET=your_super_secret_jwt_key

GROQ_API_KEY=your_groq_api_key

FRONTEND_URL=http://localhost:3000
```

## Frontend (.env.local)

```env
NEXT_PUBLIC_API_URL=http://localhost:5000/api
```

---

# 📡 API Endpoints

## Authentication

| Method | Endpoint |
|---------|----------|
| POST | /api/auth/register |
| POST | /api/auth/login |

---

## Programs

| Method | Endpoint |
|---------|----------|
| GET | /api/programs |
| POST | /api/programs |
| PUT | /api/programs/:id |
| DELETE | /api/programs/:id |

---

## Applications

| Method | Endpoint |
|---------|----------|
| POST | /api/applications |
| GET | /api/applications |

---

## AI

| Method | Endpoint |
|---------|----------|
| POST | /api/ai/skill-gap |

---

# 📸 Screenshots

## Login Page

<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/e3fb9112-eb47-42a4-8959-7a5be3d7066a" />

---

## Student Dashboard
<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/0582383a-eb65-4760-a367-62139da6638c" />


---

## NGO Dashboard
<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/1979e77a-c5c3-428c-a92d-c525cb9e106c" />


---

## AI Skill Gap Analyzer
<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/ca451dab-3472-4366-8e87-c0cd099498e8" />


---

## Certificate Page
<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/a6ff7b2e-4ea3-4197-8e45-8a402dcad2d3" />



---

# 📈 Future Improvements

- Email notifications for application updates
- Real-time notifications using WebSockets
- Resume analysis with AI feedback
- AI-powered interview preparation assistant
- Course progress tracking and analytics
- Cloud storage integration for certificates
---

# 📌 Key Highlights

- Full Stack Web Application
- Production Deployment
- RESTful API Architecture
- PostgreSQL Database
- Prisma ORM
- JWT Authentication
- Role-Based Authorization
- AI Integration using Groq
- Responsive User Interface
- Secure API Design

---

# 👨‍💻 Author

**Rakshika sharma**

GitHub: https://github.com/rakshika797

LinkedIn: https://www.linkedin.com/in/rakshika-sharma-b115472a2/

---
## 🎯 Why this Project?

Many NGOs struggle to manage student training programs and provide personalized learning guidance.

This project solves that by offering a centralized Learning Management System with role-based access and an AI-powered Skill Gap Analyzer that recommends learning paths based on students' current skills and career goals.

# ⭐ Support

If you found this project helpful, consider giving it a ⭐ on GitHub!

---

