import React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import ContainerComponent from "../../atoms/Container";
import PrimaryText from "../../atoms/TextAtom";
import ProjectList from "./ProjectList";

const ProjectView = () => {
  return (
    <ContainerComponent watermark="pg">
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "100%",
        }}
      >
        {/* HEADER */}
        <Box
          sx={{
            width: "100%",
            textAlign: "center",
            py: { xs: 2, sm: 3, md: 4 },
            mb: { xs: 2, sm: 3 },
            borderRadius: 2,
            background:
              "linear-gradient(180deg, rgba(128,0,128,0.8), rgba(128,0,128,0.3))",
          }}
        >
          <PrimaryText
            font="archivoBlack"
            align="center"
            fontSize={{ xs: "18px", sm: "24px", md: "32px", lg: "36px" }}
          >
            <span style={{ color: "#ffbd59" }}>
              PROYECTOS Y COLABORACIONES
            </span>
          </PrimaryText>
        </Box>

        {/* GRID CONTENEDOR */}
        <Grid
          container
          spacing={{ xs: 2, sm: 3, md: 4 }}
          justifyContent="center"
          alignItems="stretch"
          sx={{ width: "100%" }}
        >
          <ProjectList />
        </Grid>
      </Box>
    </ContainerComponent>
  );
};

export default ProjectView;
