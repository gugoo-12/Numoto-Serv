import React from 'react'

function Input4f() {
    return (
        <div className='mt-4 w-[100%] px-8 py-5 bg-white shadow-lg rounded-xl'>
            <div className=' flex items-end gap-6'>
                <div>
                    <span className="text-md font-semibold border-b-3 border-green-700 text-black mb-6">
                        Billing Address
                    </span>
                </div>
                <div className=' flex text-xs font-semibold gap-1 text-gray-500'>
                    <input type="checkbox" />
                    <span>Same as Address</span>
                </div>
            </div>
            <div className=' w-full grid grid-cols-[30%_4%_32%_4%_30%] mb-4'>
                {/* //1 */}
                <div className=' w-full mt-4'>
                    <label
                        className="block text-sm font-medium text-gray-700 mb-3"
                        htmlFor="cp">
                        Street Address Line 1
                    </label>
                    <input
                        type="text"
                        name="cp"
                        placeholder="Address Line 1"
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition"
                    />
                </div>
                <div></div>

                {/* //2 */}
                <div className=' w-full mt-4'>
                    <label
                        className="block text-sm font-medium text-gray-700 mb-3"
                        htmlFor="cp">
                        Street Address Line 2
                    </label>
                    <input
                        type="text"
                        name="cp"
                        placeholder="Address Line 2"
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition"
                    />
                </div>
                <div></div>

                {/* //3 */}
                <div className=' w-full mt-4'>
                    <label
                        className="block text-sm font-medium text-gray-700 mb-3"
                        htmlFor="cp">
                        City
                    </label>
                    <input
                        type="text"
                        name="cp"
                        placeholder="City"
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition"
                    />
                </div>

                

                {/* //6 */}
                <div className=' w-full mt-4'>
                    <label
                        className="block text-sm font-medium text-gray-700 mb-3"
                        htmlFor="cp">
                        State / Province
                    </label>
                    <input
                        type="text"
                        name="cp"
                        placeholder="State / Province"
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition"
                    />
                </div>
                <div></div>

                {/* //7 */}
                <div className=' w-full mt-4'>
                    <label
                        className="block text-sm font-medium text-gray-700 mb-3"
                        htmlFor="cp">
                        Postal / Zip Code
                    </label>
                    <input
                        type="text"
                        name="cp"
                        placeholder="Postal / Zip Code"
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition"
                    />
                </div>
                <div></div>

                {/* //8 */}
                <div className=' w-full relative mt-4'>

                    <label className="text-sm text-gray-700 font-medium ">Country</label>

                    <div className="flex mt-2 items-center gap-2">
                        {/* Select box */}
                        <div className="relative w-full">
                            <div
                                className="border border-gray-300 rounded-lg px-3 py-2 flex justify-between items-center cursor-pointer focus-within:ring-2 focus-within:ring-green-500"
                            >
                                <input
                                    type="text"
                                    placeholder="Country"
                                    className="outline-none w-full border-r-2 border-gray-300"
                                />
                                <i class="fa-solid fa-chevron-down pl-2 text-gray-400"></i>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default Input4f