import React from 'react'

function Qthi() {
    return (
        <div className='mt-10'>
            <span className="text-md font-semibold border-b-3 border-green-700 text-black mb-6"
            >
                Item
            </span>
            <div className=' rounded border border-gray-200 p-3 grid grid-cols-[30%_15%_20%_20%_5%] gap-7 mt-6'>
                <div>
                    <label
                        className="block text-sm font-medium text-gray-700 mb-3"
                    >
                        Item
                    </label>
                    <input
                        type="text"
                        placeholder="Total price"
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition"
                    />
                </div>
                <div className=' w-full relative'>

                    <label className="text-sm text-gray-700 font-medium ">Unit</label>

                    <div className="flex mt-2 items-center gap-2">
                        {/* Select box */}
                        <div className="relative w-full">
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
                    <button
                        type="button"
                        className="flex absolute px-1 py-1 bottom-12 right-0 text-xs items-center justify-center bg-red-700 text-white rounded-md hover:bg-red-700"
                    >
                        <i class="fa-solid fa-plus"></i>
                    </button>
                </div>
                <div>
                    <label
                        className="block text-sm font-medium text-gray-700 mb-3"
                    >
                      Quantity
                    </label>
                    <input
                        type="text"
                        placeholder="Total price"
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition"
                    />
                </div>
                <div>
                    <label
                        className="block text-sm font-medium text-gray-700 mb-3"
                    >
                        Price
                    </label>
                    <input
                        type="text"
                        placeholder="Total price"
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition"
                    />
                </div>
                <div className='flex items-end'>
                    <button className='px-2 py-1 mb-1 text-white rounded-lg bg-red-800 cursor-pointer'><i class="fa-solid fa-plus"></i></button>
                </div>
            </div>
        </div>
    )
}

export default Qthi