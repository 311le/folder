import { Button } from "@mui/material";
import PersonOutlineRounded from "@mui/icons-material/PersonOutlineRounded";

const PersonalInfoButton = ({ onClick, sx = {}, ...props }) => (
  <Button onClick={onClick} sx={sx} className="hero-button hero-button-secondary"
    startIcon={<PersonOutlineRounded />}
    aria-label="Sobre mí: abrir información personal" aria-haspopup="dialog" {...props}>
    <span>Sobre mí<span className="hero-button-note">Mi perfil</span></span>
  </Button>
);

export default PersonalInfoButton;
