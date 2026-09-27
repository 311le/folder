// src/atoms/PersonalInfoButton.js
import React from 'react';
import Button from '../atoms/Button'; // Importamos el componente Button
import ColorPalette from '../atoms/ColorPalette'; // Importamos la paleta de colores

const PersonalInfoButton = ({ onClick, sx = {}, ...props }) => {
  return (
    <Button
      text="SOBRE MI" // Texto del botón
      onClick={onClick} // Función onClick
      sx={{
        backgroundColor: ColorPalette.button.default, // Color de fondo del botón desde la paleta
        color: ColorPalette.button.text, // Color del texto del botón
        '&:hover': {
          backgroundColor: ColorPalette.button.hover, // Color de fondo al pasar el mouse
        },
        '&:active': {
          backgroundColor: ColorPalette.button.active, // Color de fondo al hacer clic
        },
        transform: 'translateX(-50px)', // Mueve el botón 50px a la izquierda
        // Responsive styles
        '@media (max-width: 600px)': {
          transform: 'translateX(0)', // Elimina la transformación en pantallas pequeñas
          fontSize: '0.9rem', // Reduce el tamaño del texto en dispositivos móviles
          padding: '8px 12px', // Reduce el padding en dispositivos móviles
        },
        '@media (min-width: 601px) and (max-width: 900px)': {
          fontSize: '1rem', // Ajusta el tamaño del texto en tabletas
          padding: '10px 14px', // Ajusta el padding en tabletas
        },
        ...sx, // Permite extender estilos personalizados
      }}
      {...props} // Pasa cualquier propiedad adicional al botón
    />
  );
};

export default PersonalInfoButton;
