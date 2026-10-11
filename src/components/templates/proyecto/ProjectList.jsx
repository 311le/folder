import { useEffect, useId, useRef, useState } from "react";
import { IconButton, useMediaQuery } from "@mui/material";
import PauseRounded from "@mui/icons-material/PauseRounded";
import PlayArrowRounded from "@mui/icons-material/PlayArrowRounded";
import ChevronLeftRounded from "@mui/icons-material/ChevronLeftRounded";
import ChevronRightRounded from "@mui/icons-material/ChevronRightRounded";
import PrimaryText from "../../atoms/TextAtom";
import ProjectCard from "../../molecules/ProjectCard";
import ProjectDialog from "../../organisms/ProjectDialog";
import { projects } from "./projectsData";

const getPosition = (index, activeIndex, count) => {
  if (index === activeIndex) return "active";
  // Two projects occupy distinct positions; never duplicate a slide.
  if (count === 2) return index < activeIndex ? "previous" : "next";
  if (index === (activeIndex + 1) % count) return "next";
  if (count > 2 && index === (activeIndex - 1 + count) % count) return "previous";
  return "hidden";
};

const ProjectList = ({ carouselRef, id, items = projects }) => {
  const generatedId = useId();
  const carouselId = id || generatedId;
  const localRef = useRef(null);
  const regionRef = carouselRef || localRef;
  const touchStart = useRef(null);
  const suppressClickUntil = useRef(0);
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [selectedProject, setSelectedProject] = useState(null);
  const [openDialog, setOpenDialog] = useState(false);
  const [paused, setPaused] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [focused, setFocused] = useState(false);
  const [touching, setTouching] = useState(false);
  const [visible, setVisible] = useState(false);
  const [pageVisible, setPageVisible] = useState(true);
  const reduceMotion = useMediaQuery("(prefers-reduced-motion: reduce)");
  const count = items.length;
  const current = count ? activeIndex % count : 0;
  const canNavigate = count > 1;
  const autoPlaying = canNavigate && !reduceMotion && !paused && !hovered &&
    !focused && !touching && !openDialog && visible && pageVisible;

  useEffect(() => {
    const updateVisibility = () => setPageVisible(!document.hidden);
    updateVisibility();
    document.addEventListener("visibilitychange", updateVisibility);
    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.25 }
    );
    if (regionRef.current) observer.observe(regionRef.current);
    return () => {
      observer.disconnect();
      document.removeEventListener("visibilitychange", updateVisibility);
    };
  }, [regionRef]);

  useEffect(() => {
    if (!autoPlaying) return;
    const timer = window.setTimeout(() => {
      setDirection(1);
      setActiveIndex((index) => (index + 1) % count);
    }, 5000);
    return () => window.clearTimeout(timer);
  }, [autoPlaying, activeIndex, count]);

  const move = (direction) => {
    if (canNavigate) {
      setDirection(direction);
      setActiveIndex((index) => (index + direction + count) % count);
    }
  };

  const selectCard = (index) => {
    if (index !== current) setDirection(index > current ? 1 : -1);
    setActiveIndex(index);
    regionRef.current?.focus({ preventScroll: true });
  };

  const handleKeyDown = (event) => {
    if (!canNavigate || event.altKey || event.ctrlKey || event.metaKey) return;
    if (!["ArrowLeft", "ArrowRight", "Home", "End"].includes(event.key)) return;
    event.preventDefault();
    if (event.key === "ArrowLeft") move(-1);
    if (event.key === "ArrowRight") move(1);
    if (event.key === "Home") selectCard(0);
    if (event.key === "End") selectCard(count - 1);
    regionRef.current?.focus({ preventScroll: true });
  };

  const handleTouchStart = (event) => {
    setTouching(true);
    touchStart.current = event.touches.length === 1
      ? { x: event.touches[0].clientX, y: event.touches[0].clientY }
      : null;
  };

  const handleTouchEnd = (event) => {
    setTouching(false);
    const start = touchStart.current;
    touchStart.current = null;
    if (!start || !canNavigate || !event.changedTouches.length) return;
    const deltaX = event.changedTouches[0].clientX - start.x;
    const deltaY = event.changedTouches[0].clientY - start.y;
    if (Math.abs(deltaX) > 45 && Math.abs(deltaX) > Math.abs(deltaY) * 1.25) {
      suppressClickUntil.current = Date.now() + 350;
      move(deltaX < 0 ? 1 : -1);
    }
  };

  const openDetails = (project) => {
    setSelectedProject(project);
    setOpenDialog(true);
  };

  return (
    <>
      <div
        ref={regionRef}
        id={carouselId}
        className={`projects-carousel${count === 1 ? " projects-carousel-single" : ""}`}
        style={{ "--project-entry-offset": direction < 0 ? "-32px" : "32px" }}
        role="region"
        aria-roledescription="carrusel"
        aria-label="Proyectos y colaboraciones"
        aria-describedby={canNavigate ? `${carouselId}-instructions` : undefined}
        tabIndex={0}
        onKeyDown={handleKeyDown}
        onPointerEnter={(event) => { if (event.pointerType === "mouse") setHovered(true); }}
        onPointerLeave={() => setHovered(false)}
        onFocusCapture={() => setFocused(true)}
        onBlurCapture={(event) => {
          if (!event.currentTarget.contains(event.relatedTarget)) setFocused(false);
        }}
      >
        {canNavigate && (
          <p id={`${carouselId}-instructions`} className="projects-sr-only">
            Usa las flechas izquierda y derecha para cambiar de proyecto,
            Inicio y Fin para ir al primero o al último. También puedes deslizar las tarjetas.
          </p>
        )}
        <div
          className="projects-stage"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          onTouchCancel={() => { touchStart.current = null; setTouching(false); }}
          onClickCapture={(event) => {
            if (Date.now() < suppressClickUntil.current) {
              event.preventDefault();
              event.stopPropagation();
            }
          }}
        >
          {items.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              total={count}
              position={getPosition(index, current, count)}
              onSelect={() => selectCard(index)}
              onOpenDetails={() => openDetails(project)}
            />
          ))}
          {!count && (
            <PrimaryText font="girassol" component="p" className="projects-empty">
              Próximamente, nuevos proyectos.
            </PrimaryText>
          )}
        </div>

        {canNavigate && (
          <>
            <IconButton
              className="projects-arrow projects-arrow-previous"
              aria-label="Proyecto anterior"
              onClick={() => move(-1)}
            >
              <ChevronLeftRounded />
            </IconButton>
            <IconButton
              className="projects-arrow projects-arrow-next"
              aria-label="Proyecto siguiente"
              onClick={() => move(1)}
            >
              <ChevronRightRounded />
            </IconButton>
          </>
        )}

        {count > 0 && (
          <div className="projects-carousel-footer">
            {canNavigate && !reduceMotion && (
              <IconButton
                className="projects-autoplay"
                aria-label={paused ? "Activar avance automático" : "Pausar avance automático"}
                onClick={() => setPaused((value) => !value)}
              >
                {paused ? <PlayArrowRounded /> : <PauseRounded />}
              </IconButton>
            )}
            {canNavigate && (
              <div className="projects-indicators" role="group" aria-label="Seleccionar proyecto">
                {items.map((project, index) => (
                  <button
                    key={project.id}
                    type="button"
                    className="projects-indicator"
                    aria-label={`Ir al proyecto ${index + 1}: ${project.name || project.title}`}
                    aria-current={index === current ? "true" : undefined}
                    onClick={() => selectCard(index)}
                  >
                    <span />
                  </button>
                ))}
              </div>
            )}
            <PrimaryText font="bebasNeue" component="p" fontSize="inherit" className="projects-counter" aria-hidden="true">
              <span>{String(current + 1).padStart(2, "0")}</span>
              <span className="projects-counter-line" />
              {String(count).padStart(2, "0")}
            </PrimaryText>
          </div>
        )}
        <p className="projects-sr-only" aria-live={autoPlaying ? "off" : "polite"} aria-atomic="true">
          {count ? `Proyecto ${current + 1} de ${count}: ${items[current].title}` : "No hay proyectos disponibles"}
        </p>
      </div>
      <ProjectDialog
        open={openDialog}
        onClose={() => setOpenDialog(false)}
        project={selectedProject}
      />
    </>
  );
};

export default ProjectList;
