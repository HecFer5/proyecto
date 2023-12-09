import React from 'react'
import { Link } from 'react-router-dom'
import {Container} from '@mui/material'


function NavBar() {
    return (
        <div className='container' >
         <nav className="navbar navbar-expand-lg navbar-light bg-light " >
            <div className="container-fluid">
                    <Link to={'/'}>Home</Link>           
                    <Link to={'/new'}>Ingresar registro </Link>  
                    <Link to={'/agenda'}>Agenda</Link>  
                          
            </div>
        </nav>
</div>
    )
}

export default NavBar