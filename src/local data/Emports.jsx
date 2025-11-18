import React from 'react'

function Emports({ show = false, handleClose = () => { } }) {

    return (
        <>
            {
                show && (
                    <div className=' absolute top-0 left-0 w-full h-full bg-gray-700/50 z-50'>
                        <div className=''>
                            <div className=' w-lg bg-white  px-10 py-5 mx-auto mt-40 items-center rounded'>
                                <div className=''>
                                    <h1 className=' mb-5 font-semibold text-xl'>Import Client</h1>
                                    <div className=' ml-3 mb-5 flex rounded border border-gray-400 overflow-hidden '>
                                        <label className=' px-6 py-3.5 font-semibold text-xs bg-gray-300 text-gray-700' htmlFor="fileInput">
                                            Choose
                                        </label>
                                        <input type="file"
                                            id='fileInput'
                                            className='px-4 py-2' />
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

export default Emports