import React from 'react'
import { useState } from 'react';
import { NavLink } from 'react-router-dom';

function FilterInput({ show = false, handleClose = () => { }, industries = [] }) {
    const [selected, setSelected] = useState('');
    const [open, setOpen] = useState(false);

    return (
        <>
            {
                show && (
                    <div className=' absolute top-0 left-0 w-full h-full bg-gray-700/50 z-50'>
                        <div className=''>
                            <div className=' w-lg bg-white px-10 py-5 mx-auto mt-40 items-center rounded'>
                                <div>
                                    <h1 className=' mb-5 font-semibold text-xl'>Filter</h1>
                                    <div className=' ml-3 mb-5 '>
                                        <label htmlFor='industry'
                                            className="text-sm text-gray-700 font-medium ">Status</label>

                                        <div className="flex mt-2 items-center gap-2">
                                            {/* Select box */}
                                            <div className="relative w-full">
                                                <div
                                                    onClick={() => setOpen(!open)}
                                                    className="border border-gray-300 rounded-lg px-3 py-2 flex justify-between items-center cursor-pointer focus-within:ring-2 focus-within:ring-red-700"
                                                >
                                                    <input
                                                        type="text"
                                                        placeholder="Choose"
                                                        name='industry'
                                                        value={selected}
                                                        onChange={(e) => setSelected(e.target.value)}
                                                        className="outline-none w-full border-r-2 border-gray-300"
                                                    />
                                                    <i class="fa-solid fa-chevron-down pl-2 text-gray-400"></i>
                                                </div>
                                                {/* Dropdown */}
                                                {open && (
                                                    <ul className="absolute z-10 bg-white border rounded-md mt-1 w-full max-h-48 overflow-y-auto shadow-lg">
                                                        {industries.map((industry, index) => (
                                                            <li
                                                                key={index}
                                                                className="px-3 py-2 hover:bg-blue-100 cursor-pointer"
                                                                onClick={() => {
                                                                    setSelected(industry);
                                                                    setOpen(false);
                                                                }}
                                                            >
                                                                {industry}
                                                            </li>
                                                        ))}
                                                    </ul>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className=' flex justify-end gap-2'>
                                    <button
                                        onClick={handleClose} className=' rounded-[5px_5px_5px_5px] px-5 py-1.5 font-semibold text-[13px] bg-gray-100 text-red-700'>
                                        Cancel
                                    </button>

                                    <button className=' rounded-[5px_5px_5px_5px] px-5 py-1.5 font-semibold text-[13px] bg-red-700 text-white'>
                                        Submit
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }
        </>
    )
}

export default FilterInput