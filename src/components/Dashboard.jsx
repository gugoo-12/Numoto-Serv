import React, { useEffect, useState } from 'react'



function Dashboard() {

  const[user,setUser] = useState([])

  useEffect(()=>{
    takenData()

  },[])

  const  takenData = async () =>{
    await fetch('http://localhost:3000/clients')
    .then((res) => res.json())
    .then((aron) => setUser(aron))

  }
  console.log(user);
  
  return (
    <div className=''>
      <button className=' bg-green-600 px-2 text-white rounded-[8px_8px_0px_0px]'>Client</button>

      <div className=' w-full h-[445px] bg-gray-50 px-4 py-4 overflow-y-auto'>
        <div className="grid grid-cols-4 gap-4  ">
          {user.map((client, index) => (
            <div key={index} className="bg-white rounded-lg shadow p-4 relative">
              <div className="flex justify-between items-start mb-4">
                <div className="flex items-center space-x-2">
                  {/* {client.avatar.startsWith('http') ? (
                    <img src={client.avatar} alt="avatar" className="w-10 h-10 rounded-full" />
                  ) : ( */}
                    <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center font-bold text-lg">
                      {client.avatar}
                    </div>
                  {/* )} */}
                  <div>
                    <h3 className="font-semibold">{client.name}</h3>
                    <p className="text-sm text-gray-500">Ref: {client.ref}</p>
                  </div>
                </div>
                <button className="text-gray-500 hover:text-gray-800">•••</button>
              </div>

              <div className="bg-purple-50 p-3 rounded space-y-2 text-sm text-gray-700">
                <div className="flex items-center space-x-2">
                  <i class="fa-solid fa-user"></i>
                  <span>{client.contactName}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <i class="fa-solid fa-message"></i>
                  <span>{client.email}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <i class="fa-solid fa-phone"></i>
                  <span>{client.phone}</span>
                </div>
              </div>
              <div className="absolute top-14 right-5 w-3 h-3 bg-green-500 rounded-full"></div>
            </div>
          ))}
        </div>
      </div>
      
    </div>
  )
}

export default Dashboard