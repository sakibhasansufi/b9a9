import { Outlet } from "react-router-dom";
import Navbar from "../shared/Navbar";
import Footer from "../shared/Footer";

const Root = () => {
    return (
        <div>
            <div >
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