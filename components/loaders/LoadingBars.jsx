import React from 'react'

const LoadingBars = ({len=6}) => {
    return (
        <div className="min-h-screen center justify-between flex-col">
            {[...Array(len)].map((e,i)=> <div key={i} className=" h-36 min-w-full overflow-hidden rounded-xl bg-gradient-to-br from-purple-100 via-purple-200 to-purple-300 animate-pulse"></div>)}
        </div>
    )
}

export default LoadingBars