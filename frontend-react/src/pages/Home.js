import React from 'react';
import { Container, Typography, Box } from '@mui/material';

const styles = {
  pageContainer: {
    minHeight: '100vh',
    position: 'relative',
    '&::before': {
      content: '""',
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundImage: 'url("/images/image123.jpg")',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      filter: 'blur(8px)',
      zIndex: -1,
    },
  },
  contentContainer: {
    position: 'relative',
    zIndex: 1,
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    borderRadius: '8px',
    padding: '2rem',
    marginTop: '2rem',
  },
};

function Home() {
  return (
    <Box sx={styles.pageContainer}>
      <Container>
        <Box sx={styles.contentContainer}>
          <Typography variant="h4" gutterBottom>
            Welcome to MealMaster
          </Typography>
          <Typography variant="body1">
            Plan your meals, discover recipes, and organize your shopping list all in one place.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}

export default Home; 