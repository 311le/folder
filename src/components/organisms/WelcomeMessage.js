import React from 'react';
import { Box, Typography } from '@mui/material'; // Importamos componentes de Material-UI

const WelcomeMessage = () => {
  return (
    <Box sx={styles.container}>
      <Typography variant="h4" sx={styles.title}>
        ¡Bienvenido a nuestra página web!
      </Typography>
      <Typography variant="body1" sx={styles.subtitle}>
        Explora nuestros servicios y productos.
      </Typography>
    </Box>
  );
};

const styles = {
  container: {
    padding: '16px', // Agrega un poco de espacio alrededor del texto
    textAlign: 'center', // Centra el texto horizontalmente
    '@media (max-width: 600px)': {
      padding: '8px', // Reduce el padding en dispositivos móviles
    },
  },
  title: {
    marginBottom: '8px', // Espacio entre el título y el subtítulo
    fontWeight: 'bold',
    color: '#000', // Color del título
    '@media (max-width: 600px)': {
      fontSize: '1.2rem', // Título más pequeño para móviles
    },
    '@media (min-width: 601px) and (max-width: 900px)': {
      fontSize: '1.5rem', // Título más pequeño para tabletas
    },
    '@media (min-width: 901px)': {
      fontSize: '2rem', // Título más pequeño para pantallas grandes
    },
  },
  subtitle: {
    color: '#555', // Color del subtítulo
    '@media (max-width: 600px)': {
      fontSize: '0.9rem', // Ajusta el tamaño del texto para pantallas pequeñas
    },
    '@media (min-width: 601px) and (max-width: 900px)': {
      fontSize: '1rem', // Ajusta el tamaño del texto para tabletas
    },
    '@media (min-width: 901px)': {
      fontSize: '1.2rem', // Ajusta el tamaño del texto para pantallas grandes
    },
  },
};

export default WelcomeMessage;
