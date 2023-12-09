import { useEffect, useState } from 'react'
import { Formik, Form } from 'formik'
import { useTareas } from '../componentes/context/hooks'
import { useParams, useNavigate } from 'react-router-dom'

const Ficha = ({registro}) => {

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
    <div className="container ">
      <div className="row">
        <div className="col border-s-4 bg-slate-400 text-center">{params.id}</div>
        <div className="col border">{task.nombre}</div>

      </div>

    </div>
    // <div>
    //   <hr />
    //   <hr/>
    //   <hr/>
    //   <hr/>
    //   <h1>{params.id ? 'Editar un Registro' : 'Ingresar un nuevo registro'}</h1>

    //   <Formik
    //     initialValues={task}
    //     enableReinitialize={true}
    //     onSubmit={async (values, actions) => {
    //       console.log(values)
    //       if (params.id) {
    //         await modificaRegistro(params.id, values)
    //         navigate('/')
    //       } else {
    //         navigate('/otroReg')
    //         await crearRegistro(values)         
    //       }
    //       setTask({
    //         nombre: '',
    //         cientifico: ''
    //       })
    //     }}
    //   >

    //     {({ handleChange, handleSubmit, values, isSubmitting }) => (
    //       <Form onSubmit={handleSubmit}>
    //         <label>Nombre Común</label>
    //         <input type="text"
    //           name='nombre'
    //           onChange={handleChange}
    //           placeholder='Ingrese un nombre'
    //           value={values.nombre} />
    //         <label>Nombre Cinetífico</label>
    //         <input type="text"
    //           name='cientifico'
    //           onChange={handleChange}
    //           placeholder='Sólo si conoce el nombre'
    //           value={values.cientifico} />
    //         <button type='submit' disabled={isSubmitting}>
    //           {isSubmitting ? "Guardando" : "Guardar"}</button>
    //       </Form>
    //     )}
    //   </Formik>
    // </div>
  )
}

export default Ficha