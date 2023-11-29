import { useState, useEffect } from 'react'
import NavList from './NavList'
import { AppBar, Button, Drawer, IconButton, Toolbar, Typography, Box, paginationClasses } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import CottageTwoToneIcon from '@mui/icons-material/CottageTwoTone';
import AppRegistrationTwoToneIcon from '@mui/icons-material/AppRegistrationTwoTone';
import EventNoteTwoToneIcon from '@mui/icons-material/EventNoteTwoTone';

const navLinks = [
    {
        titulo: "Principal",
        path: '/',
        icono: <CottageTwoToneIcon />
    },
    {
        titulo: "Ingresos",
        path: '/new',
        icono: <AppRegistrationTwoToneIcon />
    },
    {
        titulo: "Agenda",
        path: '/agenda',
        icono: <EventNoteTwoToneIcon />
    }
]



const NavBar2 = () => {
    const [open, setOpen] = useState(false)

  

    useEffect(() => {

    }, []);

    return (
        <>
            <AppBar position='fixed'>
                <Toolbar>
                    <IconButton
                        color="inherit"
                        size="large"
                        onClick={() => setOpen(true)}
                        sx={{ display: { xs: "flex", sm: "none" } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant='h5' sx={{ flexGrow: 1 }}>Menu</Typography>

                    <Box sx={{ display: { xs: "none", sm: "block" } }}>
                        {navLinks.map(item => (
                            <Button color='inherit'
                                key={item.titulo}
                                component='a'
                                href={item.path}
                                
                            
                            >
                                {item.titulo}

                            </Button>
                        ))
                        }

                    </Box>

                </Toolbar>
            </AppBar>
            <Drawer
                open={open}
                anchor="left"
                onClose={() => setOpen(false)}
            >
                <NavList navLinks={navLinks} />
            </Drawer>
        </>
    )
}

export default NavBar2