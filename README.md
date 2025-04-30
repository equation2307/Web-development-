# MealMaster - Recipe Management System

A full-stack web application for managing and searching recipes, built with React and Node.js.

## Project Structure

```
meal-master/
├── backend/               # Backend server files
│   ├── server.js         # Express server setup
│   ├── recipes.js        # Recipe data
│   └── package.json      # Backend dependencies
├── frontend-react/       # React frontend
│   ├── src/             # Source files
│   ├── public/          # Static files
│   └── package.json     # Frontend dependencies
└── README.md            # This file
```

## Features

- Search recipes by name, type, or ingredients
- View detailed recipe information
- Modern UI with Material-UI components
- Responsive design for all devices

## Setup Instructions

1. Clone the repository:
```bash
git clone https://github.com/equation2307/Web-development-.git
cd Web-development-
```

2. Install backend dependencies:
```bash
npm install
```

3. Install frontend dependencies:
```bash
cd frontend-react
npm install
```

4. Start the backend server (in the root directory):
```bash
node server.js
```

5. Start the frontend development server (in a new terminal):
```bash
cd frontend-react
npm start
```

The application will be available at:
- Frontend: http://localhost:3001
- Backend API: http://localhost:3000

## API Endpoints

- `GET /api/recipes/search?q=query` - Search recipes
- `GET /api/recipes` - Get all recipes
- `GET /api/recipes/:id` - Get a specific recipe

## Tech Stack

- Frontend: React.js 
- Backend: Node.js with Express
- Data Storage: In-memory JavaScript objects
- Development: npm for package management


