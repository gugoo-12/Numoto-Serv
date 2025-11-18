import React from 'react'

function PageShowing() {
    return (
        <div>
            {/* //page showing */}
            <div className="flex items-center justify-between w-full bg-white px-4 pb-2 text-gray-700">
                {/* Left section */}
                <div className="flex items-center gap-2 text-[13px]">
                    <span>View</span>
                    <select
                        className="border border-gray-300 bg-gray-200 rounded-md outline-none focus:ring focus:ring-green-200 cursor-pointer"
                    >
                        <option value={20}>20</option>
                        <option value={40}>40</option>
                        <option value={60}>60</option>
                        <option value={80}>80</option>
                        <option value={100}>100</option>
                    </select>
                    <span>: Per Page</span>
                </div>

                {/* Right section */}
                <div className="flex items-center gap-2 text-[13px]">
                    <span>Showing</span>
                    <input
                        type="text"
                        value={1}
                        readOnly
                        className="w-10 text-center border  border-gray-300 rounded-md"
                    />
                    <span>of 1</span>

                    {/* Buttons */}
                    <button className="border border-gray-300 rounded-md  hover:bg-gray-100">{`<<`}</button>
                    <button className="border border-gray-300 rounded-md px-1 hover:bg-gray-100">{`<`}</button>
                    <button className="border border-gray-300 rounded-md px-1  hover:bg-gray-100">{`>`}</button>
                    <button className="border border-gray-300 rounded-md  hover:bg-gray-100">{`>>`}</button>
                </div>
            </div>
        </div>
    )
}

export default PageShowing