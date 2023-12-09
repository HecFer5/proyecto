import { getCoreRowModel, useReactTable, flexRender } from '@tanstack/react-table'
import { useState, useEffect } from 'react'
import axios from 'axios'
import {
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableCell,
  TableRow,
  TablePagination
} from '@mui/material'
import { Button } from '@mui/material'
import { useNavigate } from 'react-router-dom'



const TablaSimple = () => {
  const navigate = useNavigate()
  const [registros, setRegistros] = useState()
  const ListarTareas = async () =>
    await axios.get('http://localhost:4000/tarea').then((response) => {
      const data = response.data
      setRegistros(data)

    })

  useEffect(() => {
    ListarTareas()

  }, [])
  console.log(registros)

  const columns = [
    {
      header: 'ID',
      accessorKey: 'id',

    },
    {
      accessorKey: 'nombre',
      header: 'Nombre común',
    },
    {
      accessorKey: 'cientifico',
      header: 'Nombre Científico',
    },
    {
      accessorKey: 'creadoEn',
      header: 'Fecha de ingreso',
    },
  ]

  const table = useReactTable({
    registros,
    columns
  })


  return (
    <>

      <div>
        <table>
          <thead>
            {
              table.getHeaderGroups().map(headerGroup => (
                <tr key={headerGroup.id}>
                  {
                    headerGroup.headers.map(header => (
                      <th key={header.id}>
                        {header.column.columnDef.header}
                      </th>
                    ))
                  }
                </tr>
              ))
            }
          </thead>
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
        </table>
      </div>
    </>
  )
}

export default TablaSimple