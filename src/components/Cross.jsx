import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'


function Cross() {
    const [user, setUser] = useState([])
    const [showBox, setShowBox] = useState(false)
    const [selectedClient, SetselectedClient] = useState(null)

    useEffect(() => {
        takenData()
    }, [])
    const takenData = async () => {
        await fetch('http://localhost:3000/clients')
            .then((res) => res.json())
            .then((aron) => setUser(aron))
    }

    const deleteData = async (index) => {
        const clientTo = user[index]

        await fetch(`http://localhost:3000/clients/${clientTo.id}`, {
            method: 'DELETE'
        })
        const updatedUsers = user.filter((_, i) => i !== index)
        setUser(updatedUsers)
        setShowBox(false)

    }
    return (
        <div>
            <button className=' bg-green-600 px-2 text-white rounded-[8px_8px_0px_0px]'>Client</button>
            <div className=' w-full h-[445px] bg-gray-50 p-2 overflow-y-auto'>
                <table className=' w-full bg-white shadow-md rounded-xl'>
                    <thead className="">
                        <tr>
                            <th className="py-3 px-4 text-left">Company</th>
                            <th className="py-3 px-4 text-left">Contact Person</th>
                            <th className="py-3 px-4 text-left">E-mail</th>
                            <th className="py-3 px-4 text-left">Phone</th>
                            <th className="py-3 px-4 text-left">Action</th>
                        </tr>
                    </thead>
                    <tbody className=' text-gray-600' >
                        {user.map((client, index) => (
                            <tr key={index}
                                className="border-t border-gray-200 hover:bg-green-50 transition">
                                <td className="py-2 px-4">{client.name}</td>
                                <td className="py-2 px-4">{client.contactName}</td>
                                <td className="py-2 px-4">{client.email}</td>
                                <td className="py-2 px-4">{client.phone}</td>
                                <td className="py-2 px-4">
                                    <button><i class="fa-solid fa-eye text-green-600 text-xs mr-2"></i></button>
                                    <button><i class="fa-solid fa-pen-to-square text-blue-600 text-xs mr-2"></i></button>

                                    <button onClick={() => {
                                        setShowBox(true)
                                        SetselectedClient(index)
                                    }}>
                                        <i class="fa-solid fa-trash text-red-600 text-xs"></i>
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            {showBox && (
                <div id='popup' className=' absolute inset-0 w-full bg-gray-400/60 rounded-xs'>
                    <div className=' w-[400px] px-3 py-4 bg-white relative top-[30%] left-[35%] '>
                        <h1 className=' text-red-600'>Warning!</h1>
                        <p>Are you sure you want to remove Jeevan from Client?</p>
                        <div className=' flex gap-2 justify-end'>
                            <button onClick={() => setShowBox(false)} className=' bg-green-500 px-2 py-1.5 text-white'>Cancel</button>
                            <button
                                onClick={() => {
                                    deleteData(selectedClient)
                                }} className=' bg-green-500 px-2 py-1.5 text-white'>Ok</button>
                        </div>
                    </div>
                </div>
            )}
            <ToastContainer />
        </div>
    )
}

export default Cross