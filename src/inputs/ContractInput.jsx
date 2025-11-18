import React from 'react'
import { NavLink } from 'react-router-dom'
import Qsec from '../Quatation inputs/Qsec'
import ContractIput2 from './ContractIput2'
import Breadcrumb from '../local data/Breadcrumb'

function ContractInput() {
  return (
    <div>
      {/* //dash>client */}
      <div className="flex items-center justify-between mb-1">
        <Breadcrumb name={'Survay'} ishidden={''} secName={'Create'}/>

        {/* //navbar under button */}
        <div className="">
          <NavLink to={"/task"}>
            <button className="px-2 py-1 bg-white border border-green-700 text-green-700 rounded"><i class="fa-solid fa-arrow-left"></i></button>
          </NavLink>
        </div>

      </div>
      {/* //main */}
      <div className=' w-full h-[480px] mt-3 rounded-xs overflow-y-auto'>
        <form action="">
          <div className="max-w-full px-8 py-5 bg-white shadow-lg rounded-xl ">
            <span className="text-md font-semibold border-b-3 border-green-700 text-black mb-6"
            >
              Survey
            </span>
            <div className='mt-4 grid grid-cols-[30%_4%_32%_4%_30%]'>
              {/* //1 */}
              <div className=' w-full relative'>

                <label className="text-sm text-gray-700 font-medium ">Client</label>

                <div className="flex mt-2 items-center gap-2">
                  {/* Select box */}
                  <div className="relative w-full">
                    <div
                      className="border border-gray-300 rounded-lg px-3 py-2 flex justify-between items-center cursor-pointer focus-within:ring-2 focus-within:ring-green-500"
                    >
                      <input
                        type="text"
                        placeholder="Client"
                        className="outline-none w-full border-r-2 border-gray-300"
                      />
                      <i class="fa-solid fa-chevron-down pl-2 text-gray-400"></i>
                    </div>
                  </div>
                </div>
                <button
                  type="button"
                  className="flex absolute px-1 py-1 bottom-16 right-0 text-xs items-center justify-center bg-red-700 text-white rounded-md hover:bg-red-700"
                >
                  <i class="fa-solid fa-plus"></i>
                </button>
              </div>

              <div></div>
              {/* //2 */}
              <div className=' w-full'>
                <label htmlFor='date'
                  className=" block text-sm font-medium text-gray-700 mb-3"
                >
                  Project
                </label>
                <input
                  type="input"
                  name='date'
                  placeholder="Project"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition"
                />
              </div>

              <div></div>
              {/* //3 */}
              <div className=' mt-4 w-full'>

                <label className="text-sm text-gray-700 font-medium ">Assignee</label>

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
                
              </div>
              {/* //4 */}
              <div className=' mt-4 w-full'>
                <label
                  className="block text-sm font-medium text-gray-700 mb-3"
                >
                  Location
                </label>
                <input
                  type="text"
                  placeholder="Location"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition"
                />
              </div>
              <div></div>
              {/* //5 */}
              <div className=' mt-4 w-full'>
                <label
                  className="block text-sm font-medium text-gray-700 mb-3"
                >
                  Inspection Date *
                </label>
                <input
                  type="date"
                  placeholder="Contract Number"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition"
                />
              </div>
              <div></div>
              {/* //6 */}
              <div className=' mt-4 w-full'>

                <label className="text-sm text-gray-700 font-medium ">Fome</label>

                <div className="flex mt-2 items-center gap-2">
                  {/* Select box */}
                  <div className="relative w-full">
                    <div
                      className="border border-gray-300 rounded-lg px-3 py-2 flex justify-between items-center cursor-pointer focus-within:ring-2 focus-within:ring-green-500"
                    >
                      <input
                        type="text"
                        placeholder="Choose"
                        onClick={() => setChange("bg-red-500")}
                        className={`outline-none w-full border-r-2 border-gray-300`}
                      />
                      <i class="fa-solid fa-chevron-down pl-2 text-gray-400"></i>
                    </div>
                  </div>
                </div>
                
              </div>
            </div>
            

            <div className=' w-[45%] mt-4'>
              <div className=' w-full'>
                <label htmlFor='tbox' className="text-sm text-gray-700 font-medium ">Comment</label>
                <div className=' mt-2'>
                  <textarea
                    className=' w-full h-20 border border-gray-300 rounded-lg px-3 py-2'
                    name="tbox"
                    id=""
                    placeholder='Comment'>
                  </textarea>
                </div>
              </div>
            </div>
            <Qsec />
            <ContractIput2 />
          </div>

        </form>
      </div>
    </div>
  )
}

export default ContractInput