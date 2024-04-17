import { useParams } from "react-router-dom";


const HouseDetails = () => {
    const {id} = useParams();

    return (
        <div>
            this is a house detail of {id}
        </div>
    );
};

export default HouseDetails;