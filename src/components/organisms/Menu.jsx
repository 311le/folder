import { Box, useMediaQuery } from "@mui/material";
import { Link } from "react-router-dom";
import CodeRounded from "@mui/icons-material/CodeRounded";
import ButtonsMenu from "../atoms/ButtonMenu";
import LinkedInButton from "../molecules/LinkedInButton";
import { useActiveSection } from "../../context/ActiveSectionContext";

function Menu() {
  const { activeSection } = useActiveSection();
  const isMobile = useMediaQuery("(max-width:599.95px)");
  return (
    <Box component="nav" className="neon-sidebar" aria-label="Navegación principal">
      <Box component={Link} to="/" className="sidebar-brand" aria-label="Cristian Yamberla, inicio">
        <CodeRounded aria-hidden="true" />
        <span>CRISTIAN<span className="sidebar-brand-surname">YAMBERLA<span className="brand-dot">.</span></span></span>
      </Box>
      <span className="sidebar-divider" aria-hidden="true" />
      <ButtonsMenu activeSection={activeSection} isMobile={isMobile} />
      <Box className="sidebar-bottom">
        <LinkedInButton iconColor="#d8cfff" />
        <span className="sidebar-caption">CONECTEMOS</span>
      </Box>
      <Box className="sidebar-waves" aria-hidden="true"><i /><i /><i /></Box>
    </Box>
  );
}

export default Menu;
