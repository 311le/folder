import { Button, Box, useMediaQuery } from "@mui/material";
import HomeRounded from "@mui/icons-material/HomeRounded";
import WorkOutlineRounded from "@mui/icons-material/WorkOutlineRounded";
import CodeRounded from "@mui/icons-material/CodeRounded";
import MailOutlineRounded from "@mui/icons-material/MailOutlineRounded";
import { scroller } from "react-scroll";
import { useLocation, useNavigate } from "react-router-dom";
import { appSections, normalizePath } from "../../routes";

const sectionIcons = { view1: HomeRounded, projects: WorkOutlineRounded, skills: CodeRounded, contact: MailOutlineRounded };

const ButtonsMenu = ({ activeSection, isMobile = false }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const reduceMotion = useMediaQuery("(prefers-reduced-motion: reduce)");
  const handleClick = (section) => {
    if (normalizePath(location.pathname) === section.path) {
      scroller.scrollTo(section.id, {
        duration: reduceMotion ? 0 : 800,
        delay: 0,
        smooth: reduceMotion ? false : "easeInOutQuart",
        offset: isMobile ? -96 : 0,
      });
      return;
    }
    navigate(section.path);
  };
  return (
    <Box className="sidebar-links">
      {appSections.map((section) => {
        const Icon = sectionIcons[section.id];
        return <Button key={section.id} onClick={() => handleClick(section)}
          className="sidebar-link" aria-label={`Ir a ${section.label.toLowerCase()}`}
          aria-current={activeSection === section.id ? "page" : undefined}
          startIcon={<Icon />}><span>{section.label}</span></Button>;
      })}
    </Box>
  );
};

export default ButtonsMenu;
