import { MapContainer, Marker, Popup, TileLayer, useMap } from 'react-leaflet'
import "leaflet/dist/leaflet.css"
import "./style.css"
const ContactUs = () => {
    const markers = [
        {
            id: 1,
            geocode: [40.7125771,  -74.0054386],
            popup: "Hello i am pop up 1"
        }

    ];

    return (
        <div className='md:max-w-7xl md:mx-auto md:ml-16 mt-8 mb-8'>
            <MapContainer center={[40.7125771,  -74.0054386]} zoom={13}  scrollWheelZoom={true}>
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