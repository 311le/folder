import { Box } from "@mui/material";
import MailIcon from "@mui/icons-material/Mail";
import PhoneIcon from "@mui/icons-material/Phone";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PrimaryText from "../atoms/TextAtom";
import LinkedInButton from "../molecules/LinkedInButton";
import GitHubButton from "../molecules/Github";
import GmailButton from "../molecules/Gmail";

const ContactDetails = () => {
  const contactColor = "#d6b3ff";

  const itemSx = {
    display: "flex",
    alignItems: "center",
    gap: 1.5,
    width: "100%",
    p: { xs: 1.25, sm: 1.5 },
    borderRadius: 2,
    backgroundColor: "rgba(255,255,255,0.06)",
    border: "1px solid rgba(214,179,255,0.18)",
    boxShadow: "inset 0 1px 0 rgba(255,255,255,0.06)",
  };

  const iconSx = {
    color: "#ffbd59",
    fontSize: { xs: 20, sm: 24 },
    flexShrink: 0,
  };

  return (
    <Box
      sx={{
        position: "relative",
        overflow: "hidden",
        width: "100%",
        maxWidth: 420,
        minHeight: { md: "100%" },
        mx: "auto",
        p: { xs: 2, sm: 3, md: 3.5 },
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        gap: { xs: 2, md: 2.5 },
        borderRadius: 2,
        border: "1px solid rgba(255,255,255,0.12)",
        background:
          "linear-gradient(145deg, rgba(14,24,50,0.96) 0%, rgba(42,18,70,0.92) 52%, rgba(7,18,38,0.98) 100%)",
        boxShadow: {
          xs: "0 14px 32px rgba(0,0,0,0.38)",
          md: "0 22px 55px rgba(0,0,0,0.45)",
        },
        textAlign: { xs: "center", sm: "left" },
        "&::before": {
          content: '""',
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(120deg, rgba(255,189,89,0.16), transparent 34%, rgba(8,225,164,0.1))",
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
        <span style={{ color: "#ffbd59" }}>INFORMACION DE CONTACTO</span>
      </PrimaryText>

      <Box
        sx={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          gap: 1.5,
        }}
      >
        <Box sx={itemSx}>
          <MailIcon sx={iconSx} />
          <PrimaryText
            font="dmSerifTextRegularItalic"
            fontSize={{ xs: 13, sm: 15 }}
            sx={{ lineHeight: 1.35, wordBreak: "break-word" }}
          >
            <span style={{ color: contactColor }}>
              cyamberlacotacachi@gmail.com
            </span>
          </PrimaryText>
        </Box>

        <Box sx={itemSx}>
          <PhoneIcon sx={iconSx} />
          <PrimaryText font="dmSerifTextRegularItalic" fontSize={{ xs: 13, sm: 15 }}>
            <span style={{ color: contactColor }}>+593 999 963 813</span>
          </PrimaryText>
        </Box>

        <Box sx={itemSx}>
          <LocationOnIcon sx={iconSx} />
          <PrimaryText font="dmSerifTextRegularItalic" fontSize={{ xs: 13, sm: 15 }}>
            <span style={{ color: contactColor }}>Imbabura - Otavalo</span>
          </PrimaryText>
        </Box>
      </Box>

      <Box
        sx={{
          position: "relative",
          display: "flex",
          justifyContent: "center",
          gap: { xs: 1.25, sm: 1.5 },
          flexWrap: "wrap",
          mt: { xs: 0.5, md: 1 },
          pt: 2,
          borderTop: "1px solid rgba(214,179,255,0.18)",
        }}
      >
        <GitHubButton color={contactColor} />
        <LinkedInButton iconColor={contactColor} />
        <GmailButton color={contactColor} />
      </Box>
    </Box>
  );
};

export default ContactDetails;
