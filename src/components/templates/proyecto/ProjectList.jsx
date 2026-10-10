import { useState } from "react";
import Grid from "@mui/material/Grid";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import {
  Card,
  CardContent,
  CardMedia,
  Chip,
  Box,
  Stack,
  Button,
} from "@mui/material";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import PersonIcon from "@mui/icons-material/Person";
import ProyectoUno from "../../styles/images/proyectouno.jpg";
import ProjectDialog from "../../organisms/ProjectDialog";
import PrimaryText from "../../atoms/TextAtom";

const projects = [
  {
    img: ProyectoUno,
    title: "AnacosPii - Sitio web de bordados",
    desc:
      "Un local comercial tradicional de bordados enfrentaba problemas al contar con una tienda local su intencion era expandirse al ambito digital. Para ello creamos un sitio web con informacion del local y un catalogo digital de sus disenos. Utilice React con Material-UI en el front, desarrollando componentes reutilizables y escalables. En el backend utilice SaaS con un servicio de email.js que almacenara todos los formularios de pedido. Ademas, se implemento la autenticacion de reCAPTCHA para controlar los formularios.",
    link: "https://webpi.vercel.app",
    github: "https://github.com/tu-repo",
    rol: "Desarrollador Frontend",
    etiquetas: ["React", "Material-UI", "SaaS", "HTML&CSS"],
  },
];

const getPreviewText = (text, wordLimit = 5) =>
  text.split(/\s+/).slice(0, wordLimit).join(" ");

