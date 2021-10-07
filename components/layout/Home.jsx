import React, { useState } from 'react'
import CurrencyContainer from '../crypto/CurrencyContainer'
import Stats from '../Stats'

const Home = () => {
   
    return (
        <div className=" w-full overflow-x-hidden overflow-y-scroll no-scrollbar 
        flex items-center justify-center flex-col pt-4 space-y-4" >
            {/* <h2 className="text-5xl hover:animate-pulse">{data?.greet}</h2>
            <h1 className="text-xl font-stick">{data?.position}</h1>
            <h3 className="text-2xl">{data?.intro}</h3>
            */}

            <Stats />
            <CurrencyContainer />
        </div>
    )
}

export default Home
