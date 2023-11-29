import React from 'react'
import { TableContainer, Table, TableHead, TableBody, TableCell, TableRow } from '@mui/material'
import '../App.css'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { Button } from '@mui/material'
import { useNavigate } from 'react-router-dom'


const Tabla = () => {

  const [registros, setRegistros] = useState([])
  const navigate = useNavigate()
  const ListarTareas = async () =>
    await axios.get('http://localhost:4000/tarea').then((response) => {
      const data = response.data
      setRegistros(data)
    })

  useEffect(() => {
    ListarTareas()
  }, [])

  // const styles = makeStyles({
  //   tablaMaterial:{
  //     minWidth: 700
  //   }
  // })
  //   // const columnas = [
  //     {
  //         name: 'id',
  //         label: 'ID'
  //     },
  //     {
  //         name: 'nombre',
  //         label: 'Nombre común'
  //     },
  //     {
  //         name: 'cientifico',
  //         label: 'Nombre Científico'
  //     },
  //     {
  //         name: 'creadoEn',
  //         label: 'Fecha de ingreso'
  //     },
  // ]

  return (
    <>

      <div>tabla</div>
      <TableContainer sx={{ maxWidth: 900, margin: 'auto', backgroundColor: 'azure', border: 'solid' }}>
        <Table >
          <TableHead sx={{ backgroundColor: 'gray', fontSize: '52px' }}>
            <TableRow>
              <TableCell sx={{ fontSize: '20px', color: 'whitesmoke' }}>ID</TableCell>
              <TableCell sx={{ fontSize: '20px', color: 'whitesmoke' }}>Nombre Común</TableCell>
              <TableCell sx={{ fontSize: '20px', color: 'whitesmoke' }}>Nombre Científico</TableCell>
              <TableCell sx={{ fontSize: '20px', color: 'whitesmoke' }}>Fecha de ingreso</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {registros.map(celda => (
              <TableRow key={celda.id}>
                <TableCell>{celda.id}</TableCell>
                <TableCell>{celda.nombre}</TableCell>
                <TableCell>{celda.cientifico}</TableCell>
                <TableCell>{celda.creadoEn}</TableCell>
                <Button size="small" variant="contained" color="success" onClick={() => navigate(`/edit/${celda.id}`)}>Editar</Button>
                <Button size="small" sx={{ marginLeft: "auto" }} variant="contained" color="error" onClick={() => navigate(`/borrar/${celda.id}`)}>Eliminar</Button>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>

  )
}

export default Tabla