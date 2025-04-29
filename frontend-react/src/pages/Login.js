import React from 'react';
import { Container, Typography, Box } from '@mui/material';

function Login() {
  return (
    <Container>
      <Box sx={{ mt: 4 }}>
        <Typography variant="h4" gutterBottom>
          Login
        </Typography>
        <Typography variant="body1">
          Please log in to access your account.
        </Typography>
      </Box>
    </Container>
  );
}

export default Login; 