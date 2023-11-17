import React from 'react'
import { Link } from 'react-router-dom'
import {Container} from '@mui/material'


function NavBar() {
    return (
        <Container maxWidth="sm" fixed>
        <div >
            <h1>Mysql</h1>
            <ul>
                <li>
                    <Link to={'/'}>Home</Link>
                </li>
                <li>
                    <Link to={'/new'}>Ingresar registro </Link>
                </li>
            </ul>
        </div>
</Container>
    )
}

export default NavBar