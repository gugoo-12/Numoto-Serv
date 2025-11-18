import React from 'react'

function Input2() {
    return (
        <div className=" w-full flex justify-between">
            <div className="mt-4 w-[49.5%] px-8 py-5 bg-white shadow-lg rounded-xl ">
                <span className="text-md font-semibold border-b-3 border-green-700 text-black mb-6">
                    Primary Contact
                </span>
                <div className=' grid grid-cols-[46%_8%_46%] mt-4'>
                    <div className=' w-full '>
                        <label
                            className="block text-sm font-medium text-gray-700 mb-3"
                            htmlFor="cp">
                            Contact Person
                        </label>
                        <input
                            type="text"
                            name="cp"
                            placeholder="Contact Person"
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition"
                        />
                    </div>

                    <div></div>
                    <div className=' w-full relative'>

                        <label className="text-sm text-gray-700 font-medium ">Designation</label>

                        <div className="flex mt-2 items-center gap-2">
                            {/* Select box */}
                            <div className="relative w-full">
                                <div
                                    className="border border-gray-300 rounded-lg px-3 py-2 flex justify-between items-center cursor-pointer focus-within:ring-2 focus-within:ring-green-500"
                                >
                                    <input
                                        type="text"
                                        placeholder="Designation"
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
                </div>

                <div className=' grid grid-cols-[16%_30%_8%_46%] mt-4'>
                    {/* country code */}
                    <div className='w-full'>
                        <label className="text-sm text-gray-700 font-medium">Phone</label>

                        <div className="flex mt-2 items-center gap-2">
                            {/* Select box */}
                            <div className="relative w-full">
                                <div
                                    className="border border-gray-300 rounded-lg px-3 py-2 flex justify-between items-center cursor-pointer focus-within:ring-2 focus-within:ring-green-500"
                                >
                                    <input
                                        type="text"
                                        placeholder="00"
                                        className="outline-none w-full border-r-2 border-gray-300"
                                    />
                                    <i class="fa-solid fa-chevron-down pl-2 text-gray-400"></i>
                                </div>
                            </div>
                        </div>

                    </div>

                    {/* //phone */}
                    <div className=' w-full'>
                        <label
                            className="block text-sm font-medium text-white mb-3"
                        >
                            ...
                        </label>
                        <input
                            type="text"
                            placeholder="Phone"
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition"
                        />
                    </div>

                    <div></div>

                    <div className=' w-full '>
                        <label
                            className="block text-sm font-medium text-gray-700 mb-3"
                            htmlFor="cp">
                            Contact Person
                        </label>
                        <input
                            type="text"
                            name="cp"
                            placeholder="Contact Person"
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition"
                        />
                    </div>

                </div>

            </div>

            <div className="mt-4 w-[49.5%] px-8 py-5 bg-white shadow-lg rounded-xl ">
                <span className="text-md font-semibold border-b-3 border-green-700 text-black mb-6">
                    Secondary Contact
                </span>
                <div className=' grid grid-cols-[46%_8%_46%] mt-4'>
                    <div className=' w-full '>
                        <label
                            className="block text-sm font-medium text-gray-700 mb-3"
                            htmlFor="cp">
                            Contact Person
                        </label>
                        <input
                            type="text"
                            name="cp"
                            placeholder="Contact Person"
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition"
                        />
                    </div>

                    <div></div>
                    <div className=' w-full relative'>

                        <label className="text-sm text-gray-700 font-medium ">Designation</label>

                        <div className="flex mt-2 items-center gap-2">
                            {/* Select box */}
                            <div className="relative w-full">
                                <div
                                    className="border border-gray-300 rounded-lg px-3 py-2 flex justify-between items-center cursor-pointer focus-within:ring-2 focus-within:ring-green-500"
                                >
                                    <input
                                        type="text"
                                        placeholder="Designation"
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
                </div>

                <div className=' grid grid-cols-[16%_30%_8%_46%] mt-4 mb-4'>
                    {/* country code */}
                    <div className='w-full'>
                        <label className="text-sm text-gray-700 font-medium">Phone</label>

                        <div className="flex mt-2 items-center gap-2">
                            {/* Select box */}
                            <div className="relative w-full">
                                <div
                                    className="border border-gray-300 rounded-lg px-3 py-2 flex justify-between items-center cursor-pointer focus-within:ring-2 focus-within:ring-green-500"
                                >
                                    <input
                                        type="text"
                                        placeholder="00"
                                        className="outline-none w-full border-r-2 border-gray-300"
                                    />
                                    <i class="fa-solid fa-chevron-down pl-2 text-gray-400"></i>
                                </div>
                            </div>
                        </div>

                    </div>

                    {/* //phone */}
                    <div className=' w-full'>
                        <label
                            className="block text-sm font-medium text-white mb-3"
                        >
                            ...
                        </label>
                        <input
                            type="text"
                            placeholder="Phone"
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition"
                        />
                    </div>

                    <div></div>

                    <div className=' w-full '>
                        <label
                            className="block text-sm font-medium text-gray-700 mb-3"
                            htmlFor="cp">
                            Contact Person
                        </label>
                        <input
                            type="text"
                            name="cp"
                            placeholder="Contact Person"
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition"
                        />
                    </div>

                </div>

            </div>
        </div>
    )
}

export default Input2