import React from 'react'
import Image from 'next/image'
import millify from "millify"

const CryptoCurrencies = ({ title, imageUrl, price, marketCap, dailyChange, rank }) => {
    return (
        <div className="crypto-card-container animated">
            <div className="flex-btw border-b-2 border-indigo-600 pb-2">
                <h3 className="text-xl"><span className="coin-title">{rank}.</span> {title}.</h3>
                <Image height={30} width={30} src={imageUrl}
                    className="rounded-3xl bg-cover" />
            </div>
            <p className="coin-info"><span className="coin-info-title">Price: </span>
                {millify(price)}</p>
            <p className="coin-info"><span className="coin-info-title">Market Cap: </span>
                {millify(marketCap)}</p>
            <p className="coin-info"><span className="coin-info-title">Daily Change: </span>
                {millify(dailyChange)}</p>
        </div>
    )
}

export default React.memo(CryptoCurrencies)
