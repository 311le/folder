import React from "react";
import { Button, Box } from "@mui/material";
import { scroller } from "react-scroll";
import { useTheme } from "@mui/material/styles";
import { useLocation, useNavigate } from "react-router-dom";
import ColorPalette from "./ColorPalette";
import { appSections, normalizePath } from "../../routes";

const ButtonsMenu = ({ activeSection, isMobile = false }) => {
  const theme = useTheme();
  const location = useLocation();
  const navigate = useNavigate();

  const handleClick = (section) => {
    if (normalizePath(location.pathname) === section.path) {
      scroller.scrollTo(section.id, {
        duration: 800,
        delay: 0,
        smooth: "easeInOutQuart",
        offset: isMobile ? -96 : 0,
      });
      return;
    }

    navigate(section.path);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "row", sm: "column" },
        gap: { xs: "0.35rem", sm: "1.5rem", md: "2rem" },
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        maxWidth: "100%",
        overflowX: { xs: "auto", sm: "visible" },
        mt: { xs: 0, sm: "auto" },
        px: { xs: 0.5, sm: 0 },
        scrollbarWidth: "none",
        "&::-webkit-scrollbar": {
          display: "none",
        },
      }}
    >
      {appSections.map((section) => (
        <Button
          key={section.id}
          onClick={() => handleClick(section)}
          aria-label={`Ir a ${section.label.toLowerCase()}`}
          sx={{
            "--active-button-color": ColorPalette.button.active,
            flexShrink: 0,
            fontFamily: '"Archivo Black", serif',
            fontSize: {
              xs: theme.typography.pxToRem(9),
              sm: theme.typography.pxToRem(12),
              md: theme.typography.pxToRem(16),
              lg: theme.typography.pxToRem(20),
            },
            padding: {
              xs: "5px 7px",
              sm: "8px 12px",
              md: "8px 14px",
              lg: "8px 16px",
            },
            borderRadius: "12px",
            transition:
              "background-color 0.3s ease, box-shadow 0.3s ease, transform 0.25s ease",
            fontWeight: "bold",
            color: ColorPalette.button.text,
            backgroundColor:
              activeSection === section.id
                ? ColorPalette.button.active
                : ColorPalette.button.default,
            boxShadow:
              activeSection === section.id
                ? "0 0 0 2px rgba(255,255,255,0.18), 0 8px 22px rgba(150,77,204,0.55)"
                : "none",
            transform:
              activeSection === section.id ? "translateY(-1px)" : "none",
            "&:hover": {
              backgroundColor:
                activeSection === section.id
                  ? ColorPalette.button.active
                  : ColorPalette.button.hover,
              transform: "translateY(-2px)",
              boxShadow: "0 6px 20px rgba(0,0,0,0.25)",
            },
            "&:active": {
              backgroundColor: ColorPalette.button.active,
              transform: "scale(0.97)",
            },
          }}
        >
          {section.label}
        </Button>
      ))}
    </Box>
  );
};

export default ButtonsMenu;
