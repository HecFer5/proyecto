import React from 'react'
import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
// import InboxIcon from '@mui/icons-material/Inbox'
// import DraftsIcon from '@mui/icons-material/Drafts'

const NavList = ({ navLinks }) => {
    return (
        <Box sx={{ width: 250 }}>
            <nav>
                <List>
                    {navLinks.map(item => (
                        <ListItem
                            disablePadding
                            key={item.titulo}>
                          
                            <ListItemButton
                                LinkComponent="a"
                                href={item.path}> 
                                 <ListItemIcon>{item.icono} </ListItemIcon>
                                <ListItemText>{item.titulo}</ListItemText>
                            </ListItemButton>
                        </ListItem>
                    ))
                    }
                </List>
            </nav>

        </Box>
    )
}

export default NavList