import { createColumnHelper } from "@tanstack/react-table"
import axios from 'axios'
import { useEffect, useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'

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
            <div className="flex flex-col">
                <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                        <div className="overflow-hidden">
                            <table className="min-w-full text-left text-sm font-light">
                                <thead
                                    className="border-b bg-white font-medium dark:border-neutral-500 dark:bg-neutral-600">
                                    <tr>
                                        <th scope="col" className="px-6 py-4"></th>
                                        <th scope="col" className="px-6 py-4">Nº</th>
                                        <th scope="col" className="px-6 py-4">nombre comun</th>
                                        <th scope="col" className="px-6 py-4">nombre cientifico</th>
                                        <th scope="col" className="px-6 py-4">Comentarios</th>

                                        <th scope="col" className="px-6 py-4 w-max">Acciones</th>
                                    </tr>
                                </thead>
                                <tbody className="table-group-divider">
                                    {registros.map(registro => (
                                        <tr key={registro.id} className="border-e-4 bg-neutral-100 dark:border-neutral-500 dark:bg-neutral-700">
                                            <td>
                                                <a href={'/ficha/' + registro.id} className="block bg-indigo-500 px-2 py-1 text-white w-full rounded-md">Ficha</a>
                                            </td>
                                            <td className="whitespace-nowrap px-6 py-4 font-medium">{registro.id}</td>
                                            <td className="whitespace-nowrap px-6 py-4">{registro.nombre}</td>
                                            <td className="whitespace-nowrap px-6 py-4">{registro.cientifico}</td>
                                            <td className="whitespace-nowrap px-6 py-4">{registro.comentario}</td>
                                            <td>
                                                <li className="block bg-lime-700 px-2 py-1 text-white w-min rounded-md"><Link to={'/edit/' + registro.id} >Editar</Link></li>
                                            </td>
                                            <td>
                                                <li className="block bg-red-700 px-2 py-1 text-white w-min rounded-md"><Link to={'/borrar/' + registro.id} >Borrar</Link></li>
                                            </td>
                                        </tr>
                                    ))}

                                </tbody>
                            </table>
                        </div>

                    </div>
                </div>

            </div>
        </>
    )
}

export default TablaNueva