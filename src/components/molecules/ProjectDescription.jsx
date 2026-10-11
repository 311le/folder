import { Box } from "@mui/material";
import PrimaryText from "../atoms/TextAtom";

const paragraphStyle = {
  color: "#E5E7EB",
  lineHeight: 1.7,
  letterSpacing: ".025em",
  overflowWrap: "anywhere",
  whiteSpace: "pre-line",
  mb: 1.5,
};

// Structured content keeps long case studies readable without parsing HTML.
const ProjectDescription = ({ project }) => {
  const sections = [
    {
      title: project?.sections?.length ? "Descripción del proyecto" : null,
      paragraphs: (project?.desc || "Sin descripción disponible.").split("\n\n"),
    },
    ...(project?.sections || []),
  ];

  return (
    <Box>
      {project?.subtitle && (
        <PrimaryText component="p" font="bebasNeue" fontSize={{ xs: "17px", sm: "19px" }} sx={{ color: "#e4c6ff", lineHeight: 1.5, mb: 3 }}>
          {project.subtitle}
        </PrimaryText>
      )}
      {sections.map((section, index) => (
        <Box key={section.title || "description"} component="section" sx={{ mt: index ? 3 : 0 }}>
          {section.title && (
            <PrimaryText component="h3" font="girassol" fontSize={{ xs: "20px", sm: "23px" }} sx={{ color: "#ffdf74", lineHeight: 1.35, mb: 1.5 }}>
              {section.title}
            </PrimaryText>
          )}
          {section.paragraphs.map((paragraph) => (
            <PrimaryText key={paragraph} component="p" font="bebasNeue" fontSize={{ xs: "18px", sm: "20px" }} sx={paragraphStyle}>
              {paragraph}
            </PrimaryText>
          ))}
        </Box>
      ))}
    </Box>
  );
};

export default ProjectDescription;
