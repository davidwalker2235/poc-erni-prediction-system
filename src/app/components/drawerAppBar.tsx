"use client"

import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Image from "next/image";

export default function ButtonAppBar() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <Image
                        src="/ERNI_logo_color.png"
                        width={70}
                        height={50}
                        alt="Picture of the author"
                    />
                    <Typography
                        fontFamily="arial"
                        variant="h6"
                        component="div"
                        sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
                    >
                        ERNI Prediction System
                    </Typography>
                    {/*<Button color="inherit">About</Button>*/}
                </Toolbar>
            </AppBar>
        </Box>
    );
}