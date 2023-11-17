import { useEffect } from 'react'
import TareasCard from '../componentes/TareasCard'
import { useTareas } from '../componentes/context/hooks'

function TareasPaginas() {
  const { tareas, TraerTareas, modificaRegistro } = useTareas()

  useEffect(() => {
    TraerTareas()
  }, [])

  function renderMain() {
    if (tareas.length === 0) return <h1>no hay registros</h1>
    return tareas.map((tarea) =>
      <TareasCard tarea={tarea} key={tarea.id} />)
  }

  return (
    <div>
      <h1 >Listado de Orquideas</h1>
      <div >
        {renderMain()}
      </div>
    </div>
  )
}

export default TareasPaginas