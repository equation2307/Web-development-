import React, { useState } from 'react';
import {
  Container,
  Grid,
  Paper,
  Typography,
  Button,
  Card,
  CardContent,
  IconButton,
  Box,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import TimerIcon from '@mui/icons-material/Timer';
import RecipeSelector from '../components/RecipeSelector';

const useStyles = styled((theme) => ({
  root: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  weekDay: {
    padding: theme.spacing(2),
    marginBottom: theme.spacing(2),
    minHeight: '150px',
    position: 'relative',
    backgroundColor: '#ffffff',
    boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
  },
  mealTime: {
    marginBottom: theme.spacing(2),
    padding: theme.spacing(1),
    backgroundColor: '#f8f9fa',
    borderRadius: theme.spacing(1),
  },
  addButton: {
    marginTop: theme.spacing(1),
    textTransform: 'none',
  },
  mealCard: {
    marginBottom: theme.spacing(1),
    backgroundColor: '#ffffff',
    '&:hover': {
      backgroundColor: '#f8f9fa',
      transform: 'translateY(-2px)',
      transition: 'all 0.2s ease',
    },
  },
  deleteIcon: {
    opacity: 0,
    transition: 'opacity 0.2s ease',
    '$mealCard:hover &': {
      opacity: 1,
    },
  },
  dayHeader: {
    borderBottom: '2px solid #e3f2fd',
    marginBottom: theme.spacing(2),
    paddingBottom: theme.spacing(1),
  },
  prepTime: {
    display: 'flex',
    alignItems: 'center',
    color: theme.palette.text.secondary,
    fontSize: '0.875rem',
    marginTop: theme.spacing(0.5),
  },
}));

function MealPlan() {
  const classes = useStyles();
  const [meals, setMeals] = useState({
    Monday: { breakfast: [], lunch: [], dinner: [] },
    Tuesday: { breakfast: [], lunch: [], dinner: [] },
    Wednesday: { breakfast: [], lunch: [], dinner: [] },
    Thursday: { breakfast: [], lunch: [], dinner: [] },
    Friday: { breakfast: [], lunch: [], dinner: [] },
    Saturday: { breakfast: [], lunch: [], dinner: [] },
    Sunday: { breakfast: [], lunch: [], dinner: [] },
  });

  const [selectorOpen, setSelectorOpen] = useState(false);
  const [selectedDay, setSelectedDay] = useState(null);
  const [selectedMealType, setSelectedMealType] = useState(null);

  const handleAddMeal = (day, mealType) => {
    setSelectedDay(day);
    setSelectedMealType(mealType);
    setSelectorOpen(true);
  };

  const handleSelectRecipe = (recipe) => {
    setMeals(prevMeals => ({
      ...prevMeals,
      [selectedDay]: {
        ...prevMeals[selectedDay],
        [selectedMealType]: [...prevMeals[selectedDay][selectedMealType], recipe],
      },
    }));
    setSelectorOpen(false);
  };

  const removeMeal = (day, mealTime, mealIndex) => {
    setMeals(prevMeals => ({
      ...prevMeals,
      [day]: {
        ...prevMeals[day],
        [mealTime]: prevMeals[day][mealTime].filter((_, index) => index !== mealIndex),
      },
    }));
  };

  return (
    <Container className={classes.root}>
      <Box mb={4}>
        <Typography variant="h4" gutterBottom>
          Weekly Meal Planner
        </Typography>
        <Typography variant="subtitle1" color="textSecondary">
          Plan your meals for the week ahead. Click the + button to add meals to your schedule.
        </Typography>
      </Box>
      
      <Grid container spacing={3}>
        {Object.entries(meals).map(([day, mealTimes]) => (
          <Grid item xs={12} md={6} lg={4} key={day}>
            <Paper className={classes.weekDay}>
              <Typography variant="h6" className={classes.dayHeader}>
                {day}
              </Typography>
              
              {Object.entries(mealTimes).map(([mealTime, mealsList]) => (
                <div key={mealTime} className={classes.mealTime}>
                  <Typography variant="subtitle2" style={{ textTransform: 'capitalize' }}>
                    {mealTime}
                  </Typography>
                  
                  {mealsList.map((meal, index) => (
                    <Card key={index} className={classes.mealCard}>
                      <CardContent>
                        <Typography variant="body2">
                          {meal.name}
                          <IconButton
                            size="small"
                            onClick={() => removeMeal(day, mealTime, index)}
                            className={classes.deleteIcon}
                          >
                            <DeleteIcon fontSize="small" />
                          </IconButton>
                        </Typography>
                        <div className={classes.prepTime}>
                          <TimerIcon fontSize="small" style={{ marginRight: 4 }} />
                          {meal.prepTime}
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                  
                  <Button
                    startIcon={<AddIcon />}
                    size="small"
                    color="primary"
                    onClick={() => handleAddMeal(day, mealTime)}
                    className={classes.addButton}
                  >
                    Add {mealTime}
                  </Button>
                </div>
              ))}
            </Paper>
          </Grid>
        ))}
      </Grid>

      <RecipeSelector
        open={selectorOpen}
        onClose={() => setSelectorOpen(false)}
        onSelect={handleSelectRecipe}
      />
    </Container>
  );
}

export default MealPlan; 