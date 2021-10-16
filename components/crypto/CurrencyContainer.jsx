import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux"
import CryptoCurrencies from './CryptoCurrencies'


const CurrencyContainer = () => {
    const cryptos = useSelector(state => state?.cryptos)
    const [allCoins, setAllCoins] = useState(cryptos?.data?.coins)
    const [showAll, setShowAll] = useState(false)
    const [searchTerm, setSearchTerm] = useState("")
    let coinLimit = showAll ? 10000000 : 10;

    const toggle = React.useCallback(
        () => {
            setShowAll(!showAll)
            setSearchTerm('')
        },
        [showAll, setShowAll],
    );
    useEffect(() => {
        const filteredCoins = allCoins?.filter((coin) => coin?.name?.toLowerCase()?.includes(searchTerm?.toLowerCase()))
        setAllCoins(filteredCoins)
    }, [searchTerm])
    useEffect(() => {
        setAllCoins(cryptos?.data?.coins)
    }, [showAll, cryptos,allCoins])
    return (
        <section className="currency-container">
            <div className="min-w-full flex-btw">
                <h3 className="title-1">
                    {showAll ? "All" : "Top 10"} Crypto Curriencies</h3>
                <div className="flex lg:block py-2 lg:py-0 justify-between items-center">
                    <input className="input-search" placeholder="Search Coin" value={searchTerm}
                        onChange={(e) => { setShowAll(true); setSearchTerm(e.target.value); }} />
                    <button onClick={toggle} className={`btn-show animated`}>
                        {showAll ? "Show Top 10" : "Show All "}
                    </button>

                </div>
            </div>
            {allCoins?.slice(0, coinLimit)?.map((item, i) => <CryptoCurrencies
                title={item?.name} id={item?.id} imageUrl={item?.iconUrl} rank={item?.rank}
                marketCap={item?.marketCap} dailyChange={item?.change}
                price={item?.price} key={i}
            />)}
        </section>
    )
}

export default React.memo(CurrencyContainer)
