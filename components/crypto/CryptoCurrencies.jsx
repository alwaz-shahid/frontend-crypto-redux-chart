import React from 'react'
import Image from 'next/image'
import millify from "millify"

const CryptoCurrencies = ({ title, imageUrl, price, marketCap, dailyChange, rank }) => {
    return (
        <div className="w-[30%] p-4 m-2 space-y-2 rounded-xl animated hover:bg-indigo-300 filter drop-shadow-lg 
        overflow-hidden h-42 flex flex-col justify-evenly bg-indigo-400">
            <div className="flex items-start justify-between border-b-2 border-indigo-600 pb-2">
                <h3 className="text-xl"><span className="font-bold text-sm text-indigo-600">{rank}.</span> {title}.</h3>
                <Image height={30} width={30} src={imageUrl}
                    className="rounded-3xl bg-cover filter drop-shadow-lg"
                />
            </div>
            <p className="font-semibold text-sm"><span className="text-indigo-600 font-noto text-base">Price: </span>
                {millify(price)}</p>
            <p className="font-semibold text-sm"><span className="text-indigo-600 font-noto text-base">Market Cap: </span>
                {millify(marketCap)}</p>
            <p className="font-semibold text-sm"><span className="text-indigo-600 font-noto text-base">Daily Change: </span>
                {millify(dailyChange)}</p>
        </div>
    )
}

export default React.memo(CryptoCurrencies)
