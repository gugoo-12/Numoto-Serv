import React from 'react'
import { useNavigate } from 'react-router-dom'

function Qfour() {
    const navigate = useNavigate()

    const goto = () =>{
        navigate('/contract')
    }
    return (
        <>
            <div className=' w-full bg-red-700 text-white p-2 grid grid-cols-[10%_30%_20%_15%_10%_10%_5%] rounded-lg mt-10 '>
                <h1>S.no</h1>
                <h1>Item</h1>
                <h1>Unit</h1>
                <h1>Quantity</h1>
                <h1>Price</h1>
                <h1>Action</h1>
                <h1><i class="fa-regular fa-pen-to-square"></i></h1>
            </div>
            <div className='w-full h-80'>
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
        </>
    )
}

export default Qfour