import axios from 'axios'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import "primereact/resources/themes/lara-light-cyan/theme.css";
import 'primereact/resources/primereact.min.css'

const TablaNueva = () => {

    const [registros, setRegistros] = useState([])


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
        <div className='text-sm text-orange-700 text-center bg-orange-100'>Haga click sobre el número para ver la ficha completa y click en "Editar" para correcciones</div>
            <div className="flex flex-col">
                <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                        <div className="overflow-hidden">
                            <table className="min-w-full text-left text-sm font-light">
                                <thead
                                    className="border-b bg-white font-medium dark:border-neutral-500 dark:bg-neutral-600">
                                    <tr>
                                        <th scope="col" className="px-6 py-4">Nº</th>
                                        <th scope="col" className="px-6 py-4">nombre comun</th>
                                        <th scope="col" className="px-6 py-4">nombre cientifico</th>
                                        {/* <th scope="col" className="px-6 py-4">Comentarios</th> */}

                                        {/* <th scope="col" className="px-6 py-4 w-max">Acciones</th> */}
                                    </tr>
                                </thead>
                                <tbody className="table-group-divider">
                                    {registros.map(registro => (
                                        <tr key={registro.id} className="border-e-4 bg-neutral-100 dark:border-neutral-500 dark:bg-neutral-700">
                                             <td >
                                                <li className="block bg-white font-semibold ml-4 px-2 py-1 text-black w-min rounded-md"><Link to={'/ficha/' + registro.id} >{registro.id}</Link></li>
                                            </td>
                                            <td className="whitespace-nowrap px-6 py-4">{registro.nombre}</td>
                                            <td className="whitespace-nowrap px-6 py-4">{registro.cientifico}</td>
                                            {/* <td className="whitespace-nowrap px-6 py-4">{registro.comentario}</td> */}
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