import React from 'react';
import { Drawer, List, ListItemText, ListItem, ListItemIcon } from '@mui/material';
import { Box } from '@mui/system';
import { Link } from 'react-router-dom';

const Leftdrawer = ({isOpen, toggleIsOpen}) => {
    return (
        <Drawer
            open={isOpen}
            onClose={toggleIsOpen}
        >
            <Box 
                sx={{width: 250}}
                role="presentation"
                onClick={toggleIsOpen}
            >
                <List>
                    <ListItem button component={Link} to="/">
                        <ListItemIcon>
                            <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/poke-ball.png" alt="" />
                        </ListItemIcon>
                        <ListItemText primary="Pokédex" />
                    </ListItem>
                </List>
            </Box>
        </Drawer>
    );
}

export default Leftdrawer;
