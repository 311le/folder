import React from 'react';
import { Box } from '@mui/material';
import '../styles/EmptyGrid.css';

const EmptyGrid = () => {
  return (
    <Box className="cubo-estatico">
      <Box className="cara-estatica atras-estatica" />
      <Box className="cara-estatica abajo-estatica" />
    </Box>
  );
};

export default EmptyGrid;
