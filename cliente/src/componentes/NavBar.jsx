import React from 'react'
import { Link } from 'react-router-dom'

function NavBar() {
    return (
        <div className='bg-zinc-700 flex justify-between'>
            <h1>Mysql</h1>
            <ul className='flex'>
                <li>
                    <Link to={'/'}>Home</Link>
                </li>
                <li>
                    <Link to={'/new'}>Ingresar registro </Link>
                </li>
            </ul>
        </div>

    )
}

export default NavBar