import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import { blue } from '@mui/material/colors';


export default function Header() {
    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar position="static">
                <Toolbar>
                    <Avatar sx={{ bgcolor: blue[200] }}>A</Avatar>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1, pl: 3 }}>
                        ADA CHEN
                    </Typography>
                </Toolbar>
            </AppBar>
        </Box>
    );
}