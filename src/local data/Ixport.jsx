import React, { useState } from 'react'

function Ixport({ show = false, handleClose = () => { } }) {
    const [change, setChange] = useState(false)
    return (
        <>
            {
                show && (
                    <div className=' absolute top-0 left-0 w-full h-full bg-gray-700/50 z-50'>
                        <div className=''>
                            <div className=' w-2xl bg-white px-10 py-5 mx-auto mt-40 items-center rounded'>

                                <div className=' flex justify-between items-center'>
                                    <h1>Export Data</h1>
                                    <button onClick={handleClose}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M6.758 17.243L12.001 12m5.243-5.243L12 12m0 0L6.758 6.757M12.001 12l5.243 5.243" /></svg>
                                    </button>
                                </div>
                                <div className=' my-4 text-sm text-gray-500 flex justify-around'>
                                    <label htmlFor="">
                                        <input
                                            onClick={() => setChange(false)}
                                            className='mr-1' type="radio" name="color" value="red" />All Data
                                    </label>
                                    <label htmlFor="">
                                        <input
                                            onClick={() => setChange(true)}
                                            className='mr-1' type="radio" name="color" value="blue" />Filter data
                                    </label>
                                </div>

                                {change && 
                                <div className=' w-full'>

                                    <label className="text-sm text-gray-700 font-medium ">Status</label>

                                    <div className="flex mt-2 items-center gap-2">
                                        {/* Select box */}
                                        <div className="relative w-full mb-2">
                                            <div
                                                className="border border-gray-300 rounded-lg px-3 py-2 flex justify-between items-center cursor-pointer focus-within:ring-2 focus-within:ring-green-500"
                                            >
                                                <input
                                                    type="text"
                                                    placeholder="Choose"
                                                    className="outline-none w-full border-r-2 border-gray-300"
                                                />
                                                <i class="fa-solid fa-chevron-down pl-2 text-gray-400"></i>
                                            </div>
                                        </div>
                                    </div>

                                </div>}

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

export default Ixport