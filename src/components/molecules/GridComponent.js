import React, { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

const GridComponent = () => {
  const [animate, setAnimate] = useState(false);

  const pdfLink =
    "https://puceeduec-my.sharepoint.com/:b:/g/personal/clyamberla_puce_edu_ec/EefvJM3_NwxFpa4l4JMx9DQB8aFc48-vkYri8bpbMOJpyg?e=fAiRGK";

  const abrirPDF = () => {
    window.open(pdfLink, "_blank");
  };

  // 🔹 animación automática al cargar
  useEffect(() => {
    setAnimate(true);
    const timer = setTimeout(() => setAnimate(false), 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Grid
      item
      xs={12}
      md={10}
      sx={{
        textAlign: "center",
        p: {
          xs: 1,
          sm: 1.5,
          md: 3,
        },

        borderRadius: "28px",
        border: "1px solid",
        borderColor: animate ? "rgba(0, 217, 255, 0.45)" : "rgba(255, 255, 255, 0.18)",
        background: animate
          ? "linear-gradient(135deg, rgba(4, 18, 55, 0.95) 0%, rgba(12, 42, 110, 0.88) 48%, rgba(31, 10, 70, 0.98) 100%)"
          : "linear-gradient(135deg, rgba(8, 18, 38, 0.98) 0%, rgba(28, 34, 88, 0.94) 48%, rgba(42, 14, 62, 0.96) 100%)",
        boxShadow: "0 18px 42px rgba(0, 0, 0, 0.32)",

        width: {
          xs: "88%",
          sm: "82%",
          md: "78%",
        },
        maxWidth: "960px",

        minHeight: {
          xs: "70px",
          sm: "90px",
          md: "200px",
        },

        display: "flex",
        alignItems: "center",
        justifyContent: "center",

        mx: "auto",
        mt: {
          xs: 3,
          sm: 5,
          md: 6,
        },

        transition:
          "background 0.6s ease, transform 0.35s ease, border-image 0.4s ease",
        transform: animate ? "translateY(0)" : "translateY(6px)",

        "&:hover": {
          transform: "scale(1.03)",
          borderImage:
            "linear-gradient(135deg, #0d47ff, #1e88e5, #00e5ff) 1",
        },
      }}
    >
      <Typography
        component="h2"
        onClick={abrirPDF}
        sx={{
          fontWeight: 900,
          cursor: "pointer",

          fontSize: {
            xs: "clamp(2rem, 8vw, 3.2rem)",
            sm: "clamp(2.6rem, 6vw, 4.5rem)",
            md: "clamp(3.5rem, 5vw, 7.5rem)",
          },

          // 🌌 degradado azul noche
          background:
            "linear-gradient(135deg, #a641c5, #c926a0,  #c40bd1)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",

          textAlign: "center",
          lineHeight: 1.05,
        }}
      >
        SOBRE MÍ
      </Typography>
    </Grid>
  );
};

export default GridComponent;
