import React from 'react';
import { Container, Typography, Box } from '@mui/material';

function Home() {
  return (
    <Container>
      <Box sx={{ mt: 4 }}>
        <Typography variant="h4" gutterBottom>
          Welcome to MealMaster
        </Typography>
        <Typography variant="body1">
          Plan your meals, discover recipes, and organize your shopping list all in one place.
        </Typography>
      </Box>
    </Container>
  );
}

export default Home; 