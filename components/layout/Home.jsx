import React, { useState } from 'react'

const Home = ({ landing }) => {
    const [data, setData] = useState(landing)
    return (
        <div className=" w-full  flex items-center justify-center flex-col space-y-4 h-72" >
            <h2 className="text-5xl hover:animate-pulse">{data?.greet}</h2>
            <h1 className="text-xl font-stick">{data?.position}</h1>
            <h3 className="text-2xl">{data?.intro}</h3>
           
        </div>
    )
}

export default Home
