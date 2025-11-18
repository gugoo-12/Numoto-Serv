import React, { useState } from 'react'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function Cross({ user }) {
  const [showBox, setShowBox] = useState(false)
  const [selectedClient, setSelectedClient] = useState(null)

  const deleteData = async (index) => {
    try {
      const clientToDelete = user[index]
      await fetch(`http://localhost:3000/clients/${clientToDelete.id}`, {
        method: 'DELETE',
      })
      const updatedUsers = user.filter((_, i) => i !== index)
      setShowBox(false)
      toast.success('Client deleted successfully!', {
        position: 'bottom-right',
        autoClose: 1500,
      })
    } catch {
      toast.error('Failed to delete client!', {
        position: 'bottom-right',
        autoClose: 2000,
      })
    }
  }

  return (
    <div className="relative">
      {/* Table Section */}
      <div className='w-full h-[440px] bg-white px-4 py-4 overflow-y-auto rounded-md'>
        <table className="w-full">
          <thead className="text-[13px] font-semibold text-gray-700 border-b">
            <tr>
              <th className="py-3 px-4 text-left">Company</th>
              <th className="py-3 px-4 text-left">Contact Person</th>
              <th className="py-3 px-4 text-left">E-mail</th>
              <th className="py-3 px-4 text-left">Phone</th>
              <th className="py-3 px-4 text-left">Action</th>
            </tr>
          </thead>

          <tbody className="text-gray-600 text-[13px]">
            {Array.isArray(user) && user.length > 0 ? (
              user.map((client, index) => (
                <tr
                  key={index}
                  className="border-t border-gray-100 hover:bg-green-50 transition-all duration-200"
                >
                  <td className="py-2 px-4">{client.name}</td>
                  <td className="py-2 px-4">{client.contactName}</td>
                  <td className="py-2 px-4">{client.email}</td>
                  <td className="py-2 px-4">{client.phone}</td>
                  <td className="py-2 px-4 flex items-center space-x-2">
                    <button className="hover:text-green-600 transition">
                      <i className="fa-solid fa-eye text-green-500 text-sm"></i>
                    </button>
                    <button className="hover:text-blue-600 transition">
                      <i className="fa-solid fa-pen-to-square text-blue-500 text-sm"></i>
                    </button>
                    <button
                      onClick={() => {
                        setShowBox(true)
                        setSelectedClient(index)
                      }}
                      className="hover:text-red-600 transition"
                    >
                      <i className="fa-solid fa-trash text-red-500 text-sm"></i>
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan="5"
                  className="text-center py-5 text-gray-500 text-sm"
                >
                  No clients found
                </td>
              </tr>
            )}
          </tbody>
        </table>
        <ToastContainer />
      </div>

      {/* Delete Confirmation Popup */}
      {showBox && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-900/40 backdrop-blur-sm z-50">
          <div className="bg-white w-[380px] rounded-lg shadow-lg p-5 animate-fade-in">
            <h2 className="text-red-600 font-semibold text-lg mb-1">Warning!</h2>
            <p className="text-gray-700 text-sm mb-4">
              Are you sure you want to remove this client?
            </p>
            <div className="flex justify-end gap-2">
              <button
                onClick={() => setShowBox(false)}
                className="px-3 py-1.5 bg-gray-200 hover:bg-gray-300 text-gray-700 rounded-md text-sm transition"
              >
                Cancel
              </button>
              <button
                onClick={() => deleteData(selectedClient)}
                className="px-3 py-1.5 bg-green-500 hover:bg-green-600 text-white rounded-md text-sm transition"
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Cross
