
import './App.css'
import { Routes, Route } from 'react-router-dom'
// import TareasPaginas from './paginas/tareasPaginas'
import TareasForm from './paginas/TareasForm'
import NotFound from './paginas/NotFound'
// import NavBar from './componentes/NavBar'
import { TareasContextProv } from './componentes/context/TareasContext'
import Agenda from './paginas/Agenda'
import Alerta from './componentes/Alertas/Alerta'
// import BorrarTarea from './componentes/borrarTarea'
import NuevoRegistro from './componentes/Alertas/NuevoRegistro'
import { Box } from '@mui/material'
import TablaNueva from './componentes/TablaNueva'
import Ficha from './componentes/Ficha.jsx'
import NavBar4 from './componentes/NavBar4'
import Portada from './paginas/Portada'
// import SideBar from './componentes/SideBar'
function App() {


  return (
    // className='container bg-orange-200 pt-20'
    <div>
      <NavBar4 />
      <TareasContextProv>
        <Routes>
          <Route path='/' element={<Portada />} />
          <Route path='/tabla' element={<TablaNueva />} />
          <Route path='/ficha/:id' Component={Ficha} />
          <Route path='/new' element={<TareasForm />} />
          <Route path='/agenda' element={<Agenda />} />
          <Route path='/edit/:id' element={<TareasForm />} />
          <Route path='/borrar/:id' Component={Alerta} />
          <Route path='/otroReg' Component={NuevoRegistro} />

          {/* <Route path='/menulateral' Component={<SideBar/>} /> */}
          <Route path='*' Component={NotFound} />
        </Routes>
      </TareasContextProv>
    </div>

  )
}

export default App
