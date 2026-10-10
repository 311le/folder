import { Box } from "@mui/material";
import jsBackground from "../styles/images/js.png";
import pgBackground from "../styles/images/pg.png";

const ContainerComponent = ({
  children,
  variant = "section",
  watermark = "js",
}) => {
  const isCover = variant === "cover";
  const backgroundImage = watermark === "pg" ? pgBackground : jsBackground;
  const sectionMinHeight = {
    xs: "calc(100svh - 96px)",
    sm: "100svh",
  };
  const backgroundPosition =
    watermark === "pg"
      ? { xs: "50% 50%", sm: "50% 50%", lg: "50% 50%" }
      : { xs: "50% 50%", sm: "50% 50%", lg: "50% 50%" };

  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: "none",
        mx: "auto",
        minHeight: sectionMinHeight,
        boxSizing: "border-box",

        px: isCover ? 0 : { xs: 1.25, sm: 3, md: 6, lg: 8 },
        py: isCover ? 0 : { xs: 1.5, sm: 2.5, md: 4 },
        display: "flex",
        flexDirection: "column",
        justifyContent: isCover ? "stretch" : "center",
        position: "relative",
        overflow: isCover ? "hidden" : "visible",

        backgroundColor: isCover ? "transparent" : "#020512",
        backdropFilter: isCover ? "none" : "blur(2px)",
        boxShadow: isCover
          ? "none"
          : "inset 0 0 95px rgba(0,0,0,0.46), 0 20px 60px rgba(0,0,0,0.18)",
        "&::before": isCover
          ? {}
          : {
              content: '""',
              position: "absolute",
              inset: 0,
              zIndex: 0,
              opacity: { xs: 0.42, sm: 0.36, md: 0.32 },
              backgroundImage: `url(${backgroundImage})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition,
              filter: "saturate(1.08) contrast(1.05)",
              pointerEvents: "none",
            },
        "&::after": isCover
          ? {}
          : {
              content: '""',
              position: "absolute",
              inset: 0,
              zIndex: 1,
              background:
                "linear-gradient(135deg, rgba(2, 4, 20, 0.72), rgba(6, 17, 64, 0.46) 44%, rgba(0, 0, 0, 0.74))",
              pointerEvents: "none",
            },
        "& > *": {
          position: "relative",
          zIndex: 2,
        },
      }}
    >
      {children}
    </Box>
  );
};

export default ContainerComponent;
