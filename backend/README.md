# Recipe App Backend

This is the backend server for the recipe application. It provides API endpoints for managing and searching recipes.

## Setup

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

The server will start on http://localhost:3000

## API Endpoints

### GET /api/recipes/search
Search for recipes by name, type, or ingredients.

Query parameters:
- `q`: Search term (optional)

Example:
```
GET /api/recipes/search?q=chicken
```

### GET /api/recipes
Get all recipes.

Example:
```
GET /api/recipes
```

## Error Handling

The server includes error handling for:
- Invalid requests
- Server errors
- CORS issues

## Development

The server uses:
- Express.js for the web server
- CORS for cross-origin resource sharing
- Nodemon for development auto-reloading 