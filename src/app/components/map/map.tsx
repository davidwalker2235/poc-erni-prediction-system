import { MapContainer, Marker, Popup, TileLayer, Circle } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import L from 'leaflet';
// @ts-ignore
import { HeatmapLayer } from "react-leaflet-heatmap-layer-v3";
import {addressPoints} from "@/app/components/map/addressPoints";

const Map = () => {
    const icon = L.icon({ iconUrl: "./marker-icon.png" });
    const heatmapOptions = {
        radius: 20,
        blur: 20,
        maxZoom: 18,
        minOpacity: 0.5,
        maxOpacity: 1
    };
    return (
        <MapContainer center={[41.38602511798184, 2.1694234966120516]} zoom={17} scrollWheelZoom style={{height: 400, width: "100%"}}>
            <HeatmapLayer
                fitBoundsOnLoad
                fitBoundsOnUpdate
                points={addressPoints}
                longitudeExtractor={(point: any) => point[1]}
                latitudeExtractor={(point: any) => point[0]}
                key={Math.random() + Math.random()}
                intensityExtractor={(point: any) => parseFloat(point[2])}
                {...heatmapOptions}
            />
            <TileLayer
                attribution='&copy; <a href="https://www.betterask.erni/">ERNI Consulting</a>'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[41.3893059833, 2.2330650333]} icon={icon}>
                <Popup>
                    ERNI Consulting
                </Popup>
            </Marker>
        </MapContainer>
    )
}

export default Map