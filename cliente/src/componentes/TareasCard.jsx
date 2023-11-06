import { BorrarTareas } from "../api/tareas.api"
import { useTareas } from "./context/hooks"



function TareasCard({ tarea }) {
  const { borrarTarea } = useTareas()



  return (
    <div>
      <h2>{tarea.nombre} id: {tarea.id}</h2>
      <p>{tarea.cientifico}</p>
      <span>{tarea.hecho == 1 ? '*' : 'X'}</span>
      <span>{tarea.creadoEn}</span>
      <button onClick={() => borrarTarea(tarea.id)}>Borrar</button>
      <button>Editar</button>
    </div>
  )
}

export default TareasCard