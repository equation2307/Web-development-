import React, { useState, useEffect, useCallback } from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
  List,
  ListItem,
  ListItemText,
  IconButton,
  Typography,
  CircularProgress,
  Box,
  ListItemButton,
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import SearchIcon from '@mui/icons-material/Search';

const RecipeSelector = ({ open, onClose, onSelect }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(false);

  const searchRecipes = useCallback(async () => {
    setLoading(true);
    try {
      const response = await fetch(`http://localhost:3000/api/recipes/search?q=${encodeURIComponent(searchTerm)}`, {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Origin': 'http://localhost:3001'
        },
        mode: 'cors',
        credentials: 'include'
      });
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const data = await response.json();
      console.log('Received recipes in selector:', data);
      setRecipes(data);
    } catch (error) {
      console.error('Error searching recipes:', error);
    } finally {
      setLoading(false);
    }
  }, [searchTerm]);

  useEffect(() => {
    if (open) {
      searchRecipes();
    }
  }, [open, searchRecipes]);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleRecipeSelect = (recipe) => {
    onSelect(recipe);
    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
      <DialogTitle>Select Recipe</DialogTitle>
      <DialogContent>
        <TextField
          fullWidth
          variant="outlined"
          placeholder="Search recipes..."
          value={searchTerm}
          onChange={handleSearchChange}
          InputProps={{
            startAdornment: <SearchIcon color="action" />,
          }}
          sx={{ mb: 2 }}
        />
        {loading ? (
          <Box display="flex" justifyContent="center" p={3}>
            <CircularProgress />
          </Box>
        ) : recipes.length > 0 ? (
          <List sx={{ maxHeight: '400px', overflow: 'auto' }}>
            {recipes.map((recipe) => (
              <ListItem
                key={recipe.id}
                disablePadding
                divider
              >
                <ListItemButton onClick={() => handleRecipeSelect(recipe)}>
                  <ListItemText
                    primary={recipe.name}
                    secondary={`${recipe.cookingTime} mins • ${recipe.servings} servings`}
                  />
                  <IconButton
                    edge="end"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleRecipeSelect(recipe);
                    }}
                    size="small"
                  >
                    <AddIcon />
                  </IconButton>
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        ) : (
          <Typography variant="body1" color="textSecondary" align="center">
            No recipes found
          </Typography>
        )}
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
      </DialogActions>
    </Dialog>
  );
};

export default RecipeSelector; 