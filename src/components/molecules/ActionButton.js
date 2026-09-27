// src/molecules/ActionButton.js
import React from 'react';
import Button from '../atoms/Button'; // Importamos el componente Button
import ColorPalette from '../atoms/ColorPalette'; // Importamos la paleta de colores

const ActionButton = ({ onClick }) => {
  return (
    <Button
      text="PROYECTOS"
      onClick={onClick} // Llamar a handleScrollToSection pasado desde AppBar
      sx={{
        backgroundColor: ColorPalette.button.default,
        color: ColorPalette.button.text,
        '&:hover': {
          backgroundColor: ColorPalette.button.hover,
        },
        '&:active': {
          backgroundColor: ColorPalette.button.active,
        },
        transform: 'translateX(-50px)', // Si lo necesitas, manten el movimiento
        '@media (max-width: 600px)': {
          transform: 'translateX(0)', // Elimina la transformación en pantallas pequeñas
        },
      }}
    />
  );
};

export default ActionButton;
