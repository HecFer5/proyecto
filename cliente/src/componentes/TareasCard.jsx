import { BorrarTareas } from "../api/tareas.api"
import { useTareas } from "./context/hooks"
import { useNavigate } from 'react-router-dom'



function TareasCard({ tarea }) {
  const { borrarTarea, toogleTaskDone } = useTareas()
  const navigate = useNavigate()

  const handleDone = async () => {
    await toogleTaskDone(tarea.id)
  }

  return (
    <div>
      <h2>{tarea.nombre} id: {tarea.id}</h2>
      <p>{tarea.cientifico}</p>
      <span>{tarea.hecho == 1 ? '*' : 'X'}</span>
      <span>{tarea.creadoEn}</span>
      <button onClick={() => borrarTarea(tarea.id)}>Borrar</button>
      <button onClick={() => navigate(`/edit/${tarea.id}`)}>Editar</button>
      <button onClick={() => handleDone(tarea.hecho)}>Efectuar</button>
    </div>
  )
}

export default TareasCard