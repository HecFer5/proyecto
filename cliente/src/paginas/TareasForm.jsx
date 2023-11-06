import React from 'react'
import { Formik, Form } from 'formik'
import { CrearTareas } from '../api/tareas.api'
import { useTareas } from '../componentes/context/hooks'

const TareasForm = () => {

  const { tareas } = useTareas()
  console.log(tareas)

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
          try {
            const response = await CrearTareas(values)
            console.log(response)
            actions.resetForm()
          } catch (error) {
            console.error(error)
          }


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