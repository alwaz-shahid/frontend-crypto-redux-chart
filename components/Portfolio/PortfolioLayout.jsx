import React from 'react'

const PortfolioLayout = ({ title, desc, subTitle }) => {
    return (
        <div className="w-3/4 center-v m-4 flex-col space-y-5 h-1/2 border rounded-md animated hover:ring-2 hover:ring-blue-600 ">
            <h5 className="text-2xl text-gray-800 animated hover:text-red-800">{title}</h5>
            <p className="text-lg text-gray-800 animated hover:text-red-800">{desc}</p>
            <p className="text-2xl text-gray-800 animated hover:text-red-800">{subTitle}</p>
        </div>
    )
}

export default PortfolioLayout
