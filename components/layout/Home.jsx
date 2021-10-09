import React, { useState } from 'react'
import CurrencyContainer from '../crypto/CurrencyContainer'
import Stats from '../Stats'

const Home = () => {
   
    return (
        <div className=" w-full overflow-x-hidden overflow-y-scroll no-scrollbar 
        flex items-center justify-center flex-col pt-4 space-y-4" >


            <Stats />
            <CurrencyContainer />
        </div>
    )
}

export default Home