const ProjectList = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md"));
  const isDesktop = useMediaQuery(theme.breakpoints.up("lg"));

  const [openDialog, setOpenDialog] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const handleOpenDialog = (project) => {
    setSelectedProject(project);
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
    setSelectedProject(null);
  };

  return (
    <>
      <Grid
        container
        spacing={isMobile ? 2 : 4}
        justifyContent="center"
        sx={{
          width: "100%",
          mt: isDesktop ? "1vh" : 0,
        }}
      >
        {projects.map((project, index) => (
          <Grid
            item
            key={project.title}
            xs={12}
            sm={10}
            md={8}
            lg={10}
            sx={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Box
              sx={{
                width: "100%",
                maxWidth: isDesktop ? "940px" : isTablet ? "620px" : "100%",
              }}
            >
              <Card
                sx={{
                  width: "100%",
                  borderRadius: isMobile ? 3 : 5,
                  background:
                    "radial-gradient(circle at top, rgba(43, 24, 33, 0.85) 0%, rgba(43, 24, 33, 0.7) 35%, rgba(0, 0, 255, 0.15) 65%, rgba(0,0,0,1) 100%)",
                  color: "#fff",
                  boxShadow: isMobile
                    ? "0 12px 32px rgba(124,58,237,0.35)"
                    : "0 15px 50px rgba(124,58,237,0.45)",
                  border: "1px solid rgba(186,104,200,0.35)",
                  transition: "transform 0.35s ease, box-shadow 0.35s ease",
                  "&:hover": {
                    transform: isMobile ? "none" : "scale(1.03)",
                    boxShadow: "0 25px 70px rgba(124,58,237,0.55)",
                  },
                }}
              >
                <Box sx={{ position: "relative" }}>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Abrir ${project.title}`}
                    style={{
                      display: "block",
                      position: "relative",
                      overflow: "hidden",
                      background: "rgba(0,0,0,0.35)",
                    }}
                  >
                    <CardMedia
                      component="img"
                      image={project.img}
                      alt={project.title}
                      sx={{
                        width: "100%",
                        aspectRatio: {
                          xs: "16 / 10",
                          sm: "16 / 9",
                          lg: "21 / 9",
                        },
                        height: "auto",
                        borderTopLeftRadius: isMobile ? "12px" : 20,
                        borderTopRightRadius: isMobile ? "12px" : 20,
                        objectFit: "contain",
                        backgroundColor: "#050816",
                        cursor: "pointer",
                        transition: "transform 0.4s ease",
                        "&:hover": {
                          transform:
                            isMobile || isDesktop ? "none" : "scale(1.05)",
                        },
                      }}
                    />

                    {isMobile && (
                      <Box
                        sx={{
                          position: "absolute",
                          left: 0,
                          right: 0,
                          bottom: 0,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between",
                          px: 1.5,
                          py: 1,
                          color: "#fff",
                          background:
                            "linear-gradient(180deg, rgba(0,0,0,0), rgba(0,0,0,0.75))",
                          fontSize: "12px",
                          fontWeight: 800,
                        }}
                      >
                        <span>Ver proyecto</span>
                        <OpenInNewIcon sx={{ fontSize: 16 }} />
                      </Box>
                    )}
                  </a>

                  <Chip
                    label="Colaborativo"
                    sx={{
                      position: "absolute",
                      top: isMobile ? 10 : 16,
                      right: isMobile ? 10 : 16,
                      backgroundColor: "#9333ea",
                      color: "#fff",
                      fontWeight: "bold",
                      boxShadow: "0 4px 12px rgba(147,51,234,0.6)",
                      fontSize: isDesktop ? "16px" : isMobile ? "10px" : "12px",
                      height: isMobile ? 24 : 32,
                    }}
                  />
                </Box>

                <CardContent
                  sx={{
                    p: 0,
                    background:
                      "linear-gradient(180deg, rgba(31,41,55,0.92), rgba(15,23,42,0.96))",
                    borderTop: "1px solid rgba(255,255,255,0.1)",
                    "&:last-child": {
                      pb: 0,
                    },
                  }}
                >
                  <Box sx={{ p: { xs: 1.5, sm: 3, lg: 4 } }}>
                    <PrimaryText
                      font="girassol"
                      fontSize={
                        isMobile ? "18px" : isTablet ? "22px" : "36px"
                      }
                      sx={{
                        display: "block",
                        fontWeight: "bold",
                        lineHeight: 1.15,
                        mb: isMobile ? 0 : 1,
                        overflowWrap: "anywhere",
                      }}
                    >
                      <span style={{ color: "#E9D5FF" }}>{project.title}</span>
                    </PrimaryText>

                  {!isMobile && (
                    <Box
                      sx={{
                        mt: 1,
                        display: "flex",
                        alignItems: "baseline",
                        flexWrap: "wrap",
                        gap: 0.75,
                      }}
                    >
                      <PrimaryText
                        font="dmSerifTextRegularItalic"
                        fontSize={isTablet ? "14px" : "18px"}
                        sx={{
                          color: "#CBD5E1",
                          lineHeight: 1.5,
                        }}
                      >
                        {getPreviewText(project.desc, 5)}...
                      </PrimaryText>

                      <Button
                        variant="text"
                        size="small"
                        onClick={() => handleOpenDialog(project)}
                        sx={{
                          minWidth: "auto",
                          px: 0.75,
                          py: 0,
                          color: "#FACC15",
                          fontWeight: 900,
                          fontSize: isDesktop ? "17px" : "14px",
                          textTransform: "none",
                          position: "relative",
                          animation: "readMoreFloat 1.8s ease-in-out infinite",
                          "&::after": {
                            content: '""',
                            position: "absolute",
                            left: 8,
                            right: 8,
                            bottom: 1,
                            height: "2px",
                            borderRadius: 999,
                            backgroundColor: "#FACC15",
                            transform: "scaleX(0)",
                            transformOrigin: "left",
                            transition: "transform 0.25s ease",
                          },
                          "&:hover": {
                            backgroundColor: "rgba(250,204,21,0.08)",
                            transform: "translateX(4px)",
                          },
                          "&:hover::after": {
                            transform: "scaleX(1)",
                          },
                          "@keyframes readMoreFloat": {
                            "0%, 100%": {
                              textShadow: "0 0 0 rgba(250,204,21,0)",
                            },
                            "50%": {
                              textShadow: "0 0 12px rgba(250,204,21,0.55)",
                            },
                          },
                        }}
                      >
                        Ver mas
                      </Button>
                    </Box>
                  )}

                  {isMobile && (
                    <Button
                      variant="text"
                      size="small"
                      onClick={() => handleOpenDialog(project)}
                      sx={{
                        width: "100%",
                        mt: 1.25,
                        py: 0.75,
                        px: 1,
                        borderRadius: 2,
                        border: "1px solid rgba(250,204,21,0.45)",
                        backgroundColor: "rgba(250,204,21,0.08)",
                        color: "#FACC15",
                        fontWeight: "bold",
                        fontSize: "13px",
                        textTransform: "none",
                        "&:hover": {
                          backgroundColor: "rgba(250,204,21,0.16)",
                        },
                      }}
                    >
                      Leer mas
                    </Button>
                  )}

                  {!isMobile && (
                    <Stack
                      direction="row"
                      alignItems="center"
                      spacing={1}
                      sx={{ mt: 3 }}
                    >
                      <PersonIcon sx={{ fontSize: 22, color: "#4ADE80" }} />
                      <PrimaryText font="girassol" fontSize="20px">
                        <span style={{ color: "#F472B6" }}>
                          Rol: {project.rol}
                        </span>
                      </PrimaryText>
                    </Stack>
                  )}

                  {!isMobile && (
                    <Stack
                      direction="row"
                      sx={{
                        flexWrap: "wrap",
                        mt: 2,
                        gap: { xs: "6px", sm: "10px", md: "14px" },
                      }}
                    >
                      {project.etiquetas.map((etiqueta) => (
                        <Chip
                          key={etiqueta}
                          label={etiqueta}
                          sx={{
                            backgroundColor: "rgba(59,130,246,0.15)",
                            color: "#93C5FD",
                            border: "1px solid rgba(59,130,246,0.35)",
                            fontWeight: 600,
                            fontSize: isDesktop ? "16px" : "12px",
                            px: 1,
                            py: 0.5,
                            transition:
                              "transform 0.3s ease, box-shadow 0.3s ease",
                            "&:hover": {
                              transform: "scale(1.15)",
                              boxShadow: "0 6px 18px rgba(59,130,246,0.4)",
                            },
                          }}
                        />
                      ))}
                    </Stack>
                  )}
                  </Box>
                </CardContent>
              </Card>
            </Box>
          </Grid>
        ))}
      </Grid>

      <ProjectDialog
        open={openDialog}
        onClose={handleCloseDialog}
        project={selectedProject}
        isMobile={isMobile}
      />
    </>
  );
};

export default ProjectList;
