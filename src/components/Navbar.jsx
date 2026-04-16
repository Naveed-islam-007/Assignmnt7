import React from 'react';
import { CiClock2 } from 'react-icons/ci';
import { IoHomeOutline } from 'react-icons/io5';
import { TfiStatsUp } from 'react-icons/tfi';
import { NavLink } from 'react-router';

const Navbar = () => {
    return (
        <div>
            <div className="navbar bg-base-100 shadow-sm">
                
                <div className="flex-1">
                    <NavLink to={'/'}o className="btn btn-ghost text-xl">
                        Keen<span className='text-green-800'>Keeper</span>
                    </NavLink>
                </div>

                <div className="flex-none">
                    <ul className="menu menu-horizontal px-1 gap-2">

                        <li>
                            <NavLink
                                to="/"
                                className={({ isActive }) =>
                                    isActive
                                        ? "bg-green-800 text-white px-3 py-2 rounded-lg flex items-center gap-1 text-xl font-bold"
                                        : "px-3 py-2 flex items-center gap-1 hover:bg-gray-100 rounded-lg text-xl font-bold"
                                }
                            >
                                <IoHomeOutline /> Home
                            </NavLink>
                        </li>

                        <li>
                            <NavLink
                                to="/timeline"
                                className={({ isActive }) =>
                                    isActive
                                        ? "bg-green-800 text-white px-3 py-2 rounded-lg flex items-center gap-1 text-xl font-bold"
                                        : "px-3 py-2 flex items-center gap-1 hover:bg-gray-100 rounded-lg text-xl font-bold"
                                }
                            >
                                <CiClock2 /> Timeline
                            </NavLink>
                        </li>

                        <li>
                            <NavLink
                                to="/stats"
                                className={({ isActive }) =>
                                    isActive
                                        ? "bg-green-800 text-white px-3 py-2 rounded-lg flex items-center gap-1 text-xl font-bold"
                                        : "px-3 py-2 flex items-center gap-1 hover:bg-gray-100 rounded-lg text-xl font-bold"
                                }
                            >
                                <TfiStatsUp /> Stats
                            </NavLink>
                        </li>

                    </ul>
                </div>

            </div>
        </div>
    );
};

export default Navbar;