import { MapContainer, Marker, Popup, TileLayer, useMap } from 'react-leaflet'
import "leaflet/dist/leaflet.css"
import "./style.css"
import { Helmet } from 'react-helmet-async';
import { Icon } from 'leaflet';
import { FaMapMarkerAlt } from "react-icons/fa";
const ContactUs = () => {
    const markers = [
        {
            id: 1,
            geocode: [40.7125771, -74.0054386],
            popup: "Hello i am pop up 1"
        }

    ];


    const customeIcon = new Icon({
        iconUrl : <FaMapMarkerAlt />,
        iconSize : [38,38]
    })

    return (
        <div className='md:max-w-7xl md:mx-auto'>
            <Helmet>
                <title> Alps Home |Contact us</title>
            </Helmet>
            <h2 className='text-center text-3xl font-bold mt-5 font-mulish'>Our Location and Contact Information</h2>
            <div className=' md:flex justify-center  md:gap-10 lg:gap-20  md:ml-16 mt-8 mb-8 '>
                <MapContainer center={[40.7125771, -74.0054386]} zoom={13} scrollWheelZoom={false}>
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    {
                        markers.map(marker => <Marker icon={customeIcon} key={marker.id} position={marker.geocode} >
                            <Popup><h2>I am here</h2></Popup>
                        </Marker>)
                    }

                </MapContainer>


                <div className='ml-10 mt-8 md:mt-0 lg:mt-0 lg:ml-0'>
                    <h2 className='text-green-500 text-xl font-poppins font-semibold'>Send us Message</h2>
                    <div className="relative mt-7 w-max">
                        <input className="peer border-b w-56 md:w-64 lg:w-96 border-gray-500 focus:border-[#1B8EF8] bg-transparent py-2 text-[#1B8EF8] focus:outline-none" type="text" id='navigate_ui_input_44' />
                        <label className="absolute -top-2 left-0 bg-transparent text-xs text-gray-400 duration-300 peer-placeholder-shown:left-0 peer-placeholder-shown:top-[50%] peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-2 peer-focus:-translate-y-0 peer-focus:text-xs peer-focus:text-blue-400" htmlFor="navigate_ui_input_44">
                            Your Name
                        </label>


                    </div>




                    <div className="relative mt-8 w-max">
                        <input className="peer  border-b  w-56 md:w-64 lg:w-96 border-gray-500 focus:border-[#1B8EF8] bg-transparent py-2 text-[#1B8EF8] focus:outline-none" type="text" id='navigate_ui_input_44' />
                        <label className="absolute -top-2 left-0 bg-transparent text-xs text-gray-400 duration-300 peer-placeholder-shown:left-0 peer-placeholder-shown:top-[50%] peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-2 peer-focus:-translate-y-0 peer-focus:text-xs peer-focus:text-blue-400" htmlFor="navigate_ui_input_44">
                            Email
                        </label>
                    </div>


                    <textarea className='mt-8 p-4 border-2 w-56 md:w-64 lg:w-96 border-black lg:relative' name="" id="" cols="25" rows="5" placeholder='Your Message'></textarea>
                    <button className="rounded-lg w-56 md:w-64 lg:w-96 border-2 lg:absolute lg:mt-60 lg:-ml-96  px-8 py-3 text-xl text-green-500 duration-200 hover:bg-green-500 hover:text-white">Send Message</button>
                </div>











            </div>
        </div>

    );
};

export default ContactUs;