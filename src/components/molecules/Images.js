import { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import laptop from "../styles/images/laptop.jpg";
import GridComponent from "./GridComponent";

const heroSlides = [
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
    position: {
      xs: "50% 55%",
      sm: "50% 50%",
      md: "45% center",
      xl: "40% center",
    },
  },
];

const slideInterval = 5200;

const BackgroundImage = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setActiveSlide((currentSlide) => (currentSlide + 1) % heroSlides.length);
    }, slideInterval);

    return () => window.clearInterval(intervalId);
  }, []);

  return (
    <Box
      component="section"
      sx={{
        width: "100%",
        minHeight: {
          xs: "calc(100svh - 96px)",
          sm: "100svh",
        },
        position: "relative",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        px: { xs: 1, sm: 3, md: 5, lg: 7 },
        py: { xs: 1.5, sm: 4, md: 0 },
        backgroundColor: "#050208",
        isolation: "isolate",
      }}
    >
      {heroSlides.map((slide, index) => (
        <Box
          key={slide.url}
          sx={{
            position: "absolute",
            inset: 0,
            zIndex: -3,
            backgroundImage: `url("${slide.url}")`,
            backgroundSize: {
              xs: index === 2 ? "contain" : "cover",
              sm: "cover",
            },
            backgroundRepeat: "no-repeat",
            backgroundPosition: slide.position,
            opacity: activeSlide === index ? 1 : 0,
            transform: activeSlide === index ? "scale(1)" : "scale(1.035)",
            transition: "opacity 900ms ease, transform 1800ms ease",
          }}
        />
      ))}

      <Box
        sx={{
          position: "absolute",
          inset: 0,
          zIndex: -2,
          background:
            "linear-gradient(90deg, rgba(3, 1, 12, 0.84) 0%, rgba(22, 6, 34, 0.58) 48%, rgba(0, 0, 0, 0.72) 100%)",
        }}
      />

      <Box
        sx={{
          position: "absolute",
          inset: 0,
          zIndex: -1,
          background:
            "radial-gradient(circle at 52% 62%, rgba(8, 225, 164, 0.2), transparent 34%), linear-gradient(180deg, rgba(0,0,0,0.16), rgba(0,0,0,0.68))",
          boxShadow: "inset 0 0 120px rgba(0,0,0,0.65)",
        }}
      />

      <Box
        sx={{
          position: "relative",
          zIndex: 2,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
            gap: {
            xs: 1.25,
            sm: 2.5,
            md: 3,
          },
          width: "100%",
          maxWidth: "1220px",
          mx: "auto",
        }}
      >
        <Box
          sx={{
            backdropFilter: "blur(10px)",
            background:
              "linear-gradient(135deg, rgba(0,0,0,0.56), rgba(52, 11, 62, 0.35))",
            borderRadius: 2,
            p: {
              xs: 1.25,
              sm: 2,
              md: 2.75,
            },
            border: "1px solid rgba(255,255,255,0.16)",
            boxShadow: "0 22px 60px rgba(0,0,0,0.32)",
            maxWidth: { xs: "100%", sm: "fit-content" },
          }}
        >
          <Typography
            sx={{
              fontSize: {
                xs: "clamp(1.8rem, 9vw, 2.9rem)",
                sm: "clamp(2.3rem, 6vw, 4.9rem)",
                md: "clamp(3.8rem, 5.6vw, 6.2rem)",
              },
              fontWeight: 800,
              color: "white",
              letterSpacing: 0,
              lineHeight: 1.08,
            }}
          >
            Full Stack Developer
          </Typography>

          <Typography
            sx={{
              fontSize: {
                xs: "clamp(0.9rem, 4vw, 1.05rem)",
                sm: "clamp(1rem, 2.2vw, 1.3rem)",
              },
              mt: { xs: 0.75, sm: 1 },
              fontWeight: 600,
              background: "linear-gradient(90deg, #ed31f0c7, #08e1a4)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Transformando ideas en soluciones digitales
          </Typography>
        </Box>

        <Box
          sx={{
            width: "100%",
            maxWidth: {
              xs: "100%",
              md: "94%",
              lg: "88%",
            },
          }}
        >
          <GridComponent />
        </Box>
      </Box>

      <Box
        sx={{
          position: "absolute",
          left: 0,
          right: 0,
          bottom: { xs: 12, sm: 18, md: 26 },
          zIndex: 3,
          display: "flex",
          justifyContent: "center",
          gap: 1,
        }}
      >
        {heroSlides.map((slide, index) => (
          <Box
            key={`slide-dot-${slide.url}`}
            component="button"
            type="button"
            aria-label={`Mostrar imagen ${index + 1}`}
            onClick={() => setActiveSlide(index)}
            sx={{
              width: activeSlide === index ? 30 : 11,
              height: 11,
              p: 0,
              border: "1px solid rgba(255,255,255,0.7)",
              borderRadius: 999,
              backgroundColor:
                activeSlide === index ? "#ffbd59" : "rgba(255,255,255,0.28)",
              cursor: "pointer",
              transition:
                "width 250ms ease, background-color 250ms ease, border-color 250ms ease",
              "&:hover": {
                backgroundColor:
                  activeSlide === index ? "#ffbd59" : "rgba(255,255,255,0.55)",
              },
            }}
          />
        ))}
      </Box>
    </Box>
  );
};

export default BackgroundImage;
