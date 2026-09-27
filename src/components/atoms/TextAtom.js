import React from "react";
import PropTypes from "prop-types";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";

/* Fuente map */
const fontMap = {
  archivoBlack: {
    fontFamily: '"Archivo Black", sans-serif',
    fontWeight: 700,
  },
  girassol: {
    fontFamily: '"Girassol", serif',
    fontWeight: 400,
  },
  bebasNeue: {
    fontFamily: '"Bebas Neue", sans-serif',
    fontWeight: 400,
  },
  dmSerifTextRegular: {
    fontFamily: '"DM Serif Text", serif',
    fontWeight: 400,
  },
  dmSerifTextRegularItalic: {
    fontFamily: '"DM Serif Text", serif',
    fontWeight: 400,
    fontStyle: "italic",
  },
};

/* Evitar pasar props al DOM */
const StyledPrimaryText = styled(Typography, {
  shouldForwardProp: (prop) => prop !== "align" && prop !== "font",
})(({ theme, align, font }) => ({
  color: theme.palette.text.primary,
  textAlign: align,
  ...fontMap[font],
}));

/* React 19 compatible */
const PrimaryText = ({
  children,
  font = "archivoBlack",
  align = "left",
  fontSize = { xs: "20px", md: "24px" },
  sx = {},
}) => {
  return (
    <StyledPrimaryText
      component="span"
      align={align}
      font={font}
      sx={{
        fontSize,
        ...sx,
      }}
    >
      {children}
    </StyledPrimaryText>
  );
};

/* PropTypes solo validación */
PrimaryText.propTypes = {
  children: PropTypes.node.isRequired,
  font: PropTypes.oneOf(Object.keys(fontMap)),
  align: PropTypes.oneOf(["left", "center", "right"]),
  fontSize: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object, // responsive MUI
  ]),
  sx: PropTypes.object,
};

export default PrimaryText;
