import React, { useEffect, useState } from 'react'
import millify from 'millify'
import { useSelector } from "react-redux"
const Stat = ({ title, val }) => {
    useEffect(() => { }, [val, title])
    return (
        <p className="w-1/2 text-gray-100">
            <span className="font-noto font-semibold animated hover:underline">{title}</span> <br />
            <span className="text-xl text-indigo-800 font-extrabold">{val && millify(val)}</span>
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
            <div className='flex justify-between'>
                <h3 className="title-1">Global Crypto Stats</h3>
                <span className="blink">| Crypto Currency Tracker App</span>
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

export default Stats
