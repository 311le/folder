import { Grid, Box } from "@mui/material";
import ContactDetails from "../../organisms/ContactDetails";
import ContactForm from "../../organisms/ContactForm";

const Formulario = () => {
  return (
    <Box sx={{ width: "100%", maxWidth: 1180, mx: "auto" }}>
      <Grid
        container
        spacing={{ xs: 2.5, md: 4 }}
        direction={{ xs: "column", md: "row" }} // columna en móvil/tablet, fila solo escritorio
        alignItems="stretch"
        justifyContent="center" // centra en móviles
      >
        {/* Contact Details */}
        <Grid item xs={12} md={5} sx={{ display: "flex", justifyContent: "center" }}>
          <ContactDetails />
        </Grid>

        {/* Contact Form */}
        <Grid item xs={12} md={7} sx={{ display: "flex", justifyContent: "center" }}>
          <ContactForm />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Formulario;
