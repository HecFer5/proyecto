import { createContext, useContext, useState } from 'react'
import { ListarTareas } from '../../api/tareas.api'
import { BorrarTareas } from '../../api/tareas.api'


export const TareasContext = createContext()

///////////////para borrar un registro
const borrarTarea = async (id) => {
    try {
        const respuesta = await BorrarTareas(id)
        console.log(respuesta)
    } catch (error) {
        console.log(error)
    }
}

////////////////////para traer todo el listado

export const TareasContextProv = ({ children }) => {
    const [tareas, setTareas] = useState([])

    async function TraerTareas() {
        const respuesta = await ListarTareas()
        setTareas(respuesta.data)
    }

    return <TareasContext.Provider value={{ tareas, TraerTareas, borrarTarea }}>
        {children}
    </TareasContext.Provider>
}
