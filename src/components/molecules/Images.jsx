import { useEffect, useState } from "react";
import { Box, IconButton, useMediaQuery } from "@mui/material";
import PauseRounded from "@mui/icons-material/PauseRounded";
import PlayArrowRounded from "@mui/icons-material/PlayArrowRounded";
import laptop from "../styles/images/laptop.jpg";

export const heroSlides = [
  {
    url: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1920&q=85",
    position: { xs: "52% 50%", sm: "50% center", md: "45% center" },
  },
  {
    url: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1920&q=85",
    position: { xs: "58% 50%", sm: "50% center", md: "center center" },
  },
  {
    url: laptop,
    position: { xs: "50% 55%", sm: "50% 50%", md: "45% center", xl: "40% center" },
  },
  {
    url: "/assets/hero/neon-background.webp",
    position: { xs: "60% center", sm: "55% center", md: "center center" },
  },
];

const initialSlide = 0;

const BackgroundImage = ({ children }) => {
  const reduceMotion = useMediaQuery("(prefers-reduced-motion: reduce)");
  const [activeSlide, setActiveSlide] = useState(initialSlide);
  const [loadedSlides, setLoadedSlides] = useState([initialSlide]);
  const [readySlides, setReadySlides] = useState([]);
  const [displayedSlide, setDisplayedSlide] = useState(initialSlide);
  const [paused, setPaused] = useState(false);
  const [focused, setFocused] = useState(false);
  const [visible, setVisible] = useState(!document.hidden);

  useEffect(() => {
    if (readySlides.includes(activeSlide)) setDisplayedSlide(activeSlide);
  }, [activeSlide, readySlides]);

  useEffect(() => {
    const onVisibilityChange = () => setVisible(!document.hidden);
    document.addEventListener("visibilitychange", onVisibilityChange);
    return () => document.removeEventListener("visibilitychange", onVisibilityChange);
  }, []);

  // Prioritize the initial background, then prepare only the next slide.
  useEffect(() => {
    if (reduceMotion || paused || focused || !visible) return;
    const nextSlide = (activeSlide + 1) % heroSlides.length;
    const preloadId = window.setTimeout(() => {
      setLoadedSlides((loaded) => loaded.includes(nextSlide) ? loaded : [...loaded, nextSlide]);
    }, 1200);
    const intervalId = window.setInterval(() => setActiveSlide(nextSlide), 5200);
    return () => {
      window.clearTimeout(preloadId);
      window.clearInterval(intervalId);
    };
  }, [activeSlide, reduceMotion, paused, focused, visible]);

  const selectSlide = (index) => {
    setLoadedSlides((loaded) => loaded.includes(index) ? loaded : [...loaded, index]);
    setActiveSlide(index);
  };

  return (
    <Box component="section" className="neon-hero" aria-label="Presentación de Cristian Yamberla"
      onFocusCapture={() => setFocused(true)}
      onBlurCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) setFocused(false);
      }}>
      <Box className="hero-backgrounds" aria-hidden="true">
        {heroSlides.map((slide, index) => loadedSlides.includes(index) && (
          <Box component="img" key={slide.url} src={slide.url} alt="" width={1920} height={1080}
            fetchpriority={index === initialSlide ? "high" : "low"} decoding="async"
            onLoad={() => setReadySlides((ready) => ready.includes(index) ? ready : [...ready, index])}
            className={displayedSlide === index ? "hero-background is-active" : "hero-background"}
            sx={{ objectPosition: slide.position, objectFit: { xs: index === 2 ? "contain" : "cover", sm: "cover" } }} />
        ))}
      </Box>
      <Box className="hero-overlay" aria-hidden="true" />
      {children}
      <Box className="hero-footer">
        <span className="hero-footer-note">DISEÑO · CÓDIGO · EXPERIENCIAS</span>
        <Box className="hero-carousel-controls" role="group" aria-label="Fondos de la portada">
          {heroSlides.map((slide, index) => (
            <button key={slide.url} type="button" className="hero-slide-control"
              aria-label={`Mostrar imagen ${index + 1}`} aria-pressed={activeSlide === index}
              onClick={() => selectSlide(index)}><span /></button>
          ))}
          {!reduceMotion && <IconButton className="hero-pause" size="small"
            aria-label={paused ? "Reanudar carrusel" : "Pausar carrusel"}
            onClick={() => setPaused((value) => !value)}>
            {paused ? <PlayArrowRounded /> : <PauseRounded />}
          </IconButton>}
        </Box>
      </Box>
    </Box>
  );
};

export default BackgroundImage;
