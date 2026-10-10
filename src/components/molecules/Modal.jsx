import React from 'react';
import { Box } from '@mui/material'; // Importamos Box de Material-UI

const DarkPurpleGrid = ({ children }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center', // Centra el contenido horizontalmente
        alignItems: 'center', // Centra el contenido verticalmente
        backgroundImage: 'linear-gradient(135deg, #fbc2eb, #a6c1ee)', // Gradiente de rosado a azul claro
        width: '30vw', // El ancho de la modal
        height: '75vh', // La altura de la modal
        marginTop: '30px', // Baja toda la modal 30px
        borderRadius: '16px', // Esquinas redondeadas
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', // Sombra para dar profundidad

        // Responsividad
        '@media (max-width: 600px)': {
          width: '80vw', // En móviles, el ancho se ajusta al 80% del viewport
          height: '60vh', // En móviles, la altura se ajusta al 60% del viewport
          marginTop: '20px', // Ajusta el margen superior para móviles
        },
        '@media (min-width: 601px) and (max-width: 900px)': {
          width: '50vw', // En tabletas, el ancho se ajusta al 50% del viewport
          height: '70vh', // En tabletas, la altura se ajusta al 70% del viewport
          marginTop: '25px', // Ajusta el margen superior para tabletas
        },
        '@media (min-width: 901px)': {
          width: '30vw', // En escritorios, el ancho permanece al 30% del viewport
          height: '75vh', // En escritorios, la altura permanece al 75% del viewport
        },
      }}
    >
      <Box
        sx={{
          width: '50%', // Ancho de la grid (50% de la modal)
          height: '40%', // Alto de la grid (40% de la modal)
          display: 'flex', // Utilizamos flexbox
          justifyContent: 'center', // Centra los hijos horizontalmente
          alignItems: 'center', // Centra los hijos verticalmente
        }}
      >
        {children} {/* Aquí se renderizarán los componentes hijos */}
      </Box>
    </Box>
  );
};

export default DarkPurpleGrid;
