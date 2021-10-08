import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux"
import millify from 'millify'
const Stat = ({ title, val }) => {
    return (<p className="w-1/2 text-gray-100">
        <span className="font-noto font-semibold animated hover:underline">{title}</span> <br/>
        <span className="text-xl text-indigo-800 font-extrabold">{millify(val)}</span>
    </p>)
}

const Stats = () => {
    const cryptos = useSelector(state => state.cryptos)
    const [stats, setStats] = useState(cryptos?.data?.stats)
    return (
        <div id="statsContainer" className=" w-11/12 mx-auto">
            <div className='flex justify-between'>

                <h3 className="title-1">Global Crypto Stats</h3>
                <span className="blink">| Crypto Currency Tracker App</span>
            </div>
            <div className="stats-wrapper">
                {/* {Object.keys(stats).map((item) => <p className="p-1">{item}</p>)} */}
                <Stat title="Total" val={stats?.total} />
                <Stat title="Total Markets" val={stats?.totalMarkets} />
                <Stat title="Total Exchanges" val={stats?.totalExchanges} />
                <Stat title="Total MarketCap" val={stats?.totalMarketCap} />
                <Stat title="Total 24h Volume" val={stats?.total24hVolume} />
            </div>
        </div>
    )
}

export default Stats
