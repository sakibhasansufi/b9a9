import { Link, NavLink } from "react-router-dom";
import logo from '../assets/house-logo.jpg'
import { useContext } from "react";
import { AuthContext } from "../providers/Provider";


const Navbar = () => {

    const {logout} = useContext(AuthContext);

    return (

        <div className="navbar bg-base-100 sticky shadow-white top-0 right-0 left-0">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 ">
                        <li><NavLink to='/'>Home</NavLink></li>
                        <li><NavLink to='/career'>Career</NavLink></li>
                        <Link to='/login' className="btn btn-info">Login</Link>
                        <Link to='/signup' className="btn btn-accent">Sign up</Link>
                    </ul>
                </div>
                <img src={logo} className="w-10 h-10" alt="" />
                <a className=" text-xl font-semibold">Alps Home</a>
            </div>
            <div className="navbar-center hidden mr-64 lg:flex">
                <ul className="menu menu-horizontal px-1">

                    <li><NavLink to='/'>Home</NavLink></li>
                    <li><NavLink to='/career'>Career</NavLink></li>
                </ul>
            </div>
            <div className="flex gap-2">
                <div className="hidden  lg:contents   navbar-end ">
                    <Link to='/login' className="btn btn-info mr-10">Login</Link>
                    <Link to='/signup' className="btn btn-accent">Sign up</Link>

                </div>
                <div className="dropdown dropdown-end ml-20 lg:ml-0 ">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img alt="Tailwind CSS Navbar component" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                        </div>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <li>
                            <a className="justify-between">
                                Profile
                                <span className="badge">New</span>
                            </a>
                        </li>
                        <li><a>Settings</a></li>
                        <li><a>Logout</a></li>
                    </ul>
                </div>
            </div>

        </div>
    );
};

export default Navbar;