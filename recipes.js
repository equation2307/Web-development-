const recipes = [
    // Breakfast Recipes
    {
        id: '1',
        name: 'Classic Pancakes',
        cookingTime: 20,
        servings: 4,
        type: 'breakfast',
        ingredients: [
            '1 cup all-purpose flour',
            '2 tablespoons sugar',
            '2 teaspoons baking powder',
            '1/2 teaspoon salt',
            '1 cup milk',
            '1 large egg',
            '2 tablespoons melted butter'
        ],
        instructions: 'Mix dry ingredients. Add wet ingredients. Cook on griddle.'
    },
    {
        id: '2',
        name: 'Greek Yogurt Parfait',
        cookingTime: 10,
        servings: 2,
        type: 'breakfast',
        ingredients: [
            '2 cups Greek yogurt',
            '1 cup granola',
            '1 cup mixed berries',
            '2 tablespoons honey'
        ],
        instructions: 'Layer yogurt, granola, and berries. Drizzle with honey.'
    },
    // Lunch Recipes
    {
        id: '3',
        name: 'Chicken Caesar Salad',
        cookingTime: 25,
        servings: 2,
        type: 'lunch',
        ingredients: [
            '2 chicken breasts',
            '1 romaine lettuce',
            '1/2 cup croutons',
            '1/4 cup parmesan cheese',
            '1/2 cup Caesar dressing'
        ],
        instructions: 'Grill chicken. Toss lettuce with dressing. Top with chicken, croutons, and cheese.'
    },
    {
        id: '4',
        name: 'Vegetable Wrap',
        cookingTime: 15,
        servings: 2,
        type: 'lunch',
        ingredients: [
            '2 tortillas',
            '1 cup mixed vegetables',
            '1/4 cup hummus',
            '1/4 cup feta cheese'
        ],
        instructions: 'Spread hummus on tortillas. Add vegetables and cheese. Roll and serve.'
    },
    // Dinner Recipes
    {
        id: '5',
        name: 'Spaghetti Bolognese',
        cookingTime: 45,
        servings: 4,
        type: 'dinner',
        ingredients: [
            '1 lb ground beef',
            '1 onion',
            '2 cloves garlic',
            '1 can tomato sauce',
            '1 lb spaghetti',
            '1/4 cup parmesan cheese'
        ],
        instructions: 'Brown beef. Add onion and garlic. Add tomato sauce. Serve over cooked pasta.'
    },
    {
        id: '6',
        name: 'Grilled Salmon',
        cookingTime: 20,
        servings: 2,
        type: 'dinner',
        ingredients: [
            '2 salmon fillets',
            '2 tablespoons olive oil',
            '1 lemon',
            'salt and pepper'
        ],
        instructions: 'Season salmon. Grill until cooked through. Serve with lemon.'
    },
    // Snack Recipes
    {
        id: '7',
        name: 'Trail Mix',
        cookingTime: 5,
        servings: 4,
        type: 'snack',
        ingredients: [
            '1 cup nuts',
            '1 cup dried fruit',
            '1/2 cup chocolate chips'
        ],
        instructions: 'Mix all ingredients together.'
    },
    {
        id: '8',
        name: 'Fruit Smoothie',
        cookingTime: 10,
        servings: 2,
        type: 'snack',
        ingredients: [
            '2 cups mixed fruit',
            '1 cup yogurt',
            '1 cup milk',
            '1 tablespoon honey'
        ],
        instructions: 'Blend all ingredients until smooth.'
    }
];

module.exports = recipes; 