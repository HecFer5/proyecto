import React from 'react'
import { Link } from 'react-router-dom'

function NavBar() {
    return (
        <>
            <h1>Mysql</h1>
            <ul>
                <li>
                    <Link to={'/'}>Home</Link>
                </li>
                <li>
                    <Link to={'/new'}>Ingresar registro </Link>
                </li>
            </ul>
        </>

    )
}

export default NavBar