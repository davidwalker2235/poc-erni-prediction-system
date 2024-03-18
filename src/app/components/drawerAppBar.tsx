"use client"

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Image from "next/image";
import {Aida, AidaProvider} from "../../../../aida-chatbot/src/main"

export default function ButtonAppBar() {
    const endPoint = "https://esp-services-dataoffering-openai-uksouth.openai.azure.com/";
    const azureApiKey = "bd17a73f46a348b1b73a1d97c4eab3bb"
    const deploymentId = "gpt-4-1106-preview";
    return (
        <AidaProvider credentials={
            {endPoint, azureApiKey, deploymentId}
        }>
            <Box sx={{
                flexGrow: 1,
                position: 'fixed',
                width: '100%',
                zIndex: '10000',
                top: 0
            }} >
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
                        <Aida />
                    </Toolbar>
                </AppBar>
            </Box>
        </AidaProvider>
    );
}