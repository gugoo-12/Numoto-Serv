import React from 'react'

const clients = [
  {
    name: "testing",
    ref: "CLNT-0017",
    contactName: "Emma Johnson",
    email: "testdd@gmail.com",
    phone: "+91 8874563215",
    avatar: "T",
  },
  {
    name: "Antrim",
    ref: "CLNT-0016",
    contactName: "Peter",
    email: "amtrimw@gmail.com",
    phone: "9003976023",
    avatar: "A",
  },
  {
    name: "Parkqwik",
    ref: "CLNT-0015",
    contactName: "James Brown",
    email: "parkqwik@gmail.com",
    phone: "+91 9003976093",
    avatar: "P", 
  },
  {
    name: "newcom",
    ref: "CLNT-0014",
    contactName: "Emma Johnson",
    email: "test@gmail.com",
    phone: "+91 8874563211",
    avatar: "N",
  },
  {
    name: "Tcs Tech",
    ref: "CLNT-0013",
    contactName: "Roy",
    email: "techtcs@gmail.com",
    phone: "+91 9003976321",
    avatar: "T",
  },
  {
    name: "newcom",
    ref: "CLNT-0012",
    contactName: "Emma Johnson",
    email: "oliva@gmail.com",
    phone: "+91 9632285214",
    avatar: "N",
  },
  {
    name: "Energie",
    ref: "CLNT-0009",
    contactName: "Ann",
    email: "ann@ann.com",
    phone: "0",
    avatar: "E",
  },
  {
    name: "Zoho",
    ref: "CLNT-0007",
    contactName: "John Doe",
    email: "zoho@gmail.com",
    phone: "9003976034",
    avatar: "Z",
  },
  {
    name: "Zoho",
    ref: "CLNT-0007",
    contactName: "John Doe",
    email: "zoho@gmail.com",
    phone: "9003976034",
    avatar: "Z",
  }
];

function Dashboard() {
  return (
    <div className=''>
      <button className=' bg-green-600 px-2 py-1  text-white rounded-[10px_10px_0px_0px]'>Client</button>

      <div className=' w-full h-[430px] bg-gray-50 px-4 py-4 overflow-auto'>
        <div className="grid grid-cols-4 gap-4 overflow-auto ">
          {clients.map((client, index) => (
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
                <button className="text-gray-500 hover:text-gray-700">•••</button>
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