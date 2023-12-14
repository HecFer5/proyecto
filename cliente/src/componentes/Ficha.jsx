import { useEffect, useState } from 'react'
import { useTareas } from '../componentes/context/hooks'
import { useParams, Link } from 'react-router-dom'

const Ficha = () => {

  const {editarRegisto } = useTareas()
  const [task, setTask] = useState({
    nombre: "",
    cientifico: "",
  })

  const params = useParams()

  useEffect(() => {
    const traerTarea = async () => {
      if (params.id) {
        const task = await editarRegisto(params.id)
        setTask({
          nombre: task.nombre,
          cientifico: task.cientifico,
          comentario: task.comentario
        })
      }
    }
    traerTarea()
  }, [])

  return (
    <div className='justify-center flex'> 
    <div className="max-w-sm bg-white border border-gray-400 rounded shadow p-3">
    <div className="col  text-left mb-2 ">{`Número de orden: ${params.id}`}</div>
      <a href="#">
        <img src="../../imagenes/logo.jfif" alt="imagen" className='rounded-t-lg'/>
      </a>
        <div className="col border mt-1">{`Nombre Común: ${task.nombre}`}</div>
        <div className="col border mt-1">{`Nombre Cinetífico: ${task.cientifico}`}</div>
        <div className="col border mt-1 bg-orange-200 p-1 rounded-md">{`Comentarios: ${task.comentario}`}</div>
        <li className="block bg-blue-700 mt-3 px-2 py-1 text-white text-center rounded-md w-full"><Link to={'/tabla/'} >Volver</Link></li>
      </div>
    </div>
  )
}

export default Ficha