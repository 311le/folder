import React from 'react';
import { IconButton, useTheme, useMediaQuery } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const LinkedInButton = ({ iconColor = 'black' }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md'));

  const iconSize = isMobile ? 30 : isTablet ? 35 : 40; // Cambia el tamaño del ícono según el dispositivo
  const padding = isMobile ? '6px' : isTablet ? '8px' : '10px'; // Ajusta el padding
  const boxShadow = isMobile ? '0px 0px 5px rgba(0, 0, 0, 0.1)' : '0px 0px 10px rgba(0, 0, 0, 0.2)'; // Menor sombra en móvil

  const handleClick = () => {
    window.open(
      'https://www.linkedin.com/in/cristian-yamberla-cotacachi-13aba6296',
      '_blank'
    );
  };

  return (
    <IconButton
      onClick={handleClick}
      sx={{
        backgroundColor: 'transparent',
        '&:hover': {
          backgroundColor: 'rgba(255, 255, 255, 0.1)',
          transform: 'scale(1.1)',
          transition: 'transform 0.3s ease-in-out',
        },
        borderRadius: '50%',
        padding, // Ajuste dinámico del padding
        boxShadow, // Ajuste dinámico de la sombra
        transition: 'transform 0.3s ease-in-out', // Transición de escala
      }}
    >
      <LinkedInIcon sx={{ fontSize: iconSize, color: iconColor }} />
    </IconButton>
  );
};

export default LinkedInButton;
