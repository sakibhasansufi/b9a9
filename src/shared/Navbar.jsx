import { Link, NavLink } from "react-router-dom";
import logo from '../assets/house-logo.jpg'
import { useContext } from "react";
import { AuthContext } from "../providers/Provider";


const Navbar = () => {

    const { logout,user } = useContext(AuthContext);

    return (

        <div className="navbar  md:max-w-7xl md:mx-auto mt-5 bg-base-100 ">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 ">
                        <li><NavLink to='/'>Home</NavLink></li>
                        <li><NavLink to='/career'>Career</NavLink></li>
                        <li><NavLink to='/events'>Events</NavLink></li>
                        <li><NavLink to='/contact'>Contact us</NavLink></li>
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
                    <li><NavLink to='/events'>Events</NavLink></li>
                    <li><NavLink to='/contact'>Contact us</NavLink></li>
                </ul>
            </div>
            <div className="flex gap-2">
                <div className="hidden  lg:contents   navbar-end ">
                    {/* <Link to='/login' className="rounded-lg bg-green-500 px-6 py-2 text-[12px] font-semibold text-white duration-300 dark:hover:bg-green-950 sm:text-sm md:text-base ">Login</Link> */}
                    <Link to='/signup' className="rounded-md border border-black px-2 w-[72px] dark:border-white dark:hover:text-indigo-600 dark:hover:bg-indigo-600  py-2  duration-300 hover:bg-gray-200">Sign up</Link>

                </div>

               
                {user ?
                    <div className="dropdown dropdown-end ml-20  md:ml-72 lg:ml-0 ">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img src={user?.photoURL || "https://static.vecteezy.com/system/resources/previews/005/544/718/non_2x/profile-icon-design-free-vector.jpg"}  />
                        </div>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <li>
                            <a className="justify-between">
                                {user?.displayName || "user not found"}
                            </a>
                        </li>
                        {/* <li><a>Settings</a></li> */}
                        <li><a onClick={logout}>Logout</a></li>
                    </ul>
                </div>
                :
                <Link to='/login' className="rounded-lg bg-green-500 px-6 py-2 text-[12px] font-semibold text-white duration-300 dark:hover:bg-green-950 sm:text-sm md:text-base ">Login</Link>
                }
            </div>

        </div>
    );
};

export default Navbar;