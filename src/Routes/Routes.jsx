
import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root"
import Home from "../pages/Home/Home";
import Error from "../pages/Error/Error";
import Login from "../pages/Login/Login";
import Signup from "../pages/Signup/Signup";
import Career from "../pages/Career/Career";

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
            }
            
        ]
        
    }
]);

export default routes;