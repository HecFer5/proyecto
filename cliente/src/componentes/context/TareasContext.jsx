import { createContext, useContext, useState } from 'react'
import { ListarTareas } from '../../api/tareas.api'
import { BorrarTareas } from '../../api/tareas.api'
import { CrearTareas } from '../../api/tareas.api'


export const TareasContext = createContext()



////////////////////para traer todo el listado

export const TareasContextProv = ({ children }) => {
    const [tareas, setTareas] = useState([])

    async function TraerTareas() {
        const respuesta = await ListarTareas()
        setTareas(respuesta.data)
    }

    ///////////////para borrar un registro
    const borrarTarea = async (id) => {
        try {
            const respuesta = await BorrarTareas(id)
            setTareas(tareas.filter(tarea => tarea.id !== id))
        } catch (error) {
            console.log(error)
        }
    }


    const crearRegistro = async (tarea) => {
        try {
            const response = await CrearTareas(tarea)
            console.log(response)
        } catch (error) {
            console.error(error)
        }
    }

    return <TareasContext.Provider value={{ tareas, TraerTareas, borrarTarea, crearRegistro }}>
        {children}
    </TareasContext.Provider>
}
