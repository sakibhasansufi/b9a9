import { Outlet } from "react-router-dom";
import Navbar from "../shared/Navbar";
import Footer from "../shared/Footer";

const Root = () => {
    return (
        <div>
            <div className="md:max-w-7xl md:mx-auto mt-5">
                <Navbar></Navbar>
                <Outlet></Outlet>
                

            </div>
            <div>
               <Footer></Footer>
            </div>
        </div>

    );
};

export default Root;