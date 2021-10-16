import React from 'react'
import ExchangeCard from '../exchange/ExchangeCard'

const Exchange = () => {
    return (
        <div className=" w-full overflow-x-hidden overflow-y-scroll no-scrollbar 
        flex items-center justify-center flex-col pt-4 space-y-4">
            <ExchangeCard/>
        </div>
    )
}

export default Exchange
