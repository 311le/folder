import React, { useState } from "react";
import { Paper, Grid, Box } from "@mui/material";
import { FaJava, FaPython, FaNodeJs } from "react-icons/fa";
import { SiSqlite } from "react-icons/si";
import PrimaryText from "../../atoms/TextAtom";
import Modal from "../../organisms/Modal";

const backendTechnologies = [
  {
    name: "Java",
    icon: FaJava,
    color: "#007396",
    description:
      "He trabajado con Java en proyectos academicos, aprendiendo POO y patrones de diseno.",
  },
  {
    name: "Python",
    icon: FaPython,
    color: "#306998",
    description: "Experiencia en scripts, automatizaciones y aplicaciones con GUI.",
  },
  {
    name: "Node.js",
    icon: FaNodeJs,
    color: "#68A063",
    description:
      "Construccion de APIs REST con Node.js y Express con arquitectura modular.",
  },
  {
    name: "SQL",
    icon: SiSqlite,
    color: "#034694",
    description: "Consultas CRUD y relaciones basicas en bases de datos relacionales.",
  },
];

const ProgrammingLanguages = () => {
  const [openModal, setOpenModal] = useState(false);
  const [selectedFramework, setSelectedFramework] = useState(null);

  const handleOpenModal = (skill) => {
    setSelectedFramework(skill);
    setOpenModal(true);
  };

  return (
    <Box
      sx={{
        width: { xs: "100%", sm: "92%", md: "80%", lg: "70%" },
        mx: "auto",
        mt: { xs: 0.5, sm: 2, md: 1, lg: 0 },
        p: { xs: 2, sm: 2.5, md: 3 },
        borderRadius: 2,
        textAlign: "center",
        background:
          "linear-gradient(145deg, rgba(20, 7, 34, 0.92), rgba(123, 31, 82, 0.82))",
        border: "1px solid rgba(255,255,255,0.18)",
        boxShadow:
          "0 18px 42px rgba(0,0,0,0.36), inset 0 1px 0 rgba(255,255,255,0.16)",
      }}
    >
      <PrimaryText
        font="dmSerifTextRegularItalic"
        align="center"
        fontSize={{ xs: "26px", sm: "30px", md: "36px", lg: "46px" }}
        sx={{
          display: "block",
          lineHeight: 1,
          mb: { xs: 1.5, sm: 1 },
        }}
      >
        <span style={{ color: "#40E0D0" }}>BACKEND</span>
      </PrimaryText>

      <Grid
        container
        spacing={{ xs: 1.5, sm: 2, md: 3 }}
        justifyContent="center"
      >
        {backendTechnologies.map((skill) => {
          const Icon = skill.icon;

          return (
            <Grid item xs={6} sm={3} md={2} key={skill.name}>
              <Paper
                onClick={() => handleOpenModal(skill)}
                sx={{
                  aspectRatio: "1 / 1",
                  minHeight: { xs: 112, sm: "auto" },
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  p: { xs: 1.25, sm: 1 },
                  borderRadius: 2,
                  backgroundColor: skill.color,
                  border: "1px solid rgba(255,255,255,0.45)",
                  boxShadow: "0 10px 22px rgba(0,0,0,0.32)",
                  cursor: "pointer",
                  transition: "transform 0.3s, box-shadow 0.3s",
                  "&:hover": {
                    transform: "scale(1.05)",
                    boxShadow: "0 16px 30px rgba(0,0,0,0.42)",
                  },
                }}
              >
                <Icon style={{ fontSize: "clamp(34px, 10vw, 48px)" }} />

                <PrimaryText
                  font="bebasNeue"
                  align="center"
                  fontSize={{ xs: "1rem", sm: "0.82rem", md: "0.9rem" }}
                  sx={{
                    display: "block",
                    mt: 0.75,
                    lineHeight: 1,
                  }}
                >
                  <span style={{ color: "black" }}>{skill.name}</span>
                </PrimaryText>
              </Paper>
            </Grid>
          );
        })}
      </Grid>

      {selectedFramework && (
        <Modal
          open={openModal}
          onClose={() => setOpenModal(false)}
          framework={selectedFramework}
        />
      )}
    </Box>
  );
};

export default ProgrammingLanguages;
