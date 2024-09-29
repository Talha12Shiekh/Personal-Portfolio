import { Box, IconButton, Modal, Typography } from "@mui/material";
import React from "react";
import CloseIcon from "@mui/icons-material/Close";

const OfferLetterViewModal = ({ open, handleClose, letter }) => {
  return (
    <>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box p={5} display="flex" justifyContent="center" alignItems="center">
          <IconButton onClick={handleClose} sx={{ position: "absolute", top: "0", right: "0",m:1 }}>
            <CloseIcon style={{ color: "white",fontSize:35 }} />
          </IconButton>
          <img
            src={letter}
            alt="Loading..."
            style={{width:"90%",height:550,objectFit:"contain"}}
          />
        </Box>
      </Modal>
    </>
  );
};

export default OfferLetterViewModal;
