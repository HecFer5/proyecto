
import './App.css'
import { Routes, Route } from 'react-router-dom'
import TareasPaginas from './paginas/tareasPaginas'
import TareasForm from './paginas/TareasForm'
import NotFound from './paginas/NotFound'
import NavBar from './componentes/NavBar'
import { TareasContextProv } from './componentes/context/TareasContext'
import NavBar2 from './componentes/NavBar2'

function App() {


  return (

    <div >
      <NavBar2 />
      <div >
       <TareasContextProv>
          <Routes>
            <Route path='/' Component={TareasPaginas} />
            <Route path='/new' Component={TareasForm} />
            <Route path='/edit/:id' Component={TareasForm} />
            <Route path='*' Component={NotFound} />
          </Routes>
        </TareasContextProv>

      </div>

    </div>

  )
}

export default App
