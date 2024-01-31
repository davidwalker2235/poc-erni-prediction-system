"use client"

import Paper from '@mui/material/Paper';
import * as React from "react";
import 'leaflet/dist/leaflet.css';
import MultiActionAreaCard from "@/app/components/card";
import Map from "@/app/components/map/map";
import {FormControl, FormControlLabel, FormLabel, Radio, RadioGroup} from "@mui/material";

const MapCard = () => {
    const cardText = "Lizards are a widespread group of squamate reptiles, with over 6,000\n" +
        "                        species, ranging across all continents except Antarctica"
    const expandContent = () => (
        <FormControl>
            <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
            <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue="female"
                name="radio-buttons-group"
            >
                <FormControlLabel value="female" control={<Radio />} label="Female" />
                <FormControlLabel value="male" control={<Radio />} label="Male" />
                <FormControlLabel value="other" control={<Radio />} label="Other" />
            </RadioGroup>
        </FormControl>
    )

    return (
        <Paper elevation={6}>
            <MultiActionAreaCard title="Map" text={cardText} hasFullScreen hasExpand expandContent={expandContent}>
                <Map center={[41.38602511798184, 2.1694234966120516]}/>
            </MultiActionAreaCard>
        </Paper>
    );
}

export default MapCard