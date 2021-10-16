import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import ExchangeCard from '../exchange/ExchangeCard'

const Exchange = () => {
    const exchanges = useSelector(state => state.exchange)
    useEffect(() => { }, [exchanges])
    return (
        <div className=" container-inner">
            <div className="mx-auto flex justify-around items-start flex-wrap relative">
            <h6 className="title-1 mx-auto pt-2">Crypto Exchanges</h6>
            {exchanges?.data?.exchanges?.map((exchange, i) => <ExchangeCard key={i} data={exchange} />)}
            </div>
        </div>
    )
}

export default Exchange
