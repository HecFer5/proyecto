import MUIDataTable from 'mui-datatables'
import axios from 'axios'
import { useState, useEffect } from 'react'
import {Box} from '@mui/material'



const ListaRegistros = () => {
    const [registros, setRegistros] = useState([])

    const ListarTareas = async () =>
        await axios.get('http://localhost:4000/tarea').then((response) => {
            const data = response.data
            setRegistros(data)
        })

    useEffect(() => {
        ListarTareas()
    }, [])

    const columnas = [
        {
            name: 'id',
            label: 'ID'
        },
        {
            name: 'nombre',
            label: 'Nombre común'
        },
        {
            name: 'cientifico',
            label: 'Nombre Científico'
        },
        {
            name: 'creadoEn',
            label: 'Fecha de ingreso'
        },
    ]

    return (
<div>

<hr />
<Box mt={20} sx={{maxWidth: 1200, display: 'flex'}}>


        <MUIDataTable elevation= {14}
            data={registros}
            columns={columnas}
            title={'Listado de ingresos'}
            responsive={'vertical'}

        />
        </Box>
</div>

    )
}

export default ListaRegistros