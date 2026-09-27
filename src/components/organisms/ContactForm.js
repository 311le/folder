import React, { useRef, useState } from "react";
import { Box, TextField, Button } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import PrimaryText from "../atoms/TextAtom";
import emailjs from "emailjs-com";

const ContactForm = () => {
  const formRef = useRef();
  const [formData, setFormData] = useState({
    name: "",
    correo: "",
    time: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formattedTime = new Date().toLocaleString();
    if (formRef.current?.time) formRef.current.time.value = formattedTime;

    emailjs
      .sendForm(
        "service_anacospii",
        "template_a265904",
        formRef.current,
        "ziZVh5aZs3dIgmulq"
      )
      .then(() => {
        alert("Mensaje enviado correctamente");
        setFormData({ name: "", correo: "", time: "", message: "" });
      })
      .catch(() => alert("Error al enviar el mensaje"));
  };

  const inputStyle = {
    fontFamily: '"DM Serif Text", serif',
    fontStyle: "italic",
    color: "#ffffff",
  };

  const labelSx = {
    display: "block",
    color: "#d6b3ff",
    textAlign: "left",
    letterSpacing: 0.4,
    mb: 0.5,
  };

  const fieldSx = {
    "& .MuiOutlinedInput-root": {
      borderRadius: 2,
      backgroundColor: "rgba(255,255,255,0.07)",
      transition: "background-color 0.25s ease, box-shadow 0.25s ease",
      "& fieldset": {
        borderColor: "rgba(214,179,255,0.26)",
      },
      "&:hover": {
        backgroundColor: "rgba(255,255,255,0.1)",
      },
      "&:hover fieldset": {
        borderColor: "rgba(255,189,89,0.7)",
      },
      "&.Mui-focused": {
        backgroundColor: "rgba(255,255,255,0.12)",
        boxShadow: "0 0 0 3px rgba(255,189,89,0.12)",
      },
      "&.Mui-focused fieldset": {
        borderColor: "#ffbd59",
      },
    },
    "& .MuiInputBase-input": {
      p: { xs: "10px 12px", sm: "12px 14px" },
    },
  };

  return (
    <Box
      sx={{
        position: "relative",
        overflow: "hidden",
        width: "100%",
        maxWidth: { xs: "100%", sm: 520, md: 620 },
        mx: "auto",
        p: { xs: 2, sm: 3, md: 3.5 },
        borderRadius: 2,
        border: "1px solid rgba(255,255,255,0.12)",
        background:
          "linear-gradient(145deg, rgba(8,18,38,0.98) 0%, rgba(28,34,88,0.94) 48%, rgba(42,14,62,0.96) 100%)",
        boxShadow: {
          xs: "0 14px 32px rgba(0,0,0,0.38)",
          md: "0 22px 55px rgba(0,0,0,0.45)",
        },
        display: "flex",
        flexDirection: "column",
        gap: { xs: 2, sm: 2.5 },
        textAlign: "center",
        minHeight: { md: "100%" },
        "&::before": {
          content: '""',
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(120deg, rgba(8,225,164,0.12), transparent 36%, rgba(255,189,89,0.14))",
          pointerEvents: "none",
        },
      }}
    >
      <PrimaryText
        font="archivoBlack"
        align="center"
        fontSize={{ xs: "17px", sm: "21px", md: "26px", lg: "30px" }}
        sx={{ position: "relative", lineHeight: 1.15 }}
      >
        <span style={{ color: "#ffbd59" }}>ENVIANOS UN MENSAJE</span>
      </PrimaryText>

      <Box
        component="form"
        ref={formRef}
        onSubmit={handleSubmit}
        sx={{
          position: "relative",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          gap: { xs: 1.4, sm: 1.6 },
        }}
      >
        <input type="hidden" name="time" value={formData.time} />

        <Box>
          <PrimaryText
            font="dmSerifTextRegularItalic"
            fontSize={{ xs: 13, sm: 15 }}
            sx={labelSx}
          >
            NOMBRE
          </PrimaryText>

          <TextField
            fullWidth
            name="name"
            value={formData.name}
            onChange={handleChange}
            variant="outlined"
            size="small"
            placeholder="Tu nombre"
            InputProps={{ style: { ...inputStyle, fontSize: 16 } }}
            sx={fieldSx}
          />
        </Box>

        <Box>
          <PrimaryText
            font="dmSerifTextRegularItalic"
            fontSize={{ xs: 13, sm: 15 }}
            sx={labelSx}
          >
            CORREO ELECTRONICO
          </PrimaryText>

          <TextField
            fullWidth
            name="correo"
            value={formData.correo}
            onChange={handleChange}
            variant="outlined"
            size="small"
            placeholder="tu@email.com"
            InputProps={{ style: { ...inputStyle, fontSize: 16 } }}
            sx={fieldSx}
          />
        </Box>

        <Box>
          <PrimaryText
            font="dmSerifTextRegularItalic"
            fontSize={{ xs: 13, sm: 15 }}
            sx={labelSx}
          >
            MENSAJE
          </PrimaryText>

          <TextField
            fullWidth
            name="message"
            value={formData.message}
            onChange={handleChange}
            multiline
            rows={4}
            variant="outlined"
            placeholder="Cuéntame sobre tu idea o proyecto"
            InputProps={{ style: { ...inputStyle, fontSize: 16 } }}
            sx={fieldSx}
          />
        </Box>

        <Box sx={{ display: "flex", justifyContent: "center", mt: { xs: 0.5, sm: 1 } }}>
          <Button
            type="submit"
            endIcon={<SendIcon />}
            sx={{
              width: { xs: "100%", sm: "auto" },
              minWidth: { sm: 220 },
              px: 4,
              py: 1.15,
              borderRadius: 2,
              background: "linear-gradient(135deg, #ffbd59, #08e1a4)",
              color: "#101827",
              fontFamily: '"Archivo Black", sans-serif',
              fontSize: { xs: 14, sm: 15, md: 16 },
              textTransform: "none",
              boxShadow: "0 10px 22px rgba(8,225,164,0.25)",
              transition:
                "transform 0.25s ease, box-shadow 0.25s ease, filter 0.25s ease",
              "&:hover": {
                transform: "translateY(-2px)",
                filter: "brightness(1.05)",
                boxShadow: "0 14px 30px rgba(255,189,89,0.32)",
              },
              "&:active": {
                transform: "translateY(0)",
              },
            }}
          >
            Enviar Mensaje
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default ContactForm;
