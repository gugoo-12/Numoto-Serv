import React from 'react'

function Breadcrumb({ name, ishidden, secName }) {
    return (
        <div className="flex items-center space-x-2 text-xs font-medium text-gray-600">
            <button className="hover:text-green-600">
                <i className="fa-solid fa-house mr-1 text-sm"></i> Dashboard
            </button>
            <i className="fa-solid fa-chevron-right text-gray-400 text-[10px]"></i>
            <button className="hover:text-green-600">{name}</button>
            {ishidden && (
                <>
                    <i className="fa-solid fa-chevron-right text-gray-400 text-[10px]"></i>
                    <button className="text-green-700">{secName}</button>
                </>
            )}
        </div>
    )
}

export default Breadcrumb