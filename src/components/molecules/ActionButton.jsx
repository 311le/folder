import { Button } from "@mui/material";
import RocketLaunchRounded from "@mui/icons-material/RocketLaunchRounded";
import ArrowForwardRounded from "@mui/icons-material/ArrowForwardRounded";
import { Link } from "react-router-dom";
import { appSections } from "../../routes";

const ActionButton = ({ onClick }) => (
  <Button component={Link} to={appSections.find((section) => section.id === "projects").path}
    onClick={onClick} className="hero-button hero-button-primary"
    startIcon={<RocketLaunchRounded />} endIcon={<ArrowForwardRounded />}>
    Ver proyectos
  </Button>
);

export default ActionButton;
