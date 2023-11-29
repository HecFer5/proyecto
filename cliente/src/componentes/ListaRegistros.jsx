import MUIDataTable from 'mui-datatables'
import axios from 'axios'
import { useState, useEffect } from 'react'



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
<hr />
<hr />
<hr />
<hr />
        <MUIDataTable
            data={registros}
            columns={columnas}
            title={'Listado de ingresos'}

        />
</div>

    )
}

export default ListaRegistros