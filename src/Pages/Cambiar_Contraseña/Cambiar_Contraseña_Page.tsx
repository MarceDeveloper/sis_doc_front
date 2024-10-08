import React from 'react';
import { Container, Box, Typography, AppBar, Toolbar, CssBaseline } from '@mui/material';
import ChangePasswordForm from './ChangePasswordForm';
import { Navbar } from '../../components/Navbar/Navbar';
// import ChangePasswordForm from './components/ChangePasswordForm';
// import ReportsTable from './components/ReportsTable';

export const Cambiar_Contrasena: React.FC = () => {
  return (
    <div>
      <CssBaseline />
      {/* <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div">
            Sistema de Informes
          </Typography>
        </Toolbar>
      </AppBar> */}
      <Container maxWidth="lg">
        <Box mt={4}>
          
          <ChangePasswordForm />
        
        </Box>
      </Container>
    </div>
  );
}

