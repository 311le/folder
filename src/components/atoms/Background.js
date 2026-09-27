import React from 'react';
import { Box } from '@mui/material';

const Background = ({ children, imageSource }) => {
  return (
    <Box
      sx={{
        position: 'relative', // Asegura la posición relativa para superposición
        width: '99vw', // Reduce el ancho al 98% del viewport
        height: '98vh', // Ajusta la altura al 90% del viewport
        margin: 'auto', // Centra el contenedor horizontalmente
        marginTop: '-50px', // Subir la imagen ajustando el margen superior
        backgroundImage: `url(${imageSource})`, // Imagen de fondo
        backgroundSize: 'cover', // Ajusta la imagen para cubrir todo
        backgroundPosition: 'center top', // Centra la imagen y la ajusta hacia arriba
        display: 'flex', // Habilita Flexbox
        justifyContent: 'center', // Centra horizontalmente
        alignItems: 'center', // Centra verticalmente
        borderRadius: '16px', // Opcional: esquinas redondeadas
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', // Sombra para dar profundidad
      }}
    >
      <Box
        sx={{
          position: 'absolute', // Superposición en la imagen
          top: 0,
          left: 0,
          width: '100%', // Cubre todo el ancho del contenedor
          height: '100%', // Cubre toda la altura del contenedor
          backgroundColor: 'rgba(75, 0, 130, 0.4)', // Fondo morado con opacidad
        }}
      />
      <Box
        sx={{
          position: 'relative', // El contenido se posiciona sobre la superposición
          zIndex: 1, // Asegura que esté por encima de la capa de fondo
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        {children} {/* Renderiza los elementos hijos */}
      </Box>
    </Box>
  );
};

export default Background;
