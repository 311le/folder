import { useId, useRef } from "react";
import { Box, Button } from "@mui/material";
import ArrowForwardRounded from "@mui/icons-material/ArrowForwardRounded";
import OpenInNewRounded from "@mui/icons-material/OpenInNewRounded";
import ContainerComponent from "../../atoms/Container";
import PrimaryText from "../../atoms/TextAtom";
import ProjectList from "./ProjectList";
import { additionalProjectLinks } from "./projectsData";
import projectsBackground from "../../styles/images/projects-neon-background.webp";
import "../../styles/ProjectsSection.css";

const ProjectView = () => {
  const carouselRef = useRef(null);
  const carouselId = useId();
  const titleId = useId();

  const exploreProjects = () => {
    const carousel = carouselRef.current;
    if (!carousel) return;
    carousel.focus({ preventScroll: true });
    carousel.scrollIntoView({
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
        ? "auto"
        : "smooth",
      block: "nearest",
    });
  };

  return (
    <ContainerComponent variant="cover">
      <Box component="section" className="projects-section" aria-labelledby={titleId}>
        <div
          className="projects-background"
          style={{ backgroundImage: `url(${projectsBackground})` }}
          aria-hidden="true"
        />
        <div className="projects-overlay" aria-hidden="true" />
        <div className="projects-layout">
          <header className="projects-intro">
            <PrimaryText font="bebasNeue" component="p" fontSize="inherit" className="projects-eyebrow">
              <span aria-hidden="true">//</span> PORTAFOLIO
            </PrimaryText>
            <PrimaryText
              id={titleId}
              font="archivoBlack"
              component="h2"
              fontSize="inherit"
              className="projects-title"
            >
              PROYECTOS
              <span>Y COLABORACIONES</span>
            </PrimaryText>
            <PrimaryText font="bebasNeue" component="p" fontSize="inherit" className="projects-description">
              Desarrollo soluciones web y aplicaciones modernas, combinando diseño,
              rendimiento y experiencia de usuario.
            </PrimaryText>
            <Button
              className="projects-explore"
              onClick={exploreProjects}
              aria-controls={carouselId}
              endIcon={<ArrowForwardRounded />}
            >
              Explorar proyectos
            </Button>

            {additionalProjectLinks.length > 0 && (
              <div className="projects-more">
                <PrimaryText font="girassol" component="p" fontSize="inherit" className="projects-more-label">
                  Más proyectos en línea
                </PrimaryText>
                <div className="projects-more-links">
                  {additionalProjectLinks.map((project) => (
                    <a key={project.id} href={project.link} target="_blank" rel="noopener noreferrer">
                      {project.title}
                      <OpenInNewRounded aria-hidden="true" />
                      <span className="projects-sr-only"> (abre en otra pestaña)</span>
                    </a>
                  ))}
                </div>
              </div>
            )}
          </header>
          <ProjectList carouselRef={carouselRef} id={carouselId} />
        </div>
      </Box>
    </ContainerComponent>
  );
};

export default ProjectView;
