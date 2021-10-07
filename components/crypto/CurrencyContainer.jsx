import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux"
import CryptoCurrencies from './CryptoCurrencies'


const CurrencyContainer = () => {
    const cryptos = useSelector(state => state.cryptos)
    const [allCoins, setAllCoins] = useState(cryptos?.cryptos?.data?.coins)
    const [showAll, setShowAll] = useState(false)

    let coinLimit = showAll ? 10000000 : 10;

    const toggle = React.useCallback(
        () => { setShowAll(!showAll) },
        [showAll, setShowAll],
    );
    useEffect(() => {
    }, [allCoins, showAll, toggle])
    return (
        <section className="flex items-start flex-wrap justify-between w-11/12 mx-auto py-2">
            <div className="min-w-full flex items-center justify-between">
                <h3 className="text-indigo-600 pb-2 text-4xl font-semibold">
                    {showAll ? "All" : "Top 10"} Crypto Curriencies</h3>
                <button onClick={toggle}
                    className="p-3 rounded-xl bg-indigo-400 text-center text-white hover:bg-indigo-500 animated">
                    {showAll ? "Show Top 10" : "Show All "}</button>
            </div>
            {allCoins?.slice(0, coinLimit)?.map((item, i) => <CryptoCurrencies
                title={item?.name} imageUrl={item?.iconUrl} rank={item?.rank}
                marketCap={item?.marketCap} dailyChange={item?.change}
                price={item?.price} key={i}
            />)}
        </section>
    )
}

export default React.memo(CurrencyContainer)
