import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import PageShowing from '../local data/PageShowing'
import FilterInput from '../local data/FilterInput'
import Ixport from '../local data/Ixport'
import Breadcrumb from '../local data/Breadcrumb'

function Invoice() {
  const [inputbut, setInputbut] = useState(false)
  const [filter, setFilter] = useState(false)
  const [ixport, setixport] = useState(false)

  let user = [
    {
      ref: "T-0001",
      client1: "Yokogawa Saudi Arabia Company L.LC",
      contract: "CON-001",
      description: "SADA - ADMIN",
      location: "Thoothoor",
      date: "02-09-2002",
      status: "New"
    },
    {
      ref: "T-0002",
      client1: "Saudi Arabia Company L.LC",
      contract: "CON-002",
      description: "SADA - ADMIN",
      location: "Thoothoor",
      date: "02-09-2002",
      status: "New"
    }
    
  ]

  return (
    <div className="font-[Inter] text-gray-800">
      {filter && <FilterInput show={filter} handleClose={() => setFilter(!filter)} />}
      {ixport && <Ixport show={ixport} handleClose={() => setixport(!ixport)} />}

      {/* Breadcrumb */}
      <div className="flex items-center justify-between mb-3">
        <Breadcrumb name={'Inspection'} ishidden={true} secName={'Schedule'} />

        {/* Navbar Buttons */}
        <div className="flex items-center space-x-2">
          {inputbut ? (
            <div className=' py-1 px-3 rounded-md bg-white shadow-sm border border-gray-200 flex items-center transition-all duration-300'>
              <input
                placeholder='Search here'
                type="text"
                className='focus:outline-none text-sm text-gray-700 w-34'
              />
              <button
                onClick={() => setInputbut(false)}
                className="text-green-700 text-sm ">
                <i className="fa-solid fa-magnifying-glass"></i>
              </button>
            </div>
          ) : (
            <button
              onClick={() => setInputbut(true)}
              className="p-1.5 rounded-md text-sm border border-gray-200 bg-white text-green-600 hover:bg-gray-100 transition-all duration-300">
              <i className="fa-solid fa-magnifying-glass "></i>
            </button>
          )}

          <button
            onClick={() => setFilter(true)}
            className="p-1.5 rounded-md text-sm bg-green-600 text-white hover:bg-green-500 transition-all duration-300">
            <i className="fa-solid fa-filter text-[15px]"></i>
          </button>
          <button
            onClick={() => setixport(true)}
            className="p-1.5 rounded-md text-sm bg-green-600 text-white hover:bg-green-500 transition-all duration-300">
            <i className="fa-solid fa-file-export text-[15px]"></i>
          </button>
          <NavLink to={'/quinput'}>
            <button className="p-1.5 rounded-md text-sm bg-green-600 text-white hover:bg-green-500 transition-all duration-300">
              <i className="fa-solid fa-plus text-[15px]"></i>
            </button>
          </NavLink>
        </div>
      </div>

      {/* Header Tabs */}
      <div className="flex items-center space-x-3 text-xs ml-1 font-medium">
        <button className="bg-green-500 text-white px-4 py-1 rounded-t-md shadow-sm">Schedule</button>
        <div>
          <button className="bg-white border border-green-500 px-2.5 py-0.5 rounded-l-full">Total</button>
          <button className="bg-green-500 text-white border border-green-500 px-2.5 py-0.5 rounded-r-full">
            {user.length}
          </button>
        </div>
      </div>

      {/* Table */}
      <div className='w-full h-[440px] bg-white px-4 py-4 overflow-y-auto rounded-md shadow-sm border border-gray-100'>
        <table className='w-full'>
          <thead className="text-[13px] font-semibold text-gray-700 border-b">
            <tr>
              <th className="py-3 px-4 text-left">
                <input className='mr-1' type="checkbox" /> Ref
              </th>
              <th className="py-3 px-4 text-left">Client</th>
              <th className="py-3 px-4 text-left">Contract</th>
              <th className="py-3 px-4 text-left">Description</th>
              <th className="py-3 px-4 text-left">Location</th>
              <th className="py-3 px-4 text-left">Inspection Date</th>
              <th className="py-3 px-4 text-left">Status</th>
              <th className="py-3 px-4 text-left">Action</th>
            </tr>
          </thead>
          <tbody className='text-gray-600 text-[13px]'>
            {user.map((client) => (
              <tr
                key={client.ref}
                className="border-t border-gray-100 hover:bg-green-50 transition-all duration-200"
              >
                <td className="py-2 px-4">
                  <input className='mr-1' type="checkbox" /> {client.ref}
                </td>
                <td className="py-2 px-4">{client.client1}</td>
                <td className="py-2 px-4">{client.contract}</td>
                <td className="py-2 px-4">{client.description}</td>
                <td className="py-2 px-4">{client.location}</td>
                <td className="py-2 px-4">{client.date}</td>
                <td className="py-2 px-4">{client.status}</td>
                <td className="py-2 px-4 flex items-center space-x-2">
                  <button><i className="fa-solid fa-eye text-green-600 text-[15px]"></i></button>
                  <button><i className="fa-solid fa-pen-to-square text-blue-600 text-[15px]"></i></button>
                  <button><i className="fa-solid fa-trash text-red-600 text-[15px]"></i></button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Page Footer */}
      <PageShowing />
    </div>
  )
}

export default Invoice
