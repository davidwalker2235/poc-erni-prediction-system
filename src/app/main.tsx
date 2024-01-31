"use client"

import styles from "./page.module.css";
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import * as React from "react";
import 'leaflet/dist/leaflet.css';
import MultiActionAreaCard from "@/app/components/card";
import Map from "@/app/components/map/map";
import BarCharts from "@/app/components/BarChart";
import PieArcLabel from "@/app/components/PieArcLabel";
import BasicLineChart from "@/app/components/BasicLineChart";
import MapCard from "@/app/layouts/mapCard";

export default function Main() {
    const cardText = "Lizards are a widespread group of squamate reptiles, with over 6,000\n" +
        "                        species, ranging across all continents except Antarctica"
    return (
        <main className={styles.main}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={12} lg={12}>
                    <MapCard />
                </Grid>
                <Grid item xs={12} md={5} lg={4}>
                    <Paper elevation={6}>
                        <MultiActionAreaCard title="Bar Chart" text={cardText} >
                            <BarCharts />
                        </MultiActionAreaCard>
                    </Paper>
                </Grid>
                <Grid item xs={12} md={5} lg={4}>
                    <Paper elevation={6}>
                        <MultiActionAreaCard title="Line Chart" text={cardText}>
                            <BasicLineChart />
                        </MultiActionAreaCard>
                    </Paper>
                </Grid>
                <Grid item xs={12} md={5} lg={4}>
                    <Paper elevation={6}>
                        <MultiActionAreaCard title="Pie Chart" text={cardText}>
                            <PieArcLabel />
                        </MultiActionAreaCard>
                    </Paper>
                </Grid>
            </Grid>
        </main>
    );
}
