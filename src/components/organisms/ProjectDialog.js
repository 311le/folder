import React from "react";
import {
  Dialog,
  DialogActions,
  DialogContent,
  Button,
  Typography,
  Box,
  Chip,
  Stack,
  IconButton,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import CodeIcon from "@mui/icons-material/Code";
import LaunchIcon from "@mui/icons-material/Launch";
import PersonIcon from "@mui/icons-material/Person";
import PrimaryText from "../atoms/TextAtom";

const ProjectDialog = ({ open, onClose, project }) => {
  const title = project?.title ?? "Proyecto sin titulo";
  const desc = project?.desc ?? "Sin descripcion disponible.";

  return (
    <Dialog
      open={open}
      onClose={onClose}
      fullWidth
      maxWidth="md"
      fullScreen={false}
      aria-labelledby="project-dialog-title"
      sx={{
        "& .MuiBackdrop-root": {
          backgroundColor: "rgba(1, 4, 18, 0.78)",
          backdropFilter: "blur(6px)",
        },
        "& .MuiDialog-paper": {
          borderRadius: { xs: 2, sm: 4 },
          background:
            "linear-gradient(145deg, rgba(8, 12, 38, 0.98) 0%, rgba(28, 12, 58, 0.98) 48%, rgba(5, 11, 34, 0.98) 100%)",
          boxShadow: "0 28px 90px rgba(0,0,0,0.58)",
          border: "1px solid rgba(255,255,255,0.14)",
          overflow: "hidden",
          width: { xs: "calc(100vw - 24px)", sm: "min(92vw, 900px)" },
          m: { xs: 1.5, sm: 4 },
          maxHeight: { xs: "calc(100svh - 24px)", sm: "88vh" },
        },
      }}
    >
      <Box
        sx={{
          position: "relative",
          minHeight: { xs: 170, sm: 240, md: 300 },
          display: "flex",
          alignItems: "flex-end",
          p: { xs: 2, sm: 3.5 },
          backgroundImage: project?.img
            ? `linear-gradient(180deg, rgba(2,6,23,0.18), rgba(2,6,23,0.92)), url(${project.img})`
            : "linear-gradient(180deg, rgba(2,6,23,0.18), rgba(2,6,23,0.92))",
          backgroundSize: { xs: "contain", sm: "cover" },
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundColor: "#050816",
        }}
      >
        <IconButton
          aria-label="Cerrar detalles"
          onClick={onClose}
          sx={{
            position: "absolute",
            top: { xs: 10, sm: 16 },
            right: { xs: 10, sm: 16 },
            color: "#fff",
            backgroundColor: "rgba(0,0,0,0.46)",
            border: "1px solid rgba(255,255,255,0.16)",
            "&:hover": {
              backgroundColor: "rgba(0,0,0,0.68)",
            },
          }}
        >
          <CloseIcon />
        </IconButton>

        <Box sx={{ width: "100%" }}>
          <Chip
            icon={<CodeIcon />}
            label="Caso de proyecto"
            sx={{
              mb: 1.5,
              color: "#d9f99d",
              backgroundColor: "rgba(20, 83, 45, 0.58)",
              border: "1px solid rgba(187,247,208,0.28)",
              fontWeight: 800,
            }}
          />
          <PrimaryText
            font="archivoBlack"
            align="left"
            fontSize={{ xs: "20px", sm: "30px", md: "36px" }}
            sx={{
              display: "block",
              lineHeight: 1.12,
              overflowWrap: "anywhere",
            }}
          >
            <span style={{ color: "#ffbd59" }}>{title}</span>
          </PrimaryText>
        </Box>
      </Box>

      <DialogContent
        sx={{
          px: { xs: 2, sm: 3.5 },
          py: { xs: 2, sm: 3 },
        }}
      >
        <Box
          sx={{
            background:
              "linear-gradient(135deg, rgba(255,255,255,0.09), rgba(255,255,255,0.04))",
            borderRadius: 3,
            p: { xs: 1.75, sm: 2.5 },
            border: "1px solid rgba(255,255,255,0.12)",
            boxShadow: "inset 0 1px 0 rgba(255,255,255,0.08)",
          }}
        >
          <Typography
            sx={{
              fontSize: { xs: "14px", sm: "16px", md: "18px" },
              lineHeight: 1.72,
              color: "#E5E7EB",
              fontFamily: "DM Serif Text, serif",
              textAlign: { xs: "left", sm: "justify" },
              overflowWrap: "anywhere",
            }}
          >
            {desc}
          </Typography>

          {project?.rol && (
            <Stack
              direction="row"
              alignItems="center"
              spacing={1}
              sx={{
                mt: 2.5,
                color: "#F472B6",
              }}
            >
              <PersonIcon sx={{ color: "#4ADE80", fontSize: 22 }} />
              <Typography
                sx={{
                  fontSize: { xs: "13px", sm: "15px", md: "17px" },
                  fontWeight: 800,
                }}
              >
                Rol: {project.rol}
              </Typography>
            </Stack>
          )}

          {project?.etiquetas?.length > 0 && (
            <Stack
              direction="row"
              sx={{
                flexWrap: "wrap",
                mt: 1.5,
                gap: 1,
              }}
            >
              {project.etiquetas.map((etiqueta) => (
                <Chip
                  key={etiqueta}
                  label={etiqueta}
                  size="small"
                  sx={{
                    backgroundColor: "rgba(59,130,246,0.16)",
                    color: "#BFDBFE",
                    border: "1px solid rgba(147,197,253,0.26)",
                    fontWeight: 700,
                  }}
                />
              ))}
            </Stack>
          )}
        </Box>
      </DialogContent>

      <DialogActions
        sx={{
          justifyContent: "space-between",
          gap: 1.5,
          px: { xs: 2, sm: 3.5 },
          pb: { xs: 2, sm: 3 },
          pt: 0,
          flexWrap: "wrap",
          "& .MuiButton-root": {
            flex: { xs: "1 1 100%", sm: "0 0 auto" },
          },
        }}
      >
        {project?.link && (
          <Button
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            endIcon={<LaunchIcon />}
            sx={{
              px: 3,
              py: 1,
              borderRadius: 2,
              background: "linear-gradient(135deg, #2563eb, #7c3aed)",
              color: "white",
              fontWeight: "bold",
              fontSize: { xs: "12px", sm: "14px" },
              textTransform: "none",
              boxShadow: "0 10px 24px rgba(37,99,235,0.28)",
              "&:hover": {
                background: "linear-gradient(135deg, #1d4ed8, #6d28d9)",
              },
            }}
          >
            Ver sitio
          </Button>
        )}
        <Button
          onClick={onClose}
          sx={{
            px: 3,
            py: 1,
            borderRadius: 2,
            border: "1px solid rgba(255,255,255,0.18)",
            color: "#FACC15",
            fontWeight: "bold",
            fontSize: { xs: "12px", sm: "14px" },
            textTransform: "none",
            backgroundColor: "rgba(250,204,21,0.08)",
            transition: "transform 0.3s ease",
            "&:hover": {
              transform: "scale(1.05)",
              backgroundColor: "rgba(250,204,21,0.16)",
            },
          }}
        >
          Cerrar
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ProjectDialog;
