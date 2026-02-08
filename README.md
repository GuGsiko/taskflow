# TaskFlow

TaskFlow is a minimal full-stack task management application built to
practice modern frontend and backend development concepts.

The project is developed incrementally with a strong focus on clean
architecture, understanding request flow, and real API integration.

---

## Tech Stack

### Frontend
- React
- Vite
- Tailwind CSS

### Backend
- Node.js
- Express
- REST API

---

## Features

### Frontend
- Add tasks
- Delete tasks
- Mark tasks as completed
- Filter tasks (All / Active / Completed)
- Active tasks counter
- Clear completed tasks
- Persistent storage using browser localStorage
- Clean, minimal UI
- Component-based architecture

### Backend
- RESTful API architecture
- GET /api/tasks
- POST /api/tasks
- Input validation
- Proper HTTP status codes (200, 201, 400)
- Layered structure (routes / controllers / services)
- Centralized error handling

---

## Project Structure

taskflow/
├── taskflow-frontend/ # React + Vite frontend
├── taskflow-backend/ # Node.js + Express API
└── README.md

---

## Learning Goals

- Understand Express request lifecycle
- Practice REST API design
- Separate concerns using layered architecture
- Connect frontend to a real backend
- Build confidence for technical interviews

---

## Current Status

🚧 In progress

- Backend API implemented with in-memory data
- Frontend currently uses localStorage
- Backend integration planned next

---

## Next Steps

- Connect frontend to backend API
- Implement PUT / DELETE endpoints
- Replace localStorage with backend persistence
- Add environment configuration
