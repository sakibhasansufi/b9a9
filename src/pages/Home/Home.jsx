
import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Card from "../../Card/Card";
import Agents from "../Agents/Agents";
import Partners from "../Partners/Partners";
import ClientFeedback from "../ClientFeedback/ClientFeedback";
import { Helmet } from "react-helmet-async";

const Home = () => {
    const houseData = useLoaderData();
    const [currentSlider, setCurrentSlider] = useState(0);
    const sliders = [{ img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", title: "House 1", des: "White and brown concrete building." }, { img: "https://images.unsplash.com/photo-1531971589569-0d9370cbe1e5?q=80&w=1781&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", title: "House 2", des: "Brown and white wooden house near green trees." }, { img: "https://images.unsplash.com/photo-1600585153490-76fb20a32601?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", title: "House 3", des: "Lighted house besides tree." }, { img: "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", title: "House 4", des: "Black and white concrete building." }, { img: "https://images.unsplash.com/photo-1613553507747-5f8d62ad5904?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", title: "House 5", des: "White and brown concrete building." },];
    const prevSlider = () => setCurrentSlider((currentSlider) => currentSlider === 0 ? sliders.length - 1 : currentSlider - 1);
    const nextSlider = () => setCurrentSlider((currentSlider) => currentSlider === sliders.length - 1 ? 0 : currentSlider + 1);
    const isSmallScreen = window.innerWidth <= 768;
    return (
        <div>
            <Helmet>
                <title>Alps Home | Home
                </title>
            </Helmet>
            <div className="w-full  h-60 sm:h-96 md:h-[650px] flex flex-col xl:flex-row items-center justify-center gap-5 lg:gap-10 relative bg-cover before:absolute before:bg-black/50 before:inset-0 transform duration-1000 ease-linear  overflow-hidden"
                style={{ backgroundImage: `url(${currentSlider === 0 ? sliders[sliders.length - 1].img : sliders[currentSlider - 1].img})` }}>
                {/* arrow */}
                <div className="absolute bottom-1/4 flex gap-3  px-5">
                    {/* arrow left */}
                    <button onClick={prevSlider} className="flex justify-center items-center hover:bg-white/30 rounded-full w-6 h-6 md:w-8 md:h-8">
                        <svg viewBox="0 0 1024 1024" className="w-4 h-4 md:w-6 md:h-6 icon" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path fill="#0095FF" d="M685.248 104.704a64 64 0 010 90.496L368.448 512l316.8 316.8a64 64 0 01-90.496 90.496L232.704 557.248a64 64 0 010-90.496l362.048-362.048a64 64 0 0190.496 0z"></path></g></svg>
                    </button>
                    {/* arrow right */}
                    <button onClick={nextSlider} className="flex justify-center items-center hover:bg-white/30 rounded-full w-6 h-6 md:w-8 md:h-8">
                        <svg viewBox="0 0 1024 1024" className="w-4 h-4 md:w-6 md:h-6 icon" xmlns="http://www.w3.org/2000/svg" fill="#000000" transform="rotate(180)"><g strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path fill="#0095FF" d="M685.248 104.704a64 64 0 010 90.496L368.448 512l316.8 316.8a64 64 0 01-90.496 90.496L232.704 557.248a64 64 0 010-90.496l362.048-362.048a64 64 0 0190.496 0z"></path></g></svg>
                    </button>
                </div>
                {/* text container here */}
                <div className="w-1/2 px-4 left-0 absolute drop-shadow-lg text-white rounded-lg">
                    <h1 className="lg:text-3xl mb-3">{sliders[currentSlider].title}</h1>
                    <p className="text-xs sm:text-sm md:text-base lg:text-lg">{sliders[currentSlider].des}</p>
                </div>
                {/* slider container */}
                <div className="w-1/2 ml-auto overflow-hidden  absolute -right-5 lg:-right-16 z-50 px-4 py-10">
                    <div className="ease-linear duration-300 flex gap-4 items-center"
                        style={{ transform: `translateX(-${currentSlider * (isSmallScreen ? 98 : 200)}px)` }}>
                        {/* sliders */}
                        {sliders.map((slide, inx) => (
                            <img key={inx} src={slide.img}
                                className={`h-[180px] sm:h-[200px] lg:h-[320px] min-w-[90px] lg:min-w-[184px] ${currentSlider - 1 === inx ? 'scale-0' : 'scale-100 delay-500'
                                    } drop-shadow-lg shadow-lg shadow-black bg-black/50 duration-300 rounded-lg z-50`}
                                alt={slide.title} />
                        ))}
                    </div>
                </div>
            </div>
            {/* card section */}
            <div >
                <h2 className="font-poppins text-3xl font-bold text-center mt-16 mb-6">Properties for sale and rent</h2>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 space-y-10 mb-8'>
                    {
                        houseData.map(housedata => <Card key={houseData.id} housedata={housedata}></Card>)
                    }

                </div>
            </div>

            {/* Agents section */}

            <section className="mt-8">
                <h2 className="font-poppins text-3xl font-bold text-center mt-16 mb-6">Meet our agents</h2>
                    <Agents></Agents>
                

            </section>

            {/* Partners section */}

            <section className="mt-8 ">
            <h2 className="font-poppins text-3xl font-bold text-center mt-16 mb-6">Our Partners</h2>
                <Partners></Partners>
            </section>


            {/* Client feedback section added */}
            <section className="mt-8">
            <h2 className="font-poppins text-3xl font-bold text-center mt-16 mb-6">What Our Client Says</h2>
                    <ClientFeedback></ClientFeedback>
            </section>


        </div>

    );
};

export default Home;