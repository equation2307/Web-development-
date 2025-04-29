import React from 'react';
import { Container, Typography, Box } from '@mui/material';

function Register() {
  return (
    <Container>
      <Box sx={{ mt: 4 }}>
        <Typography variant="h4" gutterBottom>
          Register
        </Typography>
        <Typography variant="body1">
          Create a new account to get started.
        </Typography>
      </Box>
    </Container>
  );
}

export default Register; 