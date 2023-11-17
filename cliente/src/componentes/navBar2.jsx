import React, { useState } from 'react'
import NavList from './NavList'
import { AppBar, Button, Drawer, IconButton, Toolbar } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
const NavBar2 = () => {

    const [open, setOpen] = useState(false)

    return (
        <>
        <AppBar position='fixed'>
            <Toolbar>
                <IconButton
                color="inherit"
                size="large">
                    <MenuIcon/>
                </IconButton>
            </Toolbar>
        </AppBar>



            <Button variant='contained' onClick={() => setOpen(true)}>Abrir Menu</Button>
            <Drawer
                open={open}
                anchor="left"
                onClose={() => setOpen(false)}
            >

                <NavList />
            </Drawer>
        </>
    )
}

export default NavBar2