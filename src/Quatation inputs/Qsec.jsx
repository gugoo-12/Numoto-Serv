import React from 'react'

function Qsec() {
    return (
        <div className=' mt-3'>
            <span className="text-md font-semibold border-b-3 border-green-700 text-black mb-6"
            >
                Attachments :
            </span>
            <div className=' mt-7 ml-6'>
                <input type="file"
                    id='fileInput'
                    className=' hidden' />
                <label className='rounded-[5px_5px_5px_5px] px-3 py-1.5 text-[13px] font-semibold bg-blue-200 text-blue-500' htmlFor="fileInput">
                    <i class="fa-solid fa-paperclip mr-1"></i>
                    Attach
                </label>
            </div>
        </div>
    )
}

export default Qsec