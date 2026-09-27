import React from "react";
import Formulario from "./Formulario";
import ContainerComponent from "../../atoms/Container";
import { Box } from "@mui/material";

const ContactPage = () => {
  return (
    <ContainerComponent watermark="pg">
      <Box
        sx={{
          width: "100%",
          px: { xs: 0.5, sm: 2, md: 4 },
          py: { xs: 2, sm: 4, md: 6 },
        }}
      >
        <Formulario />
      </Box>
    </ContainerComponent>
  );
};

export default ContactPage;
