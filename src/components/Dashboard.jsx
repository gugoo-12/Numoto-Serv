import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import Cross from './Cross';
import PageShowing from '../local data/PageShowing';
import FilterInput from '../local data/FilterInput';
import Emports from '../local data/Emports';
import Ixport from '../local data/Ixport';
import Breadcrumb from '../local data/Breadcrumb';

const Dashboard = (shows = false) => {
  const [user, setUser] = useState([]);
  const [listView, setListView] = useState(false);
  const [isHidden, setIsHidden] = useState('');
  const [inputbut, setInputbut] = useState(false);
  const [filter, setFilter] = useState(false);
  const [exportt, setExportt] = useState(false);
  const [ixport, setixport] = useState(false);
  const [list, setList] = useState([]);
  const [onOpen, setOnOpen] = useState(false)

  const industriesGet = async () => {
    const res = await fetch('http://localhost:3000/industries');
    const data = await res.json();
    setList(data);
  };

  const takenData = async () => {
    const res = await fetch('http://localhost:3000/clients');
    const data = await res.json();
    setUser(data);
  };

  useEffect(() => {
    takenData();
    industriesGet();
  }, []);
  
  

  return (
    <div className="text-gray-700 font-[Inter] transition-all duration-300 ease-in-out">
      {/* Popups */}
      {filter && <FilterInput show={filter} industries={list} handleClose={() => setFilter(false)} />}
      {exportt && <Emports show={exportt} handleClose={() => setExportt(false)} />}
      {ixport && <Ixport show={ixport} handleClose={() => setixport(false)} />}

      {/* Breadcrumb */}
      <div className="flex items-center justify-between mb-3">
        <Breadcrumb name={'Client-Management'} isHidden={''} secName={'Clients'} />

        {/* Top Buttons */}
        <div className="flex items-center space-x-2">
          {inputbut ? (
            <div className="flex items-center bg-white shadow-sm border border-gray-200 px-2 py-1.5 rounded-md">
              <input
                type="text"
                placeholder="Search..."
                className="focus:outline-none text-xs text-gray-700 w-34"
              />
              <button onClick={() => setInputbut(false)} className="text-green-500 ml-1 text-sm">
                <i className="fa-solid fa-magnifying-glass"></i>
              </button>
            </div>
          ) : (
            <button
              onClick={() => setInputbut(true)}
              className="p-1.5 bg-white border border-gray-200 rounded-md text-green-500 hover:bg-green-50 transition text-sm"
            >
              <i className="fa-solid fa-magnifying-glass"></i>
            </button>
          )}

          <button
            onClick={() => {
              setListView(true);
              setIsHidden('hidden');
            }}
            className={`p-1.5 rounded-md text-sm transition ${
              listView
                ? 'bg-green-500 text-white'
                : 'bg-white border border-gray-200 text-green-700 hover:bg-green-50'
            }`}
          >
            <i className="fa-solid fa-list"></i>
          </button>

          <button
            onClick={() => {
              setListView(false);
              setIsHidden('');
            }}
            className={`p-1.5 rounded-md text-sm transition ${
              listView
                ? 'bg-white border border-gray-200 text-green-500 hover:bg-green-50'
                : 'bg-green-500 text-white'
            }`}
          >
            <i className="fa-solid fa-wallet"></i>
          </button>

          <button
            onClick={() => setFilter(true)}
            className="p-1.5 bg-green-500 text-white rounded-md hover:bg-green-600 transition text-sm"
          >
            <i className="fa-solid fa-filter"></i>
          </button>

          <button
            onClick={() => setExportt(true)}
            className="p-1.5 bg-green-600 text-white rounded-md hover:bg-green-600 transition text-sm"
          >
            <i className="fa-solid fa-file-import"></i>
          </button>

          <button
            onClick={() => setixport(true)}
            className="p-1.5 bg-green-600 text-white rounded-md hover:bg-green-600 transition text-sm"
          >
            <i className="fa-solid fa-file-export"></i>
          </button>

          <NavLink to="/input">
            <button className="p-1.5 bg-green-600 text-white rounded-md hover:bg-green-600 transition text-sm">
              <i className="fa-solid fa-plus"></i>
            </button>
          </NavLink>
        </div>
      </div>

      {/* Client Header */}
      <div className="flex items-center space-x-3 text-xs ml-1 font-medium">
        <button className="bg-green-500 text-white px-4 py-1 rounded-t-md shadow-sm">Client</button>
        <div>
          <button className="bg-white border border-green-500 px-2.5 py-0.5 rounded-l-full">Total</button>
          <button className="bg-green-500 text-white border border-green-500 px-2.5 py-0.5 rounded-r-full">
            {user.length}
          </button>
        </div>
      </div>

      {/* Main Section */}
      <div className={`w-full h-[440px] ${isHidden} bg-white px-3 py-3 overflow-y-auto rounded-md`}>
        <div className="grid grid-cols-4 gap-4">
          {user.map((client, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-sm hover:shadow-md transition p-3 relative border border-gray-100"
            >
              {/* Card Header */}
              <div className="flex justify-between items-start mb-2.5">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-r from-gray-300 to-gray-200 flex items-center justify-center font-semibold text-gray-700 text-sm">
                    {client.avatar}
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-800 text-sm">{client.name}</h3>
                    <p className="text-[10px] text-gray-500">Ref: {client.ref}</p>
                  </div>
                </div>

                <div className="relative group">
                  <button className="w-6 h-6 bg-gray-50 text-[10px] text-gray-500 rounded-full border border-gray-300 flex justify-center items-center hover:text-gray-800">
                    •••
                  </button>
                  <div className="absolute hidden group-hover:block right-6 top-0 bg-white shadow-md text-[11px] text-gray-600 rounded-md overflow-hidden z-10">
                    <button className="w-full text-start px-2 py-1 hover:bg-gray-100">View</button>
                    <button className="w-full text-start px-2 py-1 hover:bg-gray-100">Edit</button>
                    <button className="w-full text-start px-2 py-1 hover:bg-gray-100">Delete</button>
                  </div>
                </div>
              </div>

              {/* Client Info */}
              <div className="bg-green-50 p-2 rounded-md space-y-1.5 text-xs text-gray-700">
                <div className="flex items-center space-x-1.5">
                  <i className="fa-solid fa-user text-green-600 text-sm"></i>
                  <span>{client.contactName}</span>
                </div>
                <div className="flex items-center space-x-1.5">
                  <i className="fa-solid fa-envelope text-green-600 text-sm"></i>
                  <span>{client.email}</span>
                </div>
                <div className="flex items-center space-x-1.5">
                  <i className="fa-solid fa-phone text-green-600 text-sm"></i>
                  <span>{client.phone}</span>
                </div>
              </div>

              <div className="absolute top-12 right-4 w-2.5 h-2.5 bg-green-500 rounded-full"></div>
            </div>
          ))}
        </div>
      </div>

      {/* List View */}
      {listView && (
        <div className="">
          <Cross user={user} />
        </div>
      )}

      {/* Page Showing */}
      <PageShowing />
    </div>
  );
}

export default Dashboard;
