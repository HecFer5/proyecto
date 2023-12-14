import { useEffect, useState } from 'react'
import { Formik, Form } from 'formik'
import { useTareas } from '../componentes/context/hooks'
import { useParams, useNavigate } from 'react-router-dom'

const TareasForm = () => {

  const { crearRegistro, editarRegisto, modificaRegistro } = useTareas()
  const [task, setTask] = useState({
    nombre: "",
    cientifico: "",
    comentario: "",
  })

  const params = useParams()

  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefalut()
  }

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
    <div>

      <h1 className="text-xl font-bold uppercase text-center">{params.id ? 'Editar un Registro' : 'Ingresar un nuevo registro'}</h1>

      {/* <div className='container ml-auto mr-auto flex items-center justify-center'>
        <div className='w-full md:w-1/2'>


          <form className='bg-amber-100 px-8 pt-6 pb-8 mb-4 ' onSubmit={handleSubmit}>
            <div className="mb-4">
              <div className="grid grid-flow-row sm:grid-flow-col gap-3">
                <div className='sm:col-span-4 justify-center'>
                  <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor="nComun">Nombre Común</label>
                  <input type="text" className='shadow appearance-none border rouded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none' id='nComun' name='nComun' required placeholder='Obligatoiro' />
                </div>
                <div className='sm:col-span-4 justify-center'>
                  <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor="nCient">Nombre Científico</label>
                  <input type="text" className='shadow appearance-none border rouded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none' id='nCient' name='nCient' placeholder='Opcional' />
                </div>

              </div>

              <div className='mb-4'>
                <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor="nCient">Comentarios</label>
                <textarea className='shadow appearance-none border rouded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none' id='nCient' name='nCient' placeholder='Opcional' ></textarea>
              </div>
              <button className='bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 font-bold rounded-xl'>GUARDAR</button>
            </div>

          </form> */}
      <Formik
        initialValues={task}
        enableReinitialize={true}
        onSubmit={async (values, actions) => {
          console.log(values)
          if (params.id) {
            await modificaRegistro(params.id, values)
            navigate('/tabla')
          } else {
            navigate('/otroReg')
            await crearRegistro(values)
          }
          setTask({
            nombre: '',
            cientifico: '',
            comentario: ''
          })
        }}
      >

        {({ handleChange, handleSubmit, values, isSubmitting }) => (
          <Form onSubmit={handleSubmit} className="bg-slate-300 max-w-xl rounded-md p-4 mx-auto mt-10">
            <label className="block">Nombre Común</label>
            <input className="px-2 py-1 rounded-sm w-full" type="text"
              name='nombre'
              onChange={handleChange}
              placeholder='Campo obligatorio'
              value={values.nombre} />
            <label className="block">Nombre Cinetífico</label>
            <input className="px-2 py-1 rounded-sm w-full" type="text"
              name='cientifico'
              onChange={handleChange}
              placeholder='Opcional'
              value={values.cientifico} />
            <label className="block">Comentarios</label>
            <textarea className="px-2 py-1 rounded-sm w-full" type="text"
              name='comentario'
              onChange={handleChange}
              value={values.comentario} placeholder='Opcional' />

            <button type='submit' disabled={isSubmitting} className="block bg-indigo-500 px-2 py-1 text-white w-full rounded-md">
              {isSubmitting ? "Guardando" : "Guardar"}</button>
          </Form>
        )}
      </Formik>
      {/* </div> */}
    </div>

  )
}

export default TareasForm