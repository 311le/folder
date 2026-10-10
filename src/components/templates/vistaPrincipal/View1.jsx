import React from "react";
import ContainerComponent from "../../atoms/Container";
import BackgroundImage from "../../molecules/Images";
import { Box } from "@mui/material";
import GridComponent from "../../molecules/GridComponent";
import "../../styles/HomePage.css";

const View1 = () => {
  return (
    <ContainerComponent variant="cover">
      <BackgroundImage>
        <Box className="hero-content">
          <GridComponent />
          <Box className="hero-editor" aria-hidden="true">
            <img src="/assets/hero/neon-code-editor.webp" alt="" width="1448" height="1086" decoding="async" />
          </Box>
        </Box>
      </BackgroundImage>
    </ContainerComponent>
  );
};

export default View1;
