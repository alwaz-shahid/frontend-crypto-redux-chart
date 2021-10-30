import React, { useEffect, useState } from 'react'
import millify from 'millify'
import { useSelector } from "react-redux"
const Stat = ({ title, val }) => {
    useEffect(() => { }, [val, title])
    return (
        <p className="w-1/2 text-gray-100 md:px-0 px-2">
            <span className="font-noto text-sm md:text-base font-semibold animated hover:underline">{title}</span> <br />
            <span className="md:text-xl text-indigo-800 font-extrabold">{val && millify(val)}</span>
        </p>
    )
}

const Stats = () => {
    const cryptos = useSelector(state => state?.cryptos)
    const [allCoins, setAllCoins] = useState(cryptos?.data?.coins)
    const [stats, setStats] = useState(cryptos?.data?.stats)
    useEffect(() => { }, [allCoins, cryptos, stats])

    return (
        <div className="container-inner">
            <div className='flex md:flex-row flex-col  md:justify-between w-full'>
                <h3 className="title-1">Global Crypto Stats</h3>
                <span className="blink md:text-base text-xs float-right">| Crypto Currency Tracker App</span>
            </div>
            <div className="stats-wrapper">
                <Stat title="Total Crypto Currencies" val={stats?.total} />
                <Stat title="Total Exchanges" val={stats?.totalExchanges} />
                <Stat title="Total Markets" val={stats?.totalMarkets} />
                <Stat title="Total MarketCap" val={stats?.totalMarketCap} />
                <Stat title="Total 24h Volume" val={stats?.total24hVolume} />
            </div>
        </div>
    )
}

export default React.memo(Stats)
