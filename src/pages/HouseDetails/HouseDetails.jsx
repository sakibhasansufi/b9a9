
import { Helmet } from "react-helmet-async";
import { Link, useLoaderData, useParams } from "react-router-dom";


const HouseDetails = () => {
    const houseData = useLoaderData();
    const { id } = useParams();
    const idInt = parseInt(id);
    const house = houseData.find(job => job.id === idInt);

    return (
        <section className="flex min-h-[700px]  w-full items-center justify-center bg-white px-8">
            <Helmet>
                <title>Alps Home |{id}</title>
            </Helmet>
            <div className="flex w-full max-w-6xl gap-10 lg:flex-row flex-col items-center justify-between">
                <div className="max-w-md md:space-y-6 sm:space-y-5 space-y-4">
                    <h1 className="lg:text-5xl sm:text-4xl text-3xl font-bold leading-tight text-gray-900">{house.title}</h1>
                    <p className="lg:text-lg sm:text-base text-sm text-gray-600">
                        {house.big}
                    </p>
                    <div className="flex items-center space-x-4">
                        <button className="inline-flex flex-nowrap items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-primary/90 h-10 px-4 py-2 bg-blue-600 text-white">
                           <Link to='/login'>Get Started</Link> 
                        </button>
                        <p className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-primary/90 h-10 px-4 py-2 bg-transparent text-blue-600">
                           {house.location}
                        </p>

                        <p className="font-poppins text-orange-600 font-semibold text-xl">Price : ${house.price}</p>
                    </div>
                    
                </div>
                <div className="relative">
                    <img src={house.image} className="relative md:h-[600px]  sm:h-[500px] h-[300px]  w-[500px] bg-gray-400 rounded-b-full object-cover"  />
                </div>
            </div>
        </section>
    );
};

export default HouseDetails;