
import './App.css'
import { Routes, Route } from 'react-router-dom'
// import TareasPaginas from './paginas/tareasPaginas'
import TareasForm from './paginas/TareasForm'
import NotFound from './paginas/NotFound'
// import NavBar from './componentes/NavBar'
import { TareasContextProv } from './componentes/context/TareasContext'
import NavBar2 from './componentes/NavBar2'
import Agenda from './paginas/Agenda'
import Alerta from './componentes/Alertas/Alerta'
// import BorrarTarea from './componentes/borrarTarea'
import NuevoRegistro from './componentes/Alertas/NuevoRegistro'
// import ListaRegistros from './componentes/ListaRegistros'
// import TablaSimple from './componentes/TablaSimple'
import Tabla from './componentes/tabla'
import {Box} from '@mui/material'

function App() {


  return (

    <div >
      <NavBar2 />
      <Box maxWidth={1000} px={6} pt={14}>
       <TareasContextProv>
          <Routes>
            {/* <Route path='/' Component={TareasPaginas} /> */}
            <Route path='/' Component={Tabla} />
            <Route path='/new' Component={TareasForm} />
            <Route path='/agenda' Component={Agenda} />
            <Route path='/edit/:id' Component={TareasForm} />
            <Route path='/borrar/:id' Component={Alerta} />
            <Route path='/otroRegistro' Component={NuevoRegistro} />

            {/* <Route path='/alerta/:id' Component={Alerta} /> */}

            <Route path='*' Component={NotFound} />
          </Routes>
        </TareasContextProv>

      </Box>

    </div>

  )
}

export default App
