import { createContext, useContext, useState } from 'react'
import { ListarTareas, BorrarTareas, CrearTareas, ListarUnaTarea, EditaTarea } from '../../api/tareas.api'



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

/////////////////////////////Crear un registro
    const crearRegistro = async (tarea) => {
        try {
            const response = await CrearTareas(tarea)
            console.log(response)
        } catch (error) {
            console.error(error)
        }
    }

      ///////////////Editar un registro
      const editarRegisto = async (id) => {
        try {
           const respuesta =  await ListarUnaTarea(id)
           return respuesta.data
        } catch (error) {
            console.log(error)
        }
    }

///////////////Editar tarea

const modificaRegistro = async (id, nuevosCampos) => {
    try {
       const respuesta =  await EditaTarea(id, nuevosCampos)
       console.log(respuesta)
    } catch (error) {
        console.log(error)
    }
}


    return <TareasContext.Provider value={{ tareas, TraerTareas, borrarTarea, crearRegistro, editarRegisto, modificaRegistro }}>
        {children}
    </TareasContext.Provider>
}
