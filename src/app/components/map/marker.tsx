import { Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import L from 'leaflet';


const LocationPoint = ({text, position}: {text: string, position: [number, number]}) => {
    const icon = L.icon({ iconUrl: "./location-pin.png" });

    return (
        <Marker position={position} icon={icon}>
            <Popup>
                {text}
            </Popup>
        </Marker>
    )
}

export default LocationPoint