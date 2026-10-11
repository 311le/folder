import { Button, Chip, IconButton } from "@mui/material";
import ArrowForwardRounded from "@mui/icons-material/ArrowForwardRounded";
import OpenInNewRounded from "@mui/icons-material/OpenInNewRounded";
import PrimaryText from "../atoms/TextAtom";

const ProjectCard = ({ project, index, total, position, onSelect, onOpenDetails }) => {
  const active = position === "active";
  const visible = position !== "hidden";

  return (
    <article
      className={`project-card project-card-${position}`}
      aria-roledescription="diapositiva"
      aria-label={`${index + 1} de ${total}: ${project.name || project.title}`}
      aria-hidden={visible ? undefined : true}
    >
      <div className="project-card-content" aria-hidden={active ? undefined : true}>
        <div className="project-card-topline">
          <PrimaryText font="bebasNeue" fontSize="inherit" className="project-card-number">
            {String(index + 1).padStart(2, "0")}
          </PrimaryText>
          {project.collaboration && (
            <PrimaryText font="girassol" fontSize="inherit" className="project-card-category">
              Colaborativo
            </PrimaryText>
          )}
          {project.link && (
            <IconButton
              className="project-card-external"
              component="a"
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              tabIndex={active ? 0 : -1}
              aria-label={`Abrir ${project.name || project.title} en otra pestaña`}
            >
              <OpenInNewRounded />
            </IconButton>
          )}
        </div>

        <button
          type="button"
          className="project-card-preview"
          tabIndex={active ? 0 : -1}
          onClick={onOpenDetails}
          aria-label={`Ver detalles de ${project.name || project.title}`}
          aria-haspopup="dialog"
        >
          <img src={project.img} alt={`Captura de ${project.title}`} loading="lazy" decoding="async" draggable="false" />
        </button>

        <div className="project-card-body">
          <PrimaryText font="bebasNeue" component="h3" fontSize="inherit" className="project-card-title">
            {project.name || project.title}
          </PrimaryText>
          <PrimaryText font="bebasNeue" component="p" fontSize="inherit" className="project-card-description">
            {project.summary || project.desc}
          </PrimaryText>
          <div className="project-card-technologies" aria-label="Tecnologías">
            {(project.previewTechnologies || project.etiquetas)?.map((technology) => (
              <Chip key={technology} label={technology} size="small" className="project-technology-chip" />
            ))}
          </div>
          <Button
            className="project-card-details"
            onClick={onOpenDetails}
            tabIndex={active ? 0 : -1}
            aria-haspopup="dialog"
            endIcon={<ArrowForwardRounded />}
          >
            Ver detalles
          </Button>
        </div>
      </div>
      {!active && visible && (
        <button
          type="button"
          className="project-card-select"
          onClick={onSelect}
          aria-label={`Seleccionar ${project.name || project.title}`}
        />
      )}
    </article>
  );
};

export default ProjectCard;
