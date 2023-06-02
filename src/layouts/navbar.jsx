import React from "react";
import logo from '../assets/Logo_Wydad_Athletic_Club.png';
import en from '../assets/united-states.png'

const Navbar = () => {
    return (
        <header>
            <nav className="flex items-center py-2 px-20 justify-between">
                <div className="flex items-center">
                    <img
                        src={logo} alt="logo" className="w-14"
                    />
                </div>
                <div className="flex items-center">
                    <ul className="flex items-center space-x-4">
                        <li className="cursor-pointer hidden lg:flex text-slate-100 font-semibold">Home</li>
                        <li className="cursor-pointer hidden lg:flex text-slate-100 font-semibold">Club</li>
                        <li className="cursor-pointer hidden lg:flex text-slate-100 font-semibold">Team</li>
                        <li className="cursor-pointer hidden lg:flex text-slate-100 font-semibold">Championship</li>
                    </ul>
                </div>
                <li className="flex items-center cursor-pointer hidden lg:flex text-slate-100 font-semibold">
                    <p className="pr-2">English</p>
                    <img
                        src={en}
                        alt="language"
                        className="w-8"
                    />
                </li>
            </nav>
        </header>
    );
}

export default Navbar;