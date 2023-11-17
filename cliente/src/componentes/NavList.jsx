import React from 'react'
import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import InboxIcon from '@mui/icons-material/Inbox'
import DraftsIcon from '@mui/icons-material/Drafts'

const NavList = () => {
    return (
        <Box sx={{ width: 250 }}>
            <nav>
                <List>
                    <ListItem>
                        <ListItemIcon>
                            <InboxIcon />
                        </ListItemIcon>
                        <ListItemText primary="inbox" />
                    </ListItem>
                    <ListItem>
                        <ListItemIcon>
                            <DraftsIcon />
                        </ListItemIcon>
                        <ListItemText primary="Draft" />
                    </ListItem>
                </List>
            </nav>
            <ListItem disablePadding>
                <ListItemButton LinkComponent="a"
                href='/new'>
                    <ListItemText>Ingresar</ListItemText>
                </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
                <ListItemButton LinkComponent="a"
                href='/'>
                    <ListItemText>Principal</ListItemText>
                </ListItemButton>
            </ListItem>
        </Box>
    )
}

export default NavList