import React from 'react'
import { useNavigate } from 'react-router-dom'

function InputLast() {
    const navigate = useNavigate();

    const goto = () => {
        navigate("/")
    }
    return (
        <div className='mt-4 w-[100%] px-8 py-5 bg-white shadow-lg rounded-xl'>
            <span className="text-md font-semibold border-b-3 border-green-700 text-black mb-6">
                Address
            </span>
            <div>
                <div className=' flex items-end gap-4'>
                    <div className=' w-[40%] mt-4'>

                        <input
                            type="text"
                            name="cp"
                            placeholder="Enter Client Emails"
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition"
                        />
                    </div>
                    <div>
                        <button
                            type="button"
                            className="flex px-3 py-3 bottom-12 right-0 text-xs items-center justify-center bg-red-700 text-white rounded-md hover:bg-red-700"
                        >
                            <i class="fa-solid fa-plus"></i>
                        </button>
                    </div>
                </div>

                <div className='  mt-4 w-[45%] h-50 p-3 border border-gray-300 rounded-xl'>
                    <p className=' text-gray-500'>No Client Emails added.</p>
                </div>

                <div className=' flex justify-end gap-2 my-14 '>
                    <button
                        onClick={goto}
                        className=' rounded-[5px_5px_5px_5px] px-5 py-1.5 font-semibold text-[13px] bg-gray-100 text-red-700'>
                        Cancel
                    </button>
                    <button className=' rounded-[5px_5px_5px_5px] px-5 py-1.5 font-semibold text-[13px] bg-red-700 text-white'>
                        Submit
                    </button>
                </div>
            </div>
        </div>
    )
}

export default InputLast