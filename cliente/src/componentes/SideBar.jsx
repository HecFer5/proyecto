import { useState } from 'react'
import { Link } from 'react-router-dom'

const SideBar = () => {
  const xLink = 'transition ease-in-out delay-100 md:px-5 hover:text-sky-500 hover:bg-blue-100 hover:-translate-y-1 hover:scale-110 py-3 text-center mb-2'
  const [open, setOpen] = useState(false)


  return (
    <div className='bg-blue-300  py-3 fixed top-0 left-0 right-0 shadow-md'>
      <button className='ml-4'>
        <img src="../../imagenes/list.svg" alt="" onClick={() => setOpen(true)} />
      </button>
      <div className={`${!open && 'hidden'} bg-gray-700/50 min-h-screen w-full fixed top-0 left-0 right-0 backdrop-blur-sm`} onClick={() => setOpen(false)}></div>

      <div className={`${open ? 'w-60 ' : 'w-0 '}bg-cyan-600  min-h-screen  fixed top-0 left-0 transition-all  duration-300`}>
        <div className={`${!open && 'hidden '} pt-3`}>
          <button className='ml-6 mb-10'>
            <img src="../../imagenes/x-square-fill.svg" alt="" onClick={() => setOpen(false)} />
          </button>
          <ul className='flex h-5/6 flex-col justify-around md:flex-col md:justify-center w-full'>
            <li className={xLink} onClick={() => setOpen(false)}><Link to='/'>Principal</Link></li>
            <li className={xLink} onClick={() => setOpen(false)}><Link to='/new'>Ingresar</Link></li>
            <li className={xLink} onClick={() => setOpen(false)}><Link to='/tabla'>Tabla</Link></li>
            <li className={xLink} onClick={() => setOpen(false)}><Link to='/agenda'>Agenda</Link></li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default SideBar