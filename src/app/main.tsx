"use client"

import styles from "./page.module.css";
import Grid from '@mui/material/Grid';
import * as React from "react";
import 'leaflet/dist/leaflet.css';
import MapCard from "@/app/layouts/mapCard";
import LineChartCard from "@/app/layouts/lineChartCard";

export default function Main() {
    const cardText = "Lizards are a widespread group of squamate reptiles, with over 6,000\n" +
        "                        species, ranging across all continents except Antarctica"
    return (
        <main className={styles.main}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={12} lg={12}>
                    <MapCard />
                </Grid>
                <Grid item xs={12} md={12} lg={12}>
                    <LineChartCard />
                </Grid>
            </Grid>
        </main>
    );
}
