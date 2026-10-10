import React from "react";
import PropTypes from "prop-types";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";

/**
 * Evita pasar props custom al DOM (React warning fix)
 */
const StyledTextButtonTypography = styled(Typography, {
  shouldForwardProp: (prop) => prop !== "align",
})(({ theme, align }) => ({
  color: theme.palette.text.primary,
  fontFamily: '"Archivo Black", sans-serif',
  fontWeight: 400,
  textAlign: align,

  // Responsive font size (MUI system)
  fontSize: "25px",
  [theme.breakpoints.down("md")]: {
    fontSize: "15px",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "10px",
  },
}));

/**
 * React 19 compatible (no defaultProps)
 */
const TextButton = ({ children, align = "left" }) => {
  return (
    <StyledTextButtonTypography component="span" align={align}>
      {children}
    </StyledTextButtonTypography>
  );
};

TextButton.propTypes = {
  children: PropTypes.node.isRequired,
  align: PropTypes.oneOf(["left", "center", "right"]),
};

export default TextButton;
