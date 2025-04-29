# MealMaster - Recipe Management System

A full-stack web application for managing and searching recipes.

## Features
- Search recipes by name, type, or ingredients
- Add recipes to meal plans
- View recipe details including cooking time and servings
- Modern UI with Material-UI components

## Tech Stack
- Frontend: React.js with Material-UI
- Backend: Node.js with Express
- Data Storage: In-memory JavaScript objects

## Setup Instructions

1. Clone the repository:
```bash
git clone <your-repository-url>
cd meal-master
```

2. Install dependencies:
```bash
# Install backend dependencies
npm install

# Install frontend dependencies
cd frontend-react
npm install
cd ..
```

3. Start the development server:
```bash
# Start backend server
npm start

# In a new terminal, start frontend
cd frontend-react
npm start
```

4. Open your browser and navigate to:
```
http://localhost:3000
```

## Project Structure
```
meal-master/
├── server.js           # Backend server
├── recipes.js          # Recipe data
├── frontend-react/     # React frontend
│   ├── src/
│   │   ├── components/ # React components
│   │   ├── pages/      # Page components
│   │   └── App.js      # Main App component
│   └── package.json    # Frontend dependencies
└── package.json        # Backend dependencies
```
