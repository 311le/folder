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
      aria-labelledby="technology-dialog-title"
      aria-describedby="technology-dialog-description"
      sx={{
        "& .MuiDialog-paper": {
          borderRadius: 3,
          background:
            "linear-gradient(135deg, #190c36 0%, #06153b 70%, #100724 100%)",
          border: "1px solid #9856ff",
          boxShadow: "0 10px 40px rgba(0,0,0,0.25)",
          backdropFilter: "blur(6px)",
          maxHeight: "85vh",
          p: { xs: 1, sm: 2 },
        },
      }}
    >
      {/* HEADER */}
      <DialogTitle
        id="technology-dialog-title"
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
          <span style={{ color: "#f7f8ff" }}>{framework?.name}</span>
        </PrimaryText>
      </DialogTitle>

      {/* CONTENT */}
      <DialogContent>
        <Box
          sx={{
            background: "rgba(0,220,255,0.06)",
            borderRadius: 2,
            p: { xs: 1.5, sm: 2 },
            boxShadow: "inset 0 0 10px rgba(0,0,0,0.05)",
          }}
        >
          <Typography
            id="technology-dialog-description"
            sx={{
              fontSize: { xs: "14px", sm: "16px", md: "18px" },
              lineHeight: 1.6,
              color: "#f7f8ff",
              fontFamily: "var(--font-accent)",
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
