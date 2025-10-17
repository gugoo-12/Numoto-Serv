import React, { useState } from 'react'
import first from "./images/star-removebg-preview.png"
import { NavLink, Outlet } from "react-router-dom";


function Cmain() {
    const [text, setText] = useState(null)
    return (
        <div>
            <div className=' grid grid-cols-[5%_95%] grid-rows-[78px_89%] '>
                <div
                    onMouseEnter={() => setText(1)}
                    onMouseLeave={() => setText(null)}
                    className=' w-[100%] row-span-2 p-2 h-full shadow-[0_0_4px_green] hover:w-52 transition-all duration-300 ease-in-out bg-white z-0' >
                    <img className=' w-[100%] max-w-12 sticky' src={first} alt="" />
                    <div className='  h-[85vh] '>
                        <div className=' flex flex-col ml-2 mt-5'>
                            <NavLink to="/">
                                {text ? (
                                    <div className="font-medium w-full px-1.5 py-1 rounded-xl hover:bg-green-100 transition-discrete duration-300 delay-1000">
                                        <i className="fa-solid fa-user mr-2"></i>Profile
                                    </div>
                                ) : (
                                    <button className="px-1.5 py-1">
                                        <i className="fa-solid fa-user"></i>
                                    </button>
                                )}
                            </NavLink>
                            <br />

                            <NavLink to="/contract">
                                {text ? (
                                    <div className="font-medium w-full px-1.5 py-1 rounded-xl bg-white hover:bg-green-100">
                                        <i className="fa-solid fa-file-contract mr-2"></i>
                                        <span className="inline-block transition-all duration-500 delay-1000 ease-in-out">
                                            Contract
                                        </span>
                                    </div>
                                ) : (
                                    <button className="px-1.5 py-1">
                                        <i className="fa-solid fa-file-contract"></i>
                                    </button>
                                )}
                            </NavLink>
                            <br />

                            <NavLink to="/task">
                                {text ? (
                                    <div className="font-medium w-full px-1.5 py-1 rounded-xl hover:bg-green-100">
                                        <i className="fa-solid fa-list-check mr-2"></i>Contact
                                    </div>
                                ) : (
                                    <button className="px-1.5 py-1">
                                        <i className="fa-solid fa-list-check"></i>
                                    </button>
                                )}
                            </NavLink>
                            <br />

                            <NavLink to="/team">
                                {text ? (
                                    <div className="font-medium w-full px-1.5 py-1 rounded-xl hover:bg-green-100">
                                        <i className="fa-brands fa-teamspeak mr-2"></i>Team
                                    </div>
                                ) : (
                                    <button className="px-1.5 py-1">
                                        <i className="fa-brands fa-teamspeak"></i>
                                    </button>
                                )}
                            </NavLink>
                            <br />

                            <NavLink to="/invoice">
                                {text ? (
                                    <div className="font-medium w-full px-1.5 py-1 rounded-xl hover:bg-green-100">
                                        <i className="fa-solid fa-file-invoice mr-2"></i>Invoice
                                    </div>
                                ) : (
                                    <button className="px-1.5 py-1">
                                        <i className="fa-solid fa-file-invoice"></i>
                                    </button>
                                )}
                            </NavLink>
                            <br />

                            <NavLink to="/forms">
                                {text ? (
                                    <div className="font-medium w-full px-1.5 py-1 rounded-xl hover:bg-green-100">
                                        <i className="fa-brands fa-wpforms mr-2"></i>Forms
                                    </div>
                                ) : (
                                    <button className="px-1.5 py-1">
                                        <i className="fa-brands fa-wpforms"></i>
                                    </button>
                                )}
                            </NavLink>
                            <br />

                            <NavLink to="/report">
                                {text ? (
                                    <div className="font-medium w-full px-1.5 py-1 rounded-xl hover:bg-green-100">
                                        <i className="fa-solid fa-bug mr-2"></i>Report
                                    </div>
                                ) : (
                                    <button className="px-1.5 py-1">
                                        <i className="fa-solid fa-bug"></i>
                                    </button>
                                )}
                            </NavLink>
                            <br />

                            <NavLink to="/email">
                                {text ? (
                                    <div className="font-medium w-full px-1.5 py-1 rounded-xl hover:bg-green-100">
                                        <i className="fa-solid fa-envelope mr-2"></i>Email
                                    </div>
                                ) : (
                                    <button className="px-1.5 py-1">
                                        <i className="fa-solid fa-envelope"></i>
                                    </button>
                                )}
                            </NavLink>

                        </div>
                        <div className=' relative top-[14%] ml-2'>
                            <NavLink to='/setting'>
                                    <button className="px-1.5 py-1 bg-green-200 rounded-xs">
                                        <i class="fa-solid fa-gear"></i>
                                    </button>
                            </NavLink>
                        </div>
                    </div>


                </div>
                <div className=' p-2 px-4 w-[100%] h-full flex justify-between shadow-[3px_0_4px_green] items-center'>
                    <div>
                        <h1 className=' text-2xl font-bold'>Numota</h1>
                    </div>
                    <div className=' flex justify-between border-2 w-[15%] '>
                        <p>a</p>
                        <p className='  '>b</p>
                        <p className=' '>c</p>
                        <h3 className=''>Admin</h3>
                    </div>
                </div>
                <div className=' p-4 bg-[#CCE6D7] -z-10'>
                    <div className="flex items-center justify-between mb-1">
                        <div className="flex items-center space-x-2">
                            <button className=" bg-[#CCE6D7] text-[#CCE6D7] px-2 py-2 rounded">Clients</button>
                            {/* <button className="bg-white px-4 py-2 rounded border border-gray-300 flex items-center space-x-1">
                                <span>Total</span>
                                <span className="bg-green-600 text-white rounded-full px-2">{clients.length}</span>
                            </button> */}
                        </div>
                        <div className="flex items-center space-x-2">
                            <button className="p-1 bg-white rounded hover:bg-gray-200"><i class="fa-solid fa-magnifying-glass"></i></button>
                            <button className="p-1 bg-white rounded hover:bg-gray-200"><i class="fa-solid fa-list"></i></button>
                            <button className="p-1 bg-green-600 text-white rounded hover:bg-green-700"><i class="fa-solid fa-wallet"></i></button>
                            <button className="p-1 bg-green-600 text-white rounded hover:bg-green-700"><i class="fa-solid fa-filter"></i></button>
                            <button className="p-1 bg-green-600 text-white rounded hover:bg-green-700"><i class="fa-solid fa-file-import"></i></button>
                            <button className="p-1 bg-green-600 text-white rounded hover:bg-green-700"><i class="fa-solid fa-file-export"></i></button>
                        </div>
                    </div>
                    <div>
                        <Outlet />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cmain