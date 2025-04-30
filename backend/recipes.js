// here's all our yummy recipes
const recipes = [
    // morning food
    {
        id: 1,
        name: 'Classic Pancakes',
        cookingTime: '15',
        servings: '4',
        type: 'breakfast',
        ingredients: ['flour', 'milk', 'eggs', 'sugar', 'baking powder'],
        instructions: 'Mix dry ingredients, add wet ingredients, cook on griddle'
    },
    {
        id: 2,
        name: 'Greek Yogurt Parfait',
        cookingTime: '5',
        servings: '1',
        type: 'breakfast',
        ingredients: ['greek yogurt', 'honey', 'granola', 'mixed berries'],
        instructions: 'Layer yogurt, fruits, and granola in a glass'
    },
    // lunch stuff
    {
        id: 3,
        name: 'Chicken Caesar Salad',
        cookingTime: '20',
        servings: '2',
        type: 'lunch',
        ingredients: ['chicken breast', 'romaine lettuce', 'parmesan cheese', 'croutons', 'caesar dressing'],
        instructions: 'Grill chicken, chop lettuce, toss with dressing and toppings'
    },
    {
        id: 4,
        name: 'Vegetable Wrap',
        cookingTime: '10',
        servings: '1',
        type: 'lunch',
        ingredients: ['tortilla', 'hummus', 'cucumber', 'bell peppers', 'spinach'],
        instructions: 'Spread hummus on tortilla, add vegetables, roll and serve'
    },
    // dinner time
    {
        id: 5,
        name: 'Spaghetti Bolognese',
        cookingTime: '30',
        servings: '4',
        type: 'dinner',
        ingredients: ['spaghetti', 'ground beef', 'tomato sauce', 'onions', 'garlic'],
        instructions: 'Cook pasta, brown meat, simmer sauce, combine and serve'
    },
    {
        id: 6,
        name: 'Grilled Salmon',
        cookingTime: '15',
        servings: '2',
        type: 'dinner',
        ingredients: ['salmon fillets', 'lemon', 'olive oil', 'dill', 'salt'],
        instructions: 'Season salmon, grill until cooked through, serve with lemon'
    },
    // snack attack
    {
        id: 7,
        name: 'Trail Mix',
        cookingTime: '5',
        servings: '4',
        type: 'snack',
        ingredients: ['nuts', 'dried fruits', 'chocolate chips', 'seeds'],
        instructions: 'Mix all ingredients together in a bowl'
    },
    {
        id: 8,
        name: 'Fruit Smoothie',
        cookingTime: '5',
        servings: '2',
        type: 'snack',
        ingredients: ['banana', 'berries', 'yogurt', 'milk', 'honey'],
        instructions: 'Blend all ingredients until smooth'
    },
    // some more fancy stuff
    {
        id: '1',
        name: 'Spaghetti Carbonara',
        type: 'Italian',
        cookingTime: '30 minutes',
        ingredients: [
            '400g spaghetti',
            '200g pancetta',
            '4 large eggs',
            '100g Pecorino Romano cheese',
            '100g Parmigiano-Reggiano',
            'Black pepper',
            'Salt'
        ],
        instructions: [
            'Cook pasta according to package instructions',
            'Fry pancetta until crispy',
            'Mix eggs and cheese',
            'Combine all ingredients'
        ]
    },
    {
        id: '2',
        name: 'Chicken Curry',
        type: 'Indian',
        cookingTime: '45 minutes',
        ingredients: [
            '500g chicken',
            '2 onions',
            '3 tomatoes',
            'Curry powder',
            'Garam masala',
            'Coconut milk',
            'Oil'
        ],
        instructions: [
            'Brown the chicken',
            'Sauté onions and spices',
            'Add tomatoes and coconut milk',
            'Simmer until chicken is cooked'
        ]
    },
    {
        id: '3',
        name: 'Caesar Salad',
        type: 'American',
        cookingTime: '15 minutes',
        ingredients: [
            'Romaine lettuce',
            'Croutons',
            'Parmesan cheese',
            'Caesar dressing',
            'Chicken breast',
            'Anchovies'
        ],
        instructions: [
            'Wash and chop lettuce',
            'Grill chicken',
            'Combine all ingredients',
            'Toss with dressing'
        ]
    }
];

// share the recipes with everyone
module.exports = recipes; 