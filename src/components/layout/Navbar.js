import React, {useState} from 'react';
import { AppBar, IconButton, Toolbar, Typography } from '@mui/material';
import MenuIcon from "@mui/icons-material/Menu";
import LeftDrawer from './LeftDrawer';
const Navbar = () => {
    const [openDrawer, setOpenDrawer] = useState(false)
    const toggleDrawer = () => {
        setOpenDrawer(prevDrawer => !prevDrawer);
    }
    return (
        <>
            <AppBar
                sx={{backgroundColor: "rgb(255, 255, 255)"}} 
                position="sticky"
            >
                <Toolbar>
                    <IconButton 
                        size="large"
                        edge="start"
                        
                        aria-label="menu"
                        sx={{mr: 2, color: "rgb(201,45,45)"}}
                        onClick={toggleDrawer}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{flexGrow: 1, color: "rgb(201, 45, 45)", marginLeft: "25px"}}>
                        Pokédex
                    </Typography>
                </Toolbar>
            </AppBar>
            <LeftDrawer isOpen={openDrawer} toggleIsOpen={toggleDrawer} />
            </>
    );
}

export default Navbar;
