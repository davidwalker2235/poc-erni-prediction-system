"use client"

import Paper from '@mui/material/Paper';
import * as React from "react";
import 'leaflet/dist/leaflet.css';
import MultiActionAreaCard from "@/app/components/card";
import Map, {MapType} from "@/app/components/map/map";
import {FormControl, FormControlLabel, FormLabel, Radio, RadioGroup} from "@mui/material";

const MapCard = () => {
    const [value, setValue] = React.useState('positions');

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue((event.target as HTMLInputElement).value);
    };
    const cardText = "Lizards are a widespread group of squamate reptiles, with over 6,000\n" +
        "                        species, ranging across all continents except Antarctica"
    const expandContent = () => (
        <FormControl>
            <RadioGroup
                row
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue={value}
                onChange={handleChange}
                name="radio-buttons-group"
            >
                <FormControlLabel value="positions" control={<Radio />} label="Positions" />
                <FormControlLabel value="heatMap" control={<Radio />} label="Heat Map" />
            </RadioGroup>
        </FormControl>
    )

    return (
        <Paper elevation={6}>
            <MultiActionAreaCard title="Map" text={cardText} hasFullScreen hasExpand expandContent={expandContent}>
                <Map center={[41.38602511798184, 2.1694234966120516]} mapType={value as MapType}/>
            </MultiActionAreaCard>
        </Paper>
    );
}

export default MapCard