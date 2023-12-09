import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { Typography, Alert, AlertTitle } from '@mui/material';
import Modal from '@mui/material/Modal';
import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useTareas } from "../context/hooks"



const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4


};


export default function Alerta() {
  const [open, setOpen] = useState(true);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const navigate = useNavigate()
  const { borrarTarea } = useTareas()
  const params = useParams()
  console.log(params.id)


  return (
    <>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description" >
        <Box sx={style}>
          <AlertTitle>Se va a borrar el registro</AlertTitle>
          <Alert severity="error" action=
            <>
              <Button color='warning' onClick={() => navigate('/')}>No, cancelar</Button>
              <Button color='primary' onClick={() => { borrarTarea(params.id) }}>Si</Button>
              {navigate('/')}
            </>
          >¿Está seguro de continuar?</Alert>
        </Box>
      </Modal>
    </>
  );
}
