import React, { useState } from 'react';
import first from "./images/star-removebg-preview.png";
import { NavLink, Outlet } from "react-router-dom";

function Cmain() {
    const [isExpanded, setIsExpanded] = useState(false);

    const navItems = [
        { to: "/", icon: "fa-solid fa-user", label: "Client" },
        { to: "/contract", icon: "fa-solid fa-file-contract", label: "Quotation"},
        { to: "/task", icon: "fa-solid fa-list-check", label: "Contract"},
        { to: "/team", icon: "fa-brands fa-teamspeak", label: "Team" },
        { to: "/invoice", icon: "fa-solid fa-file-invoice", label: "Inspection"},
        { to: "/forms", icon: "fa-brands fa-wpforms", label: "Forms"},
        { to: "/report", icon: "fa-solid fa-bug", label: "Report"},
        { to: "/email", icon: "fa-solid fa-envelope", label: "Email"},
    ];

    const NavItem = ({ to, icon, label, delay }) => (
        <NavLink
            to={to}
            className={({ isActive }) =>
                `flex items-center rounded-lg transition-all duration-200 font-medium group ${isActive
                    ? 'bg-green-500 text-white shadow-md'
                    : 'text-gray-700 hover:bg-green-50 hover:text-green-700'
                } ${isExpanded ? 'px-3 py-2' : 'px-1 py-1.5 justify-center'}`
            }
        >
            {isExpanded ? (
                <div
                    className="flex items-center w-full"
                    style={{
                        animation: `fadeInSlide 200ms ease-out 100ms forwards`,
                        opacity: 0,
                        transform: 'translateX(-10px)'
                    }}
                >
                    <i className={`${icon} mr-3 text-base w-5 text-center`}></i>
                    <span className="font-medium tracking-wide whitespace-nowrap text-sm">{label||'e'}</span>
                </div>
            ) : (
                <div className="w-full flex pl-[5px]">
                    <div className="rounded-lg transition-colors duration-200">
                        <i className={`${icon} text-base`}></i>
                    </div>
                </div>
            )}
        </NavLink>
    );

    return (
        <div className="min-h-screen bg-gray-50 relative font-[Inter]">
            {/* Sidebar - Fixed so it doesn’t push other divs */}
            <div
                onMouseEnter={() => setIsExpanded(true)}
                onMouseLeave={() => setIsExpanded(false)}
                className={`
                    fixed left-0 top-0 h-full bg-white shadow-2xl border-r border-gray-200 
                    transition-all duration-300 ease-in-out z-40 flex flex-col
                    ${isExpanded ? 'w-56' : 'w-16'}
                `}
            >
                {/* Logo */}
                <div className={`flex items-center border-b border-gray-100 ${isExpanded ? 'px-4 py-3 justify-start' : ' py-3 pl-4 '}`}>
                    <img className="w-8 h-8 transition-transform duration-300" src={first} alt="Logo" />
                    {isExpanded && (
                        <h2
                            style={{
                                animation: `fadeInSlide 200ms ease-out 100ms forwards`,
                                opacity: 0,
                                transform: 'translateX(-10px)'
                            }}
                            className="ml-3 text-lg font-bold text-gray-800 tracking-tight whitespace-nowrap">
                            Numota
                        </h2>
                    )}
                </div>

                {/* Navigation Items */}
                <div className="flex-1 flex flex-col space-y-1 p-3">
                    {navItems.map((item) => (
                        <NavItem key={item.to} {...item} />
                    ))}
                </div>

                {/* Settings */}
                <div className="p-3 border-t border-gray-100">
                    <NavLink
                        to="/setting"
                        className={({ isActive }) =>
                            `flex items-center rounded-lg transition-all duration-200 ${isActive
                                ? 'bg-blue-500 text-white'
                                : 'bg-gray-100 text-gray-700 hover:bg-blue-500 hover:text-white'
                            } ${isExpanded ? 'px-3 py-2' : 'pl-2.5 py-2'}`
                        }
                    >
                        <i className="fa-solid fa-gear text-base"></i>
                        {isExpanded && (
                            <span
                                style={{
                                    animation: `fadeInSlide 200ms ease-out 100ms forwards`,
                                    opacity: 0,
                                    transform: 'translateX(-10px)'
                                }}
                                className="ml-3 font-medium tracking-wide whitespace-nowrap text-sm">Settings</span>
                        )}
                    </NavLink>
                </div>
            </div>

            {/* Main Content */}
            <div className="ml-16 transition-all duration-300 flex flex-col h-screen">
                <header className="bg-white shadow-lg border-b border-gray-200 px-6 py-3 z-30">
                    <div className="flex justify-between items-center">
                        <div></div>
                        <div className="flex items-center space-x-3">
                            <button className="p-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition text-gray-600 hover:text-gray-800">
                                <i className="fa-solid fa-table-columns text-sm"></i>
                            </button>
                            <button className="p-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition text-gray-600 hover:text-gray-800">
                                <i className="fa-regular fa-message text-sm"></i>
                            </button>
                            <button className="p-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition text-gray-600 hover:text-gray-800 relative">
                                <i className="fa-regular fa-bell text-sm"></i>
                                <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full"></span>
                            </button>
                            {/* User */}
                            <div className="flex items-center space-x-2 ml-3 relative group">
                                <div className="flex items-center space-x-2 cursor-pointer p-1 rounded-lg hover:bg-gray-100 transition">
                                    <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-blue-500 rounded-full flex items-center justify-center text-white font-semibold text-xs shadow-md">
                                        A
                                    </div>
                                    <div className="flex items-center">
                                        <span className="font-semibold text-gray-800 text-sm">Admin</span>
                                        <i className="fa-solid fa-chevron-down text-xs ml-1 text-gray-500 transition-transform duration-200 group-hover:rotate-180"></i>
                                    </div>
                                </div>
                                <div className="absolute right-0 top-10 hidden group-hover:block bg-white shadow-xl border border-gray-200 rounded-lg py-2 min-w-40 z-40">
                                    <button className="w-full text-left px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 flex items-center">
                                        <i className="fa-solid fa-user mr-2 text-gray-400"></i>
                                        Profile
                                    </button>
                                    <button className="w-full text-left px-3 py-2 text-sm text-red-600 hover:bg-red-50 flex items-center">
                                        <i className="fa-solid fa-right-from-bracket mr-2"></i>
                                        Logout
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>

                <main className="flex-1 bg-gray-100 px-2 py-2 overflow-auto">
                    <Outlet />
                </main>
            </div>
        </div>
    );
}

export default Cmain;
