const express = require('express');
const path = require('path');
const recipes = require('./recipes');

// Increase memory limit
process.setMaxListeners(0);

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(express.static(path.join(__dirname, 'frontend-react/build')));

// Logging middleware
app.use((req, res, next) => {
    console.log(`${new Date().toISOString()} - ${req.method} ${req.url}`);
    next();
});

// API endpoint for recipe search
app.get('/api/recipes/search', (req, res) => {
    try {
        const query = req.query.q?.toLowerCase() || '';
        console.log('Search query:', query);

        const foundRecipes = recipes.filter(recipe => {
            const searchInName = recipe.name.toLowerCase().includes(query);
            const searchInType = recipe.type.toLowerCase().includes(query);
            const searchInIngredients = recipe.ingredients.some(ingredient => 
                ingredient.toLowerCase().includes(query)
            );
            return searchInName || searchInType || searchInIngredients;
        });

        console.log(`Found ${foundRecipes.length} recipes matching "${query}"`);
        res.json(foundRecipes);
    } catch (error) {
        console.error('Error searching recipes:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

// Catch-all route to serve the React app
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'frontend-react/build', 'index.html'));
});

// Handle process termination
process.on('SIGTERM', () => {
    console.log('SIGTERM received. Shutting down gracefully...');
    process.exit(0);
});

process.on('SIGINT', () => {
    console.log('SIGINT received. Shutting down gracefully...');
    process.exit(0);
});

// Start server
const server = app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});

// Handle uncaught exceptions
process.on('uncaughtException', (err) => {
    console.error('Uncaught Exception:', err);
    server.close(() => {
        process.exit(1);
    });
});

// Handle unhandled promise rejections
process.on('unhandledRejection', (reason, promise) => {
    console.error('Unhandled Rejection at:', promise, 'reason:', reason);
    server.close(() => {
        process.exit(1);
    });
}); 