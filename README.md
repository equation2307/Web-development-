# MealMaster - Recipe Management System

A full-stack web application for managing and searching recipes.

## Features
- Search recipes by name, type, or ingredients
- Add recipes to meal plans
- View recipe details including cooking time and servings
- Modern UI with Material-UI components

## Tech Stack
- Frontend: React.js
- Backend: Node.js with Express
- Data Storage: In-memory JavaScript objects

## Prerequisites
- Node.js (v18.16.0 or higher)
- npm (Node Package Manager)
- Git

## Setup Instructions

1. Clone the repository:
```bash
git clone https://github.com/equation2307/Web-development-.git
cd Web-development-
```

2. Install backend dependencies:
```bash
cd backend
npm install
cd ..
```

3. Install frontend dependencies:
```bash
cd frontend-react
npm install --legacy-peer-deps
cd ..
```

Note: We use `--legacy-peer-deps` flag because there's a dependency conflict between React 18 and Material-UI v4. This flag allows the installation to proceed despite the conflict.

## Running the Project

1. Start the backend server:
```bash
# From the root directory
cd backend
npm start
```
The server will run at http://localhost:3000

2. Start the frontend development server:
```bash
# Open a new terminal
cd frontend-react
npm start
```
The frontend will run at http://localhost:3001

## API Endpoints

1. Get all recipes:
```
GET /api/recipes
```

2. Search recipes:
```
GET /api/recipes/search?q=<search_term>
```

3. Get a single recipe:
```
GET /api/recipes/:id
```

## Troubleshooting

If you encounter any issues:

1. Server being killed:
```bash
# Try running with increased memory limit
node --max-old-space-size=4096 server.js
```

2. Dependency conflicts:
```bash
# Clear npm cache and reinstall
npm cache clean --force
rm -rf node_modules
npm install
```

3. Port already in use:
```bash
# Find and kill the process using port 3000
lsof -i :3000
kill -9 <PID>
```

## Project Structure
```
Web-development-/
├── backend/            # Backend server
│   ├── server.js      # Express server
│   ├── recipes.js     # Recipe data
│   └── package.json   # Backend dependencies
├── frontend-react/    # React frontend
│   ├── src/
│   │   ├── components/ # React components
│   │   ├── pages/      # Page components
│   │   └── App.js      # Main App component
│   └── package.json    # Frontend dependencies
└── README.md          # Project documentation
```

## Contributing
Feel free to submit issues and enhancement requests!

## License
This project is licensed under the MIT License.
