// yo, we need these things to make stuff work
const express = require('express');
const path = require('path');
const recipes = require('./recipes');
const cors = require('cors');

// give it more juice to handle stuff
process.setMaxListeners(0);

const app = express();
const PORT = process.env.PORT || 3000;

// let the frontend talk to us, its cool
app.use(cors({
  origin: 'http://localhost:3001',
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization', 'Accept'],
  credentials: true
}));

// basic stuff we need
app.use(express.json());
app.use(express.static(path.join(__dirname, '../frontend-react/build')));

// lets see what people are doing
app.use((req, res, next) => {
    console.log(`${new Date().toISOString()} - ${req.method} ${req.url}`);
    next();
});

// when someone wants to find a recipe
app.get('/api/recipes/search', (req, res) => {
    try {
        const query = req.query.q?.toLowerCase() || '';
        console.log('Search query:', query);

        // look through all recipes and find the good ones
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
        console.error('oops, something went wrong:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

// get all the recipes, no filter
app.get('/api/recipes', (req, res) => {
    try {
        res.json(recipes);
    } catch (error) {
        console.error('uh oh, error getting recipes:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

// get just one recipe by its id
app.get('/api/recipes/:id', (req, res) => {
    try {
        const recipe = recipes.find(r => r.id === req.params.id);
        if (!recipe) {
            return res.status(404).json({ error: 'Recipe not found' });
        }
        res.json(recipe);
    } catch (error) {
        console.error('error getting recipe:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

// if something goes wrong, handle it nicely
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: 'Something went wrong!' });
});

// if they hit any other route, give them the react app
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend-react/build', 'index.html'));
});

// start the server and tell everyone its ready
const server = app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});

// handle when someone tries to shut us down nicely
process.on('SIGTERM', () => {
    console.log('SIGTERM received. Shutting down gracefully...');
    server.close(() => {
        process.exit(0);
    });
});

process.on('SIGINT', () => {
    console.log('SIGINT received. Shutting down gracefully...');
    server.close(() => {
        process.exit(0);
    });
});

// catch any random errors that might happen
process.on('uncaughtException', (err) => {
    console.error('Uncaught Exception:', err);
    server.close(() => {
        process.exit(1);
    });
});

// catch any promises that fail
process.on('unhandledRejection', (reason, promise) => {
    console.error('Unhandled Rejection at:', promise, 'reason:', reason);
    server.close(() => {
        process.exit(1);
    });
}); 