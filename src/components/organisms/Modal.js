import React from "react";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Button,
  Typography,
  Box,
} from "@mui/material";
import PrimaryText from "../atoms/TextAtom";

const Modal = ({ open, onClose, framework }) => {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      fullWidth
      maxWidth="sm"
      sx={{
        "& .MuiDialog-paper": {
          borderRadius: 3,
          background:
            "linear-gradient(135deg, #460837 0%, #151e80 50%, #4b0942 100%)",
          boxShadow: "0 10px 40px rgba(0,0,0,0.25)",
          backdropFilter: "blur(6px)",
          maxHeight: "85vh",
          p: { xs: 1, sm: 2 },
        },
      }}
    >
      {/* HEADER */}
      <DialogTitle
        sx={{
          textAlign: "center",
          pb: 1,
        }}
      >
        <PrimaryText
          font="archivoBlack"
          align="center"
          fontSize={{ xs: "22px", sm: "28px", md: "32px" }}
        >
          <span style={{ color: "#2b1b1b" }}>{framework?.name}</span>
        </PrimaryText>
      </DialogTitle>

      {/* CONTENT */}
      <DialogContent>
        <Box
          sx={{
            background: "rgba(255,255,255,0.35)",
            borderRadius: 2,
            p: { xs: 1.5, sm: 2 },
            boxShadow: "inset 0 0 10px rgba(0,0,0,0.05)",
          }}
        >
          <Typography
            sx={{
              fontSize: { xs: "14px", sm: "16px", md: "18px" },
              lineHeight: 1.6,
              color: "#2b1b1b",
              fontFamily: "DM Serif Text, serif",
            }}
          >
            {framework?.description}
          </Typography>
        </Box>
      </DialogContent>

      {/* ACTIONS */}
      <DialogActions sx={{ justifyContent: "center", pb: 2 }}>
        <Button
          onClick={onClose}
          sx={{
            px: 4,
            py: 1,
            borderRadius: 2,
            background:
              "linear-gradient(135deg, #ff6b6b, #ff9f43)",
            color: "white",
            fontWeight: "bold",
            fontSize: { xs: "12px", sm: "14px" },
            textTransform: "none",
            boxShadow: "0 4px 12px rgba(255,107,107,0.5)",
            "&:hover": {
              transform: "scale(1.05)",
              background:
                "linear-gradient(135deg, #ff4757, #ff851b)",
            },
          }}
        >
          Cerrar
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default Modal;
