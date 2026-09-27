import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import useMediaQuery from "@mui/material/useMediaQuery";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
import PrimaryText from "../atoms/TextAtom";
import ButtonsMenu from "../atoms/ButtonMenu";
import LinkedInButton from "../molecules/LinkedInButton";
import { useActiveSection } from "../../context/ActiveSectionContext";

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 860,
      betweenTabletAndDesktop: 1024,
      lg: 1280,
      xl: 1920,
    },
  },
});

function Menu() {
  const navigate = useNavigate();
  const { activeSection } = useActiveSection();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md"));
  const isBetweenTabletAndDesktop = useMediaQuery(
    theme.breakpoints.between("md", "betweenTabletAndDesktop")
  );

  const handleHomeClick = () => {
    navigate("/");
  };

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <AppBar
          position="fixed"
          sx={{
            background:
              "radial-gradient(circle, rgba(75, 30, 85, 0.9) 30%, rgba(75, 30, 85, 0.5) 50%, rgba(100, 50, 150, 0.3) 70%, rgba(143, 40, 119, 0.9) 100%)",
            height: isMobile ? "96px" : "100vh",
            width: isMobile
              ? "100vw"
              : isTablet
              ? "150px"
              : isBetweenTabletAndDesktop
              ? "180px"
              : "230px",
            top: 0,
            left: 0,
            zIndex: 1200,
            boxShadow: "0px 0px 15px 5px rgba(0, 0, 0, 0.3)",
            border: "2px solid black",
            borderRadius: "10px",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: isMobile ? "center" : "flex-start",
          }}
        >
          <Toolbar
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: isMobile ? "center" : "space-between",
              alignItems: "center",
              width: "100%",
              minHeight: isMobile ? "96px" : "100%",
              py: isMobile ? 0.75 : 0,
            }}
          >
            <Box
              component="button"
              onClick={handleHomeClick}
              sx={{
                cursor: "pointer",
                textAlign: "center",
                fontWeight: "bold",
                flexGrow: isMobile ? 0 : 1,
                p: 0,
                border: 0,
                background: "transparent",
              }}
            >
              <PrimaryText
                font="archivoBlack"
                fontSize={{
                  xs: "12px",
                  sm: "20px",
                  md: "22px",
                  lg: "33px",
                }}
              >
                <span style={{ color: "#ffbd59" }}>MI APLICACION</span>
              </PrimaryText>
            </Box>

            <Box
              sx={{
                display: "flex",
                flexDirection: isMobile ? "row" : "column",
                alignItems: "center",
                gap: isMobile ? "0.35rem" : "2rem",
                width: "100%",
                justifyContent: isMobile ? "center" : "flex-end",
                ml: isMobile ? 0 : "5px",
                mt: isMobile ? 0.5 : "80px",
              }}
            >
              <ButtonsMenu activeSection={activeSection} isMobile={isMobile} />
              {!isMobile && <LinkedInButton />}
            </Box>
          </Toolbar>
        </AppBar>
      </Box>
    </ThemeProvider>
  );
}

export default Menu;
