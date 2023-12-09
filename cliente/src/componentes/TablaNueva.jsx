import { createColumnHelper } from "@tanstack/react-table"
import axios from 'axios'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import "primereact/resources/themes/lara-light-cyan/theme.css";
import 'primereact/resources/primereact.min.css'
import { FilterMatchMode } from 'primereact/api'
import { DataTable } from 'primereact/datatable'
import { Column } from 'primereact/column'
// import {ImputText} from 'primereact/imputtext'
import { Button } from 'primereact/button';
import { Panel } from 'primereact/panel'
import { useReactTable } from '@tanstack/react-table'

const TablaNueva = () => {

    const columnHelper = createColumnHelper()
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

console.log(registros)
    return (
        <>
            <div className=" container bg-orange-200 p-3" >
                <div className="row">
                    <div className="col-8 ">
                <table className="table table-striped table-fit table-bordered table-hover">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Nº</th>
                            <th>nombre comun</th>
                            <th>nombre cientifico</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>
                    <tbody className="table-group-divider">
                        {registros.map(registro => (
                            <tr key={registro.id}>
                                <td>
                                    <a href={'/ficha/' + registro.id} className="btn btn-primary">Ficha</a>
                                </td>
                                <td>{registro.id}</td>
                                <td>{registro.nombre}</td>
                                <td>{registro.cientifico}</td>
                                <td>
                                    <a href={'/edit/' + registro.id} className="btn btn-success">Editar</a>
                                </td>
                                <td>
                                    <a href={'/borrar/' + registro.id} className="btn btn-danger">Borrar</a>
                                </td>
                            </tr>
                        ))}

                    </tbody>
                </table>
                </div>
                <div className="col">
<h1>sjjsj</h1>
                </div>
                </div>
            </div>


        </>
    )
}

export default TablaNueva