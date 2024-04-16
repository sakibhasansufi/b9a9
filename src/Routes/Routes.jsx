
import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root"
import Home from "../pages/Home/Home";
import Error from "../pages/Error/Error";
import Login from "../pages/Login/Login";
import Signup from "../pages/Signup/Signup";
import Career from "../pages/Career/Career";
import Events from "../pages/Events/Events";
import ContactUs from "../pages/ContactUs/ContactUs";

const routes= createBrowserRouter([
    {
        path : '/',
        element : <Root></Root>,
        errorElement : <Error></Error>,
        children : [
            {
                path : '/',
                element : <Home></Home>,
                loader : () => fetch('/public/houseData.json')
            },
            {
                path : '/login',
                element : <Login></Login>
            },
            {
                path : '/signup',
                element : <Signup></Signup>
            },
            {
                path : '/career',
                element : <Career></Career>,
                loader : () => fetch('/public/jobs.json')
            },
            {
                path : '/events',
                element : <Events></Events>
            },
            {
                path : '/contact',
                element : <ContactUs></ContactUs>
            }
            
        ]
        
    }
]);

export default routes;