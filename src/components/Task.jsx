import React, { useEffect, useState } from 'react'
import FilterInput from '../local data/FilterInput'
import Ixport from '../local data/Ixport'
import { NavLink } from 'react-router-dom'
import PageShowing from '../local data/PageShowing'
import Breadcrumb from '../local data/Breadcrumb'

function Task() {
  const [user, setUser] = useState([])
  const [inputbut, setInputbut] = useState(false)
  const [filteri, setFilteri] = useState(false)
  const [ixport, setixport] = useState(false)

  useEffect(() => {
    userData();
  }, [])

  const userData = async () => {
    await fetch('http://localhost:3000/surveys')
      .then((res) => res.json())
      .then((aron) => setUser(aron))
      .catch((err) => console.error("Error fetching data:", err))

  }

  return (
    <div>
      {filteri &&
        <FilterInput show={filteri} handleClose={() => { setFilteri(!filteri) }} />
      }
      {ixport &&
        <Ixport show={ixport} handleClose={() => { setixport(!ixport) }} />
      }
      {/* //dash>client */}
      <div className="flex items-center justify-between mb-3">
        <Breadcrumb name={'Client-Management'} ishidden={true} secName={'Survey'} />

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
            onClick={() => setFilteri(true)}
            className="p-1.5 rounded-md text-sm bg-green-600 text-white hover:bg-green-500 transition-all duration-300">
            <i className="fa-solid fa-filter text-[15px]"></i>
          </button>
          <button
            onClick={() => setixport(true)}
            className="p-1.5 rounded-md text-sm bg-green-600 text-white hover:bg-green-500 transition-all duration-300">
            <i className="fa-solid fa-file-export text-[15px]"></i>
          </button>
          <NavLink to={'/contractin'}>
            <button className="p-1.5 rounded-md text-sm bg-green-600 text-white hover:bg-green-500 transition-all duration-300">
              <i className="fa-solid fa-plus text-[15px]"></i>
            </button>
          </NavLink>
        </div>
      </div>

      {/* //client and total */}
      <div className="flex items-center space-x-3 text-xs ml-1 font-medium">
        <button className="bg-green-500 text-white px-4 py-1 rounded-t-md shadow-sm">Surveys</button>
        <div>
          <button className="bg-white border border-green-500 px-2.5 py-0.5 rounded-l-full">Total</button>
          <button className="bg-green-500 text-white border border-green-500 px-2.5 py-0.5 rounded-r-full">
            {user.length}
          </button>
        </div>
      </div>
      {/* //main  */}
      <div className=' w-full h-[440px] bg-white px-4 py-4 overflow-y-auto rounded-xs'>
        <table className=' w-full'>
          <thead className=" text-[13px] font-medium">
            <tr>
              <th className="py-3 px-4 text-left">
                <input className='mr-1' type="checkbox" />
                Ref
              </th>
              <th className="py-3 px-4 text-left">Client</th>
              <th className="py-3 px-4 text-left">Assignee</th>
              <th className="py-3 px-4 text-left">Project</th>
              <th className="py-3 px-4 text-left">Location</th>
              <th className="py-3 px-4 text-left">Insption Date</th>
              <th className="py-3 px-4 text-left">Status</th>
              <th className="py-3 px-4 text-left">Action</th>
            </tr>
          </thead>
          <tbody className=' text-gray-600 text-[13px]' >
            {Array.isArray(user) && user.map((client1) => (
              <tr key={client1.ref}
                className="border-t border-gray-200 hover:bg-green-50 transition">
                <td className="py-2 px-4">
                  <input className='mr-1' type="checkbox" />
                  {client1.ref}
                </td>
                <td className="py-2 px-4">{client1.client}</td>
                <td className="py-2 px-4">{client1.assignee}</td>
                <td className="py-2 px-4">{client1.project}</td>
                <td className="py-2 px-4">{client1.location}</td>
                <td className="py-2 px-4">{client1.date}</td>
                <td className="py-2 px-4">{client1.status}</td>
                <td className="py-2 px-4">
                  <button><i class="fa-solid fa-eye text-green-600 text-xs mr-2"></i></button>
                  <button><i class="fa-solid fa-pen-to-square text-blue-600 text-xs mr-2"></i></button>
                  <button>
                    <i class="fa-solid fa-trash text-red-600 text-xs"></i>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* //page showing */}
      <PageShowing />
    </div>
  )
}

export default Task