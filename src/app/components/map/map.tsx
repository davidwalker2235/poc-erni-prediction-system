import { MapContainer, TileLayer } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import L from 'leaflet';
import HeatMap from "@/app/components/map/heatMap";
import LocationPoint from "@/app/components/map/marker";

const Map = ({heatMap, center, hasFullScreen}: {heatMap?: boolean, center: [number, number], hasFullScreen?: boolean}) => {
    const icon = L.icon({ iconUrl: "./marker-icon.png" });
    const markers: [{position: [number, number], text: string}] = [{
        position: [41.38602511798184, 2.1694234966120516],
        text: 'ERNI Consulting'
    }]

    return (
        <MapContainer center={center} zoom={17} scrollWheelZoom style={hasFullScreen ? {height: '100%'} : {height: 400}}>
            <HeatMap active={heatMap}/>
            <TileLayer
                attribution='&copy; <a href="https://www.betterask.erni/">ERNI Consulting</a>'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {markers.map((data) => <LocationPoint {...data} />)}
        </MapContainer>
    )
}

export default Map