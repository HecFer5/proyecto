import { getCoreRowModel, useReactTable, flexRender } from '@tanstack/react-table'
import { useState, useEffect } from 'react'
import axios from 'axios'


const TablaSimple = () => {
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
      accessorKey: 'id'

    },
    {
      accessorKey: 'nombre',
      header: 'Nombre común'
    },
    {
      accessorKey: 'cientifico',
      header: 'Nombre Científico'
    },
    {
      accessorKey: 'creadoEn',
      header: 'Fecha de ingreso'
    },
  ]

  const table = useReactTable({
    registros,
    columns,
    getCoreRowModel: getCoreRowModel(),
  })


  return (
    <>

      <hr />
      <hr />
      <hr />
      <hr />
      <hr />
      <hr />
      <hr />
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
          <tbody>
               {table.getRowModel().rows.map((row) => (
                 <tr key={row.id} >
                   {row.getVisibleCells().map((cell) => (
                     <td  key={cell.id}>
                       {flexRender(cell.column.columnDef.cell, cell.getContext())}
                     </td>
                   ))}
                 </tr>
               ))}
             </tbody>
        </table>
      </div>
    </>
  )
}

export default TablaSimple