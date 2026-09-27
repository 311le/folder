// CustomPaper.js
import React from 'react';
import Paper from '@mui/material/Paper';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

const CustomPaper = ({ children }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm')); // Detectar pantallas pequeñas

  return (
    <Paper
      style={{
        background: 'linear-gradient(to bottom, #000000, #1A1A1A, #333333, #E0E0E0, #333333, #1A1A1A, #000000)', 
        minHeight: '100vh', // Ocupar toda la altura de la pantalla
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center', // Centrar verticalmente
        alignItems: 'center', // Centrar horizontalmente
        padding: isMobile ? '20px' : '45px', // Reducir padding en móviles
        margin: 0, // Asegurar que no haya margen extra
        color: '#FFF', // Texto blanco para contrastar con el fondo oscuro
      }}
      elevation={3}
    >
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '80vh', // Espacio para centrar en la pantalla
        }}
      >
        <Grid container spacing={2} justifyContent="center" alignItems="center">
          {children}
        </Grid>
      </Box>
    </Paper>
  );
};

export default CustomPaper;
