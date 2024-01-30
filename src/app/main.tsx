"use client"

import styles from "./page.module.css";
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import * as React from "react";
import 'leaflet/dist/leaflet.css';
import MultiActionAreaCard from "@/app/components/card";
import { BarChart } from '@mui/x-charts/BarChart';
import Map from "@/app/components/map/map";
import BarCharts from "@/app/components/BarChart";
import StackedAreas from "@/app/components/StackedAreas";
import PieArcLabel from "@/app/components/PieArcLabel";
import BasicLineChart from "@/app/components/BasicLineChart";

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

export default function Main() {
    return (
        <main className={styles.main}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={12} lg={12}>
                    <MultiActionAreaCard>
                        <Map />
                    </MultiActionAreaCard>
                </Grid>
                <Grid item xs={12} md={5} lg={4}>
                    <MultiActionAreaCard>
                        <BarCharts />
                    </MultiActionAreaCard>
                </Grid>
                <Grid item xs={12} md={5} lg={4}>
                    <MultiActionAreaCard>
                        <BasicLineChart />
                    </MultiActionAreaCard>
                </Grid>
                <Grid item xs={12} md={5} lg={4}>
                    <MultiActionAreaCard>
                        <PieArcLabel />
                    </MultiActionAreaCard>
                </Grid>
            </Grid>
        </main>
    );
}
