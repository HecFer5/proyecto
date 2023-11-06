
import axios from "axios";

export const ListarTareas = async () =>
 await axios.get('http://localhost:4000/tarea')

export const CrearTareas = async (registro) =>
 await axios.post('http://localhost:4000/tarea', registro)

 export const BorrarTareas = async (id) =>
 await axios.delete('http://localhost:4000/tarea/' + id)

