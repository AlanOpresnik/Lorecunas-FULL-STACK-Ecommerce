import { Modal, Button, Paper, Typography } from "@mui/material";

const ConfirmDeleteModal = ({ open, onClose, onConfirm, itemTitle }) => {
  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="confirm-delete-modal"
      aria-describedby="confirm-delete-modal-description"
    >
      <Paper
        sx={{
          position: "absolute",
          borderRadius: ".7rem",
          width: 400, // Estilo predeterminado para pantallas más grandes
          bgcolor: "background.paper",
          boxShadow: 24,
          p: 4,
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          "@media (max-width: 768px)": {
            width: 350, // Estilo para pantallas de 768px o menos
          },
        }}
      >
        <Typography
          variant="h6"
          id="confirm-delete-modal"
          className="border-b-2"
        >
          ¿Estas seguro?
        </Typography>
        <Typography
          id="confirm-delete-modal-description"
          sx={{ marginTop: ".6rem" }}
        >
          ¿deseas eliminar{" "}
          <span className="text-[#fe98cb] font-bold">{itemTitle}</span> de tus
          favoritos?
        </Typography>

        <Button
          sx={{
            bgcolor: "#fe98cb",
            color: "white",
            marginTop: "1rem",
            "&:hover": {
              bgcolor: "#f8bcda",
            },
          }}
          onClick={() => {
            onConfirm();
            onClose();
          }}
        >
          Confirmar
        </Button>
        <Button
          sx={{ color: "black", marginTop: "1rem", marginLeft: ".5rem" }}
          className="bg-[#fe98cb]"
          onClick={onClose}
        >
          Cancelar
        </Button>
      </Paper>
    </Modal>
  );
};

export default ConfirmDeleteModal;
