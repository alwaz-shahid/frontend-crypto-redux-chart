import React, { useEffect, useState } from 'react'
import CurrencyContainer from '../crypto/CurrencyContainer'
import LoadingSpinner from '../loaders/LoadingSpinner'
import Stats from '../Stats'

const Home = ({ isLoading = true }) => {
    useEffect(() => { }, [isLoading])
    return (
        <div className=" w-full overflow-x-hidden overflow-y-scroll no-scrollbar 
        flex items-center justify-center flex-col pt-4 space-y-4 " >


            <Stats />

            {isLoading ? <LoadingSpinner /> : <CurrencyContainer />}
        </div>
    )
}

export default Home
