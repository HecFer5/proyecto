
import './App.css'
import { Routes, Route } from 'react-router-dom'
import TareasPaginas from './paginas/tareasPaginas'
import TareasForm from './paginas/TareasForm'
import NotFound from './paginas/NotFound'
import NavBar from './componentes/NavBar'
import { TareasContextProv } from './componentes/context/TareasContext'

function App() {


  return (
    <TareasContextProv>
      <NavBar />
      <Routes>
        <Route path='/' Component={TareasPaginas} />
        <Route path='/new' Component={TareasForm} />
        <Route path='/edit/:id' Component={TareasForm} />
        <Route path='*' Component={NotFound} />
      </Routes>
    </TareasContextProv>
  )
}

export default App
