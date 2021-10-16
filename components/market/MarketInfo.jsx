import React from 'react'
import Image from "next/image"
import millify from 'millify'
import parseTimeDate from '../../utils/parseTimeDate'
const MarketInfo = ({ data }) => {
    const { volume, price, marketShare, sourceName, sourceIconUrl, rank, quoteSymbol, baseSymbol,tickerQuoteVolume, tickerBaseVolume, tickerClose, tickerCreatedAt } = data
    return (
        <div className="lg:w-2/5 sm:w-[47%] w-11/12  rounded-xl bg-indigo-500 text-indigo-900 p-3 m-5 shadow-lg animated hover:translate-y-1">
            <div className="flex justify-between items-center">

                <p className="text-xl font-semibold text-white">
                    <span className="font-semibold text-base text-indigo-900">{rank}. </span>
                    {sourceName}</p>
                <Image height={30} width={30} src={sourceIconUrl}
                    className="rounded-3xl bg-cover" />
            </div>
            <div className="lg:divide-y-2 divide-y-[1px] divide-indigo-800 animated py-2">
                <p className="coin-info flex justify-between items-center p-2 text-white">
                    <span className="coin-info-title ">Quote Symbol: </span>{quoteSymbol}</p>
                <p className="coin-info flex justify-between items-center p-2 text-white">
                    <span className="coin-info-title ">Base Symbol: </span>{baseSymbol}</p>
                <p className="coin-info flex justify-between items-center p-2 text-white">
                    <span className="coin-info-title ">Price: </span>${price && millify(price)}</p>
                <p className="coin-info flex justify-between items-center p-2 text-white">
                    <span className="coin-info-title ">Volume: </span>${volume && millify(volume)}</p>
                <p className="coin-info flex justify-between items-center p-2 text-white">
                    <span className="coin-info-title ">Market Share: </span>{marketShare && millify(marketShare)}%</p>
                <p className="coin-info flex justify-between items-center p-2 text-white">
                    <span className="coin-info-title ">Ticker Quote Volume: </span>${tickerQuoteVolume && millify(tickerQuoteVolume)}</p>
                <p className="coin-info flex justify-between items-center p-2 text-white">
                    <span className="coin-info-title ">Ticker Base Volume: </span>${tickerBaseVolume && millify(tickerBaseVolume)}</p>
                <p className="coin-info flex justify-between items-center p-2 text-white">
                    <span className="coin-info-title ">Ticker Created At: </span>{tickerCreatedAt && parseTimeDate(tickerCreatedAt)}</p>
                <p className="coin-info flex justify-between items-center p-2 text-white">
                    <span className="coin-info-title ">Ticker Close: </span>{tickerClose && parseTimeDate(tickerClose)}</p>

            </div>
        </div>
    )
}

export default MarketInfo
