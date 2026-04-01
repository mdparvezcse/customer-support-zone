import React from 'react';

const Navbar = () => {
    return (

        <div className="navbar bg-base-100 shadow-sm px-4 lg:px-20 flex flex-col lg:flex-row justify-between items-center gap-4">


            <div>
                <a className="btn btn-ghost text-2xl font-bold">CS — Ticket System</a>
            </div>

            <div className="flex flex-col lg:flex lg:flex-row items-center gap-4">

                <ul className="grid grid-cols-3 lg:flex gap-3 lg:gap-5 items-center text-xl font-regular">
                    <li><a href="">Home</a></li>
                    <li><a href="">FAQ</a></li>
                    <li><a href="">Changelog</a></li>
                    <li><a href="">Blog</a></li>
                    <li><a href="">Download</a></li>
                    <li><a href="">Contact</a></li>
                </ul>

                <button className="btn bg-linear-to-r from-[#632EE3] to-[#9F62F2] text-white font-medium text-xl">
                    New Ticket
                </button>

            </div>
        </div>

    );
};

export default Navbar;