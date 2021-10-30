import React from 'react'

const LoadingSpinner = () => {
    return (
        <div className=" flex justify-center items-center my-10 mx-auto">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-purple-800"></div>
      </div>
    )
}

export default React.memo(LoadingSpinner)
