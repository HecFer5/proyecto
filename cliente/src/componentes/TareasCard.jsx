import { BorrarTareas } from "../api/tareas.api"
import { useTareas } from "./context/hooks"
import { useNavigate } from 'react-router-dom'
import { FcCheckmark, FcDisplay } from "react-icons/fc";
import { FcMinus } from "react-icons/fc";
import { Button, Paper, Typography, Box, Card, CardMedia, Container, CardActions, CardActionArea, Grid } from '@mui/material'
import styled from '@emotion/styled'
import Tarjeta from "./Tarjeta";





function TareasCard({ tarea }) {
  const { borrarTarea, toogleTaskDone } = useTareas()
  const navigate = useNavigate()



  const handleDone = async () => {
    await toogleTaskDone(tarea.id)
  }

  return (
    <div> 
      <Grid >
      <Container sx={{ mt: 5, width: 400, backgroundColor: "#99f4d4", border: 2, borderRadius: 4 }}>
       
        <CardActionArea>
          <Tarjeta />
          <Typography >id: {tarea.id}</Typography>
          <Typography variant="h6">{tarea.nombre}</Typography>
          <Typography variant="h7">{tarea.cientifico}</Typography>
          <span>{tarea.hecho == 1 ? <FcCheckmark /> : <FcMinus />}</span>
          <span>{tarea.creadoEn}</span>
        </CardActionArea>
        <CardActions>
          <Button size="small" variant="contained" color="error" onClick={() => borrarTarea(tarea.id)}>Borrar</Button>
          <Button size="small" variant="contained" color="success" onClick={() => navigate(`/edit/${tarea.id}`)}>Editar</Button>
          <Button size="small" variant="contained" color="info" onClick={() => handleDone(tarea.hecho)}>Efectuar</Button>
        </CardActions>
       
      </Container>
 </Grid>


    </div>
  )
}

export default TareasCard