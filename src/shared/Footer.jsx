import { FaArrowRight } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Footer = () => {
    return (

        <footer className="flex flex-col text-black">
            <div className="flex flex-col items-start justify-around gap-3 bg-sky-50 p-10 py-10 md:flex-row md:gap-0 md:items-center">
                <form>
                    <h2 className="text-lg font-semibold">Subscribe to our newsletter</h2>
                    
                    <div className="relative w-max mt-8">
                        <input className="peer border-b border-gray-500 focus:border-[#1b1b1c] bg-transparent py-2 text-[#0e0e0e] focus:outline-none" type="text" id='navigate_ui_input_44' />
                        <label className="absolute -top-2 left-0 bg-transparent text-xs text-black duration-300 peer-placeholder-shown:left-0 peer-placeholder-shown:top-[50%] peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-2 peer-focus:-translate-y-0 peer-focus:text-xs peer-focus:text-black" htmlFor="navigate_ui_input_44">
                            Email
                        </label>
                        <button className="btn btn-primary"><FaArrowRight /></button>
                    </div>

                </form>
                <div className="grid grid-cols-2 gap-32 md:grid-cols-2">
                    <nav className="text-lg ">
                        <ul className="space-y-3">
                            <li>
                                <Link to='/' className="cursor-pointer hover:underline">Home</Link>
                            </li>
                            <li>
                                <a className="cursor-pointer hover:underline">Contact</a>
                            </li>
                            <li>
                                <a className="cursor-pointer hover:underline">About</a>
                            </li>
                        </ul>
                    </nav>
                    <nav className="text-lg">
                        <ul className="space-y-3">
                            <li>
                                <a className="cursor-pointer hover:underline">Services</a>
                            </li>
                            <li>
                                <a className="cursor-pointer hover:underline">Add</a>
                            </li>
                            <li>
                                <a className="cursor-pointer hover:underline">Portfolio</a>
                            </li>
                        </ul>
                    </nav>
                </div>

            </div>
            <aside className="bg-sky-100 py-5 text-center text-sm">
                <p>&copy; 2024 Alps Home. All Rights Reserved.</p>
            </aside>
        </footer>

    );
};

export default Footer;