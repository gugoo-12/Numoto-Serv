import React from 'react'
import first from "./images/star-removebg-preview.png"
import { NavLink, Outlet } from "react-router-dom";


function Cmain() {
    return (
        <div>
            <div className=' grid grid-cols-[5%_95%] grid-rows-[78px_89%] '>
                <div className=' w-[100%] row-span-2 p-2 h-full shadow-[0_0_4px_green] hover:w-2xs' >
                    <img className=' w-[100%] max-w-12 sticky' src={first} alt="" />
                    <div className='  h-[85vh] '>
                        <div className=' flex flex-col ml-3 mt-5'>
                            <NavLink to='/'><i class="fa-solid fa-user"></i></NavLink>
                            <br />
                            <NavLink to='/contract'><i class="fa-solid fa-file-contract"></i></NavLink>
                            <br />
                            <NavLink to='/task'><i class="fa-solid fa-list-check"></i></NavLink>
                            <br />
                            <NavLink to='/team'><i class="fa-brands fa-teamspeak"></i></NavLink>
                            <br />
                            <NavLink to='/invoice'><i class="fa-solid fa-file-invoice"></i></NavLink>
                            <br />
                            <NavLink to='/forms'><i class="fa-brands fa-wpforms"></i></NavLink>
                            <br />
                            <NavLink to='/report'><i class="fa-solid fa-bug"></i></NavLink>
                            <br />
                            <NavLink to='/email'><i class="fa-solid fa-envelope"></i></NavLink>
                        </div>
                        <div className=' relative top-[27%] flex flex-col items-center'>
                            <NavLink to='/setting'><i class="fa-solid fa-gear"></i></NavLink>
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