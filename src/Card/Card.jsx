import PropTypes from 'prop-types';
import { FaMapMarkerAlt } from "react-icons/fa";
import { Link } from 'react-router-dom';


const Card = ({ housedata }) => {
    const { id,image, title, price, description,location } = housedata;

    return (
        <div>

            <div className="mx-auto max-w-[350px] h-[470px] font-mulish space-y-4 rounded-lg bg-white p-6 shadow-lg md:w-[350px] dark:bg-[#18181B]">
                <img className="h-[200px] w-[350px] rounded-lg object-cover" src={image} />
                <div className="grid gap-2">
                    <h1 className="text-lg font-semibold ">{title}</h1>
                    <p className="text-sm text-gray-500 dark:text-white/60">{description}</p>
                    <div className='flex justify-between'>
                        <div className="text-[#FF5400] text-lg font-bold font-mulish">${price}</div>
                        <div className='flex items-center gap-3 font-poppins'><FaMapMarkerAlt /> {location}</div>
                    </div>

                </div>
                <div className="flex justify-center">
                    <button className="rounded-lg bg-slate-800 px-6 py-2 text-[12px] font-semibold text-white duration-300 hover:bg-slate-950 sm:text-sm md:text-base "><Link to={`/housedata/${id}`}>View Details</Link> </button>

                </div>
            </div>
        </div>

    );
};

Card.propTypes = {
    housedata: PropTypes.array
}

export default Card;