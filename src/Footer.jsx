import * as React from 'react';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';


export default function Footer() {
    return (
        <>
            <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0, height: '3rem', display: "flex", justifyContent: "center" }} elevation={3}>
                <Typography variant="div" color="textSecondary" align="center" sx={{ alignContent: 'center' }}>
                    {'Copyright © '}
                    <Link color="inherit" href="https://airfly-project.netlify.app/">
                        ADA Chen
                        </Link>{' '}
                    {new Date().getFullYear()}
                    {'.'}
                </Typography>
            </Paper>
        </>
    );
}