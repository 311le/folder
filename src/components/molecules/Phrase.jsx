// Phrase.js
import React from 'react';
import Grid from '@mui/material/Grid';
import PrimaryText from '../atoms/TextAtom';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

const Phrase = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md'));

  // Definir el tamaño del contenedor según el dispositivo
  const width = isMobile ? '100%' : isTablet ? '8cm' : '7cm';
  const height = isMobile ? 'auto' : isTablet ? '6cm' : '5cm';

  // Ajustar márgenes para subir el contenido en móviles
  const marginTop = isMobile ? '-160px' : isTablet ? '-70px' : '30px';
  const marginLeft = isMobile ? '0%' : isTablet ? '-40%' : '-58%';

  // Alineación de texto
  const textAlign = isMobile ? 'center' : 'justify';

  return (
    <Grid
      container
      justifyContent="center" // Centramos el contenido en todas las vistas
      alignItems="center"
      sx={{
        width,
        height,
        background: 'transparent',
        borderRadius: '10px',
        boxShadow: 'none',
        textAlign,
        padding: '10px',
        marginTop,
        marginLeft,
      }}
    >
      <PrimaryText 
        font="archivoBlack" 
        fontSize={isMobile ? "40px" : isTablet ? "28px" : "50px"}
        align="center" 
        fontWeight="bold"
      >
        <span style={{ color: "white" }}>Full Stack Developer</span>
      </PrimaryText>
      
      <PrimaryText 
        font="dmSerifTextRegularItalic" 
        fontSize={isMobile ? "20px" : isTablet ? "28px" : "50px"}
        align={textAlign} 
        fontWeight="bold"
      >
        <span style={{ color: 'white' }}>
          Transformando ideas en soluciones digitales
        </span>
      </PrimaryText>
    </Grid>
  );
};

export default Phrase;
