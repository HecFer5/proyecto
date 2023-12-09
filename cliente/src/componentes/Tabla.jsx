import React from 'react'
import {
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableCell,
  TableRow,
  TablePagination,
  TableFooter
} from '@mui/material'
import '../App.css'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { Button } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import TablePaginationActions from '@mui/material/TablePagination/TablePaginationActions'


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



  return (
    <>

      <div>tabla</div>
      <TableContainer sx={{ maxWidth: 900, margin: 'auto', backgroundColor: 'azure', border: 'solid' }}>
        <Table >
          <TableHead sx={{ bgcolor: 'gray', fontSize: '52px' }}>
            <TableRow>
              <TableCell sx={{ fontSize: '20px', color: 'whitesmoke' }}>ID</TableCell>
              <TableCell sx={{ fontSize: '20px', color: 'whitesmoke' }}>Nombre Común</TableCell>
              <TableCell sx={{ fontSize: '20px', color: 'whitesmoke' }}>Nombre Científico</TableCell>
              <TableCell sx={{ fontSize: '20px', color: 'whitesmoke' }}>Fecha de ingreso</TableCell>
              <TableCell sx={{ fontSize: '20px', color: 'whitesmoke' }}></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {registros.map(celda => (
              <TableRow key={celda.id}>
                <TableCell align='right'>{celda.id}</TableCell>
                <TableCell align='right'>{celda.nombre}</TableCell>
                <TableCell align='right'>{celda.cientifico}</TableCell>
                <TableCell align='right'>{celda.creadoEn}</TableCell>
                <Button  size="small" variant="contained" color="primary" onClick={() => navigate(`/edit/${celda.id}`)}>Editar</Button>
                <Button size="small" sx={{ marginLeft: "auto" }} variant="contained" color="secondary" onClick={() => navigate(`/borrar/${celda.id}`)}>Eliminar</Button>
              </TableRow>
            ))}
          </TableBody>
          <TableFooter>
          <TableRow>
              <TableCell sx={{ fontSize: '20px', color: 'whitesmoke' }}>ID</TableCell>
              <TableCell sx={{ fontSize: '20px', color: 'whitesmoke' }}>Nombre Común</TableCell>
              <TableCell sx={{ fontSize: '20px', color: 'whitesmoke' }}>Nombre Científico</TableCell>
              <TableCell sx={{ fontSize: '20px', color: 'whitesmoke' }}>Fecha de ingreso</TableCell>
              <TableCell sx={{ fontSize: '20px', color: 'whitesmoke' }}></TableCell>
            </TableRow>
          </TableFooter>
        </Table>
      </TableContainer>
      <TablePagination/>
    </>

  )
}

export default Tabla