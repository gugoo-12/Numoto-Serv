import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import ContractInput3 from './ContractInput3'
import ContractInput4 from './ContractInput4'

function ContractIput2() {
    const [onSwitch, setOnSwitch] = useState(false)
    const navigate = useNavigate()

    const goto = () =>{
        navi
    }
    return (
        <>
            <div className=' flex gap-3 mt-5 text-[13px] items-center'>
                <div>
                    <h1>Enable Equipment List</h1>
                </div>

                {onSwitch ? <div
                    onClick={() => setOnSwitch(!onSwitch)}
                    className=' w-12 px-0.5 py-0.5 rounded-2xl flex justify-end bg-red-700 cursor-pointer'>
                    <div className=' w-5 h-5 rounded-full bg-white'></div>
                </div> :
                    <div
                        onClick={() => setOnSwitch(!onSwitch)}
                        className=' w-12 px-0.5 py-0.5 rounded-2xl bg-gray-300 flex justify-start cursor-pointer'>
                        <div className=' w-5 h-5 rounded-full bg-white'></div>
                    </div>}
            </div>

            {onSwitch &&
             <ContractInput3 />
            }
            <div className=' flex justify-end gap-2 my-14 '>
                <button
                    onClick={()=>navigate('/task')}
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

export default ContractIput2