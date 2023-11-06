import { useEffect } from 'react'
import TareasCard from '../componentes/TareasCard'
import { useTareas } from '../componentes/context/hooks'

function TareasPaginas() {
  const { tareas, TraerTareas } = useTareas()

  useEffect(() => {
    TraerTareas()
  }, [])


  return (
    <div>
      <h1>Listado de Orquideas</h1>

      {tareas.length === 0 ? <h1>no hay registros</h1> : tareas.map((tarea) => (
        <TareasCard tarea={tarea} key={tarea.id} />
      ))}
    </div>
  )
}

export default TareasPaginas