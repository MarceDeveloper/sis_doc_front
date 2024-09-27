import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Add } from '@mui/icons-material';
import styled from 'styled-components';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  // width: "100%",
  bgcolor: 'background.paper',
  //   border: '2px solid #000',
  boxShadow: 24,
  p:4,
};


interface Iprops {
  children?: React.ReactNode
  is_open: boolean
  width_string_pocentaje?: string[],
  // set_is_open : React.Dispatch<React.SetStateAction<boolean>>
  cloce_modal: () => void
}

export function My_Modal({
  children,
  is_open,
  cloce_modal,
  width_string_pocentaje = ["100%", "80%"]
}: Iprops) {
  // const handleOpen = () => cloce_modal();
  const handleClose = () => cloce_modal();

  return (
    <>
      <Modal
        style={{ zIndex: 2 }}
        open={is_open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={[
          style, {
            width: width_string_pocentaje, 
            maxHeight: "90vh",
            overflow:"auto",
          }
        ]}>
          {children}
        </Box>
      </Modal>

    </>
  );
}


