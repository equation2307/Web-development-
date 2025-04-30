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
  styled,
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import TimerIcon from '@mui/icons-material/Timer';
import RecipeSelector from '../components/RecipeSelector';

const WeekDay = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
  marginBottom: theme.spacing(2),
  minHeight: '150px',
  position: 'relative',
  backgroundColor: '#ffffff',
  boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
}));

const MealTime = styled(Box)(({ theme }) => ({
  marginBottom: theme.spacing(2),
  padding: theme.spacing(1),
  backgroundColor: '#f8f9fa',
  borderRadius: theme.spacing(1),
}));

const AddButton = styled(Button)(({ theme }) => ({
  marginTop: theme.spacing(1),
  textTransform: 'none',
}));

const MealCard = styled(Card)(({ theme }) => ({
  marginBottom: theme.spacing(1),
  backgroundColor: '#ffffff',
  '&:hover': {
    backgroundColor: '#f8f9fa',
    transform: 'translateY(-2px)',
    transition: 'all 0.2s ease',
  },
}));

const DeleteIconButton = styled(IconButton)(({ theme }) => ({
  opacity: 0,
  transition: 'opacity 0.2s ease',
  [`${MealCard}:hover &`]: {
    opacity: 1,
  },
}));

const DayHeader = styled(Typography)(({ theme }) => ({
  borderBottom: '2px solid #e3f2fd',
  marginBottom: theme.spacing(2),
  paddingBottom: theme.spacing(1),
}));

const PrepTime = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  color: theme.palette.text.secondary,
  fontSize: '0.875rem',
  marginTop: theme.spacing(0.5),
}));

function MealPlan() {
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
    <Container>
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
            <Paper className={WeekDay}>
              <Typography variant="h6" className={DayHeader}>
                {day}
              </Typography>
              
              {Object.entries(mealTimes).map(([mealTime, mealsList]) => (
                <div key={mealTime} className={MealTime}>
                  <Typography variant="subtitle2" style={{ textTransform: 'capitalize' }}>
                    {mealTime}
                  </Typography>
                  
                  {mealsList.map((meal, index) => (
                    <Card key={index} className={MealCard}>
                      <CardContent>
                        <Typography variant="body2">
                          {meal.name}
                          <IconButton
                            size="small"
                            onClick={() => removeMeal(day, mealTime, index)}
                            className={DeleteIconButton}
                          >
                            <DeleteIcon fontSize="small" />
                          </IconButton>
                        </Typography>
                        <div className={PrepTime}>
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
                    className={AddButton}
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