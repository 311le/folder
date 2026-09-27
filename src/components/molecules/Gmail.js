import { IconButton, useTheme, useMediaQuery } from "@mui/material";
import MailIcon from "@mui/icons-material/Mail";

const GmailButton = ({ color = "#d1d5db" }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md"));

  const iconSize = isMobile ? 30 : isTablet ? 35 : 40; // Cambia el tamaño del ícono según el dispositivo
  const padding = isMobile ? "6px" : isTablet ? "8px" : "10px"; // Ajusta el padding
  const boxShadow = isMobile ? "0px 0px 5px rgba(0, 0, 0, 0.1)" : "0px 0px 10px rgba(0, 0, 0, 0.2)"; // Menor sombra en móvil

  return (
    <IconButton
      href="mailto:cyamberlacotacachi@gmail.com"
      target="_blank"
      sx={{
        color: color, // Permite personalizar el color
        backgroundColor: "transparent", // Fondo transparente
        "&:hover": {
          backgroundColor: "rgba(255, 255, 255, 0.1)", // Ligero fondo al pasar el mouse
          transform: "scale(1.1)", // Animación de escala
          transition: "transform 0.3s ease-in-out", // Transición suave
        },
        borderRadius: "50%", // Bordes redondeados
        padding, // Ajuste dinámico del padding
        boxShadow, // Ajuste dinámico de la sombra
        transition: "transform 0.3s ease-in-out", // Transición de escala
      }}
    >
      <MailIcon sx={{ fontSize: iconSize, color: color }} />
    </IconButton>
  );
};

export default GmailButton;
