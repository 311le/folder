import React from 'react';
import { Box } from '@mui/material'; // Utilizamos Box de Material-UI para contenedores flexibles
import logo from '../styles/images/logo.png'; // Asegúrate de que la ruta sea correcta

const Logo = () => {
  return (
    <Box
      sx={{
        position: 'absolute',
        top: 50, // Posición en la parte superior
        left: '50%', // Centra el logo
        transform: 'translateX(-50%)', // Centra el logo
        zIndex: 2, // Asegura que esté siempre delante del fondo

        // Responsividad
        '@media (max-width: 600px)': {
          top: 30, // Ajusta la distancia desde la parte superior en móviles
          width: '100px', // Cambia el tamaño en móviles
        },
        '@media (min-width: 601px) and (max-width: 900px)': {
          top: 40, // Ajusta la distancia desde la parte superior en tabletas
          width: '120px', // Cambia el tamaño en tabletas
        },
        '@media (min-width: 901px)': {
          top: 50, // Ajusta la distancia desde la parte superior en escritorios
          width: '150px', // Tamaño del logo en escritorio
        },
      }}
    >
      <img
        src={logo} // Fuente de la imagen
        alt="Logo" // Texto alternativo
        style={{
          width: '100%', // El ancho de la imagen se ajusta al contenedor
          height: 'auto', // Mantiene la proporción de la imagen
        }}
      />
    </Box>
  );
};

export default Logo;
