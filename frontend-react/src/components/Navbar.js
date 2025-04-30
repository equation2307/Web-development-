import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
} from '@mui/material';

function Navbar() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component={RouterLink} to="/" sx={{ flexGrow: 1, textDecoration: 'none', color: 'inherit' }}>
          MealMaster
        </Typography>
        <Box>
          <Button color="inherit" component={RouterLink} to="/recipes">
            Recipes
          </Button>
          <Button color="inherit" component={RouterLink} to="/meal-plan">
            Meal Plan
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar; 