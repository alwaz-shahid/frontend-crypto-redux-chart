import React, { useEffect, useState } from 'react'
import { useGetCryptosQuery } from '../../services/cryptoApi'

import CryptoCurrencies from './CryptoCurrencies'


const CurrencyContainer = () => {
    const { data, error, isLoading, endpointName } = useGetCryptosQuery()
    const [allCoins, setAllCoins] = useState(data?.data?.coins)
    const [showAll, setShowAll] = useState(false)
    const [searchTerm, setSearchTerm] = useState("")
    let coinLimit = showAll ? 10000000 : 10;

    const toggle = React.useCallback(
        () => {
            setShowAll(!showAll)
            setSearchTerm('')
        },
        [showAll,data, setShowAll],
    );
    useEffect(() => {
        const filteredCoins = allCoins?.filter((coin) => coin?.name?.toLowerCase()?.includes(searchTerm?.toLowerCase()))
        setAllCoins(filteredCoins)
    }, [searchTerm])
    useEffect(() => {
        setAllCoins(data?.data?.coins)
    }, [showAll,data, toggle])
    return (
        <section className="currency-container">
            <div className="min-w-full flex-btw">
                <h3 className="title-1">
                    {showAll ? "All" : "Top 10"} Crypto Curriencies</h3>
                <div>
                    <input className="input-search" placeholder="Search Coin" value={searchTerm}
                        onChange={(e) => { setShowAll(true); setSearchTerm(e.target.value); }} />
                    <button onClick={toggle} className={`btn-show animated`}>
                        {showAll ? "Show Top 10" : "Show All "}
                    </button>

                </div>
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
