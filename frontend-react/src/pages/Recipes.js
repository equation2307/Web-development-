import React, { useState, useEffect } from 'react';
import {
  Container,
  Typography,
  Box,
  TextField,
  Grid,
  Card,
  CardContent,
  CardActions,
  Button,
  CircularProgress,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import AddIcon from '@mui/icons-material/Add';

function Recipes() {
  const [recipes, setRecipes] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    searchRecipes();
  }, [searchTerm]);

  const searchRecipes = async () => {
    setLoading(true);
    try {
      const response = await fetch(`/api/recipes/search?q=${encodeURIComponent(searchTerm)}`);
      const data = await response.json();
      setRecipes(data);
    } catch (error) {
      console.error('Error searching recipes:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <Container style={{ paddingTop: '32px', paddingBottom: '32px' }}>
      <Box style={{ marginBottom: '32px' }}>
        <Typography variant="h4" gutterBottom>
          Recipes
        </Typography>
        <Typography variant="body1" paragraph>
          Browse and search through our collection of recipes.
        </Typography>
        <TextField
          fullWidth
          variant="outlined"
          placeholder="Search recipes..."
          value={searchTerm}
          onChange={handleSearchChange}
          InputProps={{
            startAdornment: <SearchIcon color="action" />,
          }}
        />
      </Box>

      {loading ? (
        <Box display="flex" justifyContent="center" p={3}>
          <CircularProgress />
        </Box>
      ) : (
        <Grid container spacing={3}>
          {recipes.map((recipe) => (
            <Grid item xs={12} sm={6} md={4} key={recipe.id}>
              <Card style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                <CardContent style={{ flexGrow: 1 }}>
                  <Typography variant="h6" gutterBottom>
                    {recipe.name}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    {recipe.cookingTime} mins • {recipe.servings} servings
                  </Typography>
                  <Typography variant="body2" color="textSecondary" style={{ marginTop: '8px' }}>
                    Type: {recipe.type}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button 
                    size="small" 
                    color="primary"
                    startIcon={<AddIcon />}
                  >
                    Add to Meal Plan
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      )}
    </Container>
  );
}

export default Recipes; 