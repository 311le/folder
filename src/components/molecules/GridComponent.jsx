import { useState } from "react";
import { Box, Button, Dialog, DialogTitle, DialogContent, DialogActions } from "@mui/material";
import { SiReact, SiNodedotjs, SiJavascript } from "react-icons/si";
import { TbApi } from "react-icons/tb";
import PrimaryText from "../atoms/TextAtom";
import ActionButton from "./ActionButton";
import PersonalInfoButton from "../organisms/PersonalInfoButton";

const pdfLink = "https://1drv.ms/b/c/5617855348bc76db/IQA7Oei3UKlyQZm4lm45nt5jAZtus7FuC5wbdIttkKa2s6o?e=TY9h4Z";
const technologies = [
  { label: "React", Icon: SiReact, color: "#62e9ff" },
  { label: "Node.js", Icon: SiNodedotjs, color: "#88efa5" },
  { label: "JavaScript", Icon: SiJavascript, color: "#ffe17e" },
  { label: "APIs", Icon: TbApi, color: "#ceacff" },
];

const GridComponent = () => {
  const [personalInfoOpen, setPersonalInfoOpen] = useState(false);
  return (
  <Box className="hero-copy">
    <Box className="hero-role"><span aria-hidden="true" />Full Stack Developer</Box>
    <PrimaryText component="h1" font="archivoBlack" fontSize="inherit" className="hero-name">Cristian Yamberla</PrimaryText>
    <PrimaryText component="p" font="archivoBlack" fontSize="inherit" className="hero-headline">
      Construyo experiencias digitales modernas
    </PrimaryText>
    <PrimaryText component="p" font="girassol" fontSize="inherit" className="hero-subtitle">
      Tecnología que crea experiencias
    </PrimaryText>
    <PrimaryText component="p" font="bebasNeue" fontSize="inherit" className="hero-description">
      Desarrollo aplicaciones web modernas, escalables y centradas en la experiencia de usuario, combinando diseño, rendimiento y buenas prácticas.
    </PrimaryText>
    <Box component="ul" className="hero-technologies" aria-label="Tecnologías">
      {technologies.map(({ label, Icon, color }) => (
        <Box component="li" key={label} className="hero-tech" style={{ "--tech-color": color }}>
          <Icon aria-hidden="true" /><span>{label}</span>
        </Box>
      ))}
    </Box>
    <Box className="hero-actions">
      <ActionButton />
      <PersonalInfoButton onClick={() => setPersonalInfoOpen(true)} />
    </Box>
    <Dialog open={personalInfoOpen} onClose={() => setPersonalInfoOpen(false)} fullWidth maxWidth="sm"
      aria-labelledby="personal-info-title" aria-describedby="personal-info-description"
      slotProps={{ paper: { sx: { borderRadius: 3, background: "linear-gradient(140deg, #190c36, #06153b)", color: "#f7f8ff", border: "1px solid #9d45da", boxShadow: "0 0 36px #8500ff40" } } }}>
      <DialogTitle id="personal-info-title" sx={{ fontFamily: "var(--font-heading)" }}>Sobre mí</DialogTitle>
      <DialogContent>
        <PrimaryText component="h2" font="bebasNeue" fontSize="28px" sx={{ color: "#5fe9ff" }}>Cristian Yamberla · Full Stack Developer</PrimaryText>
        <PrimaryText component="p" id="personal-info-description" font="girassol" fontSize="19px" sx={{ color: "#f7f8ff", lineHeight: 1.7, mt: 2 }}>
          Desarrollo aplicaciones web modernas, escalables y centradas en la experiencia de usuario, combinando diseño, rendimiento y buenas prácticas.
        </PrimaryText>
      </DialogContent>
      <DialogActions sx={{ px: 3, pb: 3, gap: 1 }}>
        <Button href={pdfLink} target="_blank" rel="noopener noreferrer" variant="outlined" sx={{ color: "#5fe9ff" }}>Ver CV ↗</Button>
        <Button onClick={() => setPersonalInfoOpen(false)} sx={{ color: "#f7f8ff" }}>Cerrar</Button>
      </DialogActions>
    </Dialog>
  </Box>
  );
};

export default GridComponent;
