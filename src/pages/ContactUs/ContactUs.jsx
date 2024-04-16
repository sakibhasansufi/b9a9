import { MapContainer, Marker, Popup, TileLayer, useMap } from 'react-leaflet'
import "leaflet/dist/leaflet.css"
import "./style.css"
const ContactUs = () => {
    const markers = [
        {
            id: 1,
            geocode: [48.86, 2.3522],
            popup: "Hello i am pop up 1"
        },
        {
            id: 2,
            geocode: [48.85, 2.3522],
            popup: "Hello i am pop up 2"
        },
        {
            id: 3,
            geocode: [48.855, 2.34],
            popup: "Hello i am pop up 2"
        },

    ];

    return (
        <div className='h-full'>
            <MapContainer center={[48.8566, 2.3522]} zoom={13}  scrollWheelZoom={true}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {
                    markers.map(marker => <Marker key={marker.id} position={marker.geocode}>
                        <Popup><h2>I am here</h2></Popup>
                    </Marker>)
                }

            </MapContainer>
        </div>
    );
};

export default ContactUs;