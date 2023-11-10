import { useEffect, useState } from 'react'
import { Formik, Form } from 'formik'
import { useTareas } from '../componentes/context/hooks'
import { useParams, useNavigate } from 'react-router-dom'

const TareasForm = () => {

  const { crearRegistro, editarRegisto, modificaRegistro } = useTareas()
  const [task, setTask] = useState({
    nombre: "",
    cientifico: "",
  })

  const params = useParams()
  const navigate = useNavigate()
  useEffect(() => {
    const traerTarea = async () => {
      if (params.id) {
        const task = await editarRegisto(params.id)
        setTask({
          nombre: task.nombre,
          cientifico: task.cientifico
        })
      }
    }
    traerTarea()
  }, [])

  return (
    <div>
      <h1>{params.id ? 'Editar un Registro' : 'Ingresar un registro'}</h1>
      
      <Formik
        initialValues={task} 
        enableReinitialize={true}
        onSubmit={async (values, actions) => {
          console.log(values)
if (params.id){
 await modificaRegistro(params.id, values)
 navigate('/')
}else{
  await crearRegistro(values)
}
          setTask({
            nombre:'',
            cientifico:''
          })

        }}
      >

        {({ handleChange, handleSubmit, values, isSubmitting }) => (
          <Form onSubmit={handleSubmit}>
            <label>Nombre Común</label>
            <input type="text"
              name='nombre'
              onChange={handleChange}
              placeholder='Ingrese un nombre'
              value={values.nombre} />
            <label>Nombre Cinetífico</label>
            <input type="text"
              name='cientifico'
              onChange={handleChange}
              placeholder='Sólo si conoce el nombre'
              value={values.cientifico} />
            <button type='submit' disabled={isSubmitting}>
              {isSubmitting ? "Guardar" : "Guardando"}</button>
          </Form>
        )}
      </Formik>
    </div>
  )
}

export default TareasForm