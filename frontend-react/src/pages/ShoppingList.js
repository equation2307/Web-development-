import React from 'react';
import { Container, Typography, Box } from '@mui/material';

function ShoppingList() {
  return (
    <Container>
      <Box sx={{ mt: 4 }}>
        <Typography variant="h4" gutterBottom>
          Shopping List
        </Typography>
        <Typography variant="body1">
          View and manage your shopping list.
        </Typography>
      </Box>
    </Container>
  );
}

export default ShoppingList; 