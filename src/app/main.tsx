"use client"

import styles from "./page.module.css";
import {useContext} from "react";
import {AppContext} from "@/app/providers/appProvider";
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import MultiActionAreaCard from "@/app/components/card";

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

export default function Main() {
    const context: any = useContext(AppContext)
    return (
        <main className={styles.main}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={5} lg={4}>
                    <Item>Hola</Item>
                </Grid>
                <Grid item xs={12} md={5} lg={4}>
                    <Item>Hola</Item>
                </Grid>
            </Grid>
        </main>
    );
}
