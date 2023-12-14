import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { AlertTitle } from '@mui/material';
import Modal from '@mui/material/Modal';
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {Link} from 'react-router-dom'



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


export default function NuevoReg({ values }) {
  const [open, setOpen] = useState(true);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const navigate = useNavigate()
  

  return (
    <div>
      <Button onClick={handleOpen}>Open modal</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <AlertTitle>INGRESADO CON EXITO</AlertTitle>
          <AlertTitle>¿Quiere ingresar otro registo?</AlertTitle>
         { <li className="block bg-lime-700 px-2 py-1 text-white w-min rounded-md"><Link to={'/new/'} >Si</Link></li>}
          { <li className="block bg-lime-700 px-2 py-1 text-white w-min rounded-md"><Link to={'/new/'} >No</Link></li>}
          {/* <Alert severity="success" variant='filled' sx={{cursor: 'pointer', tr: {'&:hover': { color: 'red' }} }} onClick={() => navigate('/new')} 
          > ¿Quiere seguir ingresando? </Alert> */}
          {/* {<Button color='success' size='large' onClick={() => navigate('/new')}>¿oTRO INGRESO?</Button>} */}

          {/* <Alert id="modal-modal-title" variant="h6" component="h2" onClick={() => navigate('/')}>
            O volver a la página principal
          </Alert> */}
          {/* {<Button color='warning' size='large' onClick={() => navigate('/')}>Volver a la Página Principal</Button>} */}
          {/*    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography> */}
        </Box>
      </Modal>
    </div>
  );
}
