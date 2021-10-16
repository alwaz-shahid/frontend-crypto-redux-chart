import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import millify from "millify"

const CryptoCurrencies = ({ title, imageUrl, price, marketCap, dailyChange, rank, id }) => {
    return (
        <Link href={`/coin/${id}`}>
            <div className="crypto-card-container animated shadow-lg">
                <div className="flex items-center justify-between border-b-2 border-indigo-600 pb-2">
                    <h3 className="text-xl"><span className="coin-title">{rank}.</span> {title}.</h3>
                    <Image height={30} width={30} src={imageUrl}
                        className="rounded-3xl bg-cover" />
                </div>
                <p className="coin-info"><span className="coin-info-title">Price: </span>
                    ${millify(price)}</p>
                <p className="coin-info"><span className="coin-info-title">Market Cap: </span>
                    ${millify(marketCap)}</p>
                <p className="coin-info"><span className="coin-info-title">Daily Change: </span>
                    {millify(dailyChange)}%</p>
            </div>
        </Link>
    )
}

export default React.memo(CryptoCurrencies)
