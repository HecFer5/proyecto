import React from 'react'
import { Formik, Form } from 'formik'
import { useTareas } from '../componentes/context/hooks'
import { useParams } from 'react-router-dom'

const TareasForm = () => {

  const { crearRegistro } = useTareas()
  const { tareas } = useTareas()
  const params = useParams()

  console.log(params)

  return (
    <>
      <Formik
        initialValues={
          {
            nombre: "",
            cientifico: "",
          }}
        onSubmit={async (values, actions) => {
          console.log(values)
          crearRegistro(values)
          actions.resetForm()

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
    </>
  )
}

export default TareasForm