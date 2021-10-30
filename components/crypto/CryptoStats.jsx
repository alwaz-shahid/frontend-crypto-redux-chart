import React from 'react'
import millify from "millify"
import {
    ApproveIcon, ChartIcon, CheckIcon,
    CrossIcon, DollarIcon, ExchangeIcon, InfoIcon,
    NumberIcon, Thunderbolt
} from '../common/Icons'


const CryptoStats = ({ title, coin, info, generic = false }) => {
    const stats = [
        { title: 'Price to USD', value: `$ ${coin?.price && millify(coin?.price || 1)}`, icon: DollarIcon },
        { title: 'Rank', value: coin?.rank, icon: NumberIcon },
        { title: '24h Volume', value: `$ ${coin?.volume && millify(coin?.volume || 1)}`, icon: Thunderbolt },
        { title: 'Market Cap', value: `$ ${coin?.marketCap && millify(coin?.marketCap || 1)}`, icon: DollarIcon },
        { title: 'All-time-high(daily avg.)', value: `$ ${millify(coin?.allTimeHigh?.price || 1)}`, icon: ChartIcon },
    ]
    const genericStats = [
        { title: 'Number Of Markets', value: coin?.numberOfMarkets, icon: ExchangeIcon },
        { title: 'Number Of Exchanges', value: coin?.numberOfExchanges, icon: ExchangeIcon },
        { title: 'Aprroved Supply', value: coin?.approvedSupply ? CheckIcon : CrossIcon, icon: ApproveIcon },
        { title: 'Total Supply', value: `$ ${coin?.totalSupply && millify(coin?.totalSupply)}`, icon: InfoIcon },
        { title: 'Circulating Supply', value: `$ ${coin?.circulatingSupply && millify(coin?.circulatingSupply)}`, icon: InfoIcon },
    ];
    return (
        <div className="rounded-xl space-y-2 animated hover:bg-indigo-400 shadow-lg bg-indigo-500 p-3 flex flex-col
         justify-start items-center h-auto  lg:w-1/2 lg:my-0 my-4 m-2">
            <div className="font-noto">
                <h4 className="lg:text-2xl text-lg font-semibold text-indigo-900">{title}</h4>
                <p className="text-indigo-50 text-sm">{info}</p>
            </div>
            <div className=" divide-y-2 divide-indigo-600 min-w-full  flex flex-col items-center justify-center">

                {coin && generic ? genericStats?.map((item, i) =>
                    <div key={i} className="flex items-end justify-between min-w-full space-y-4 text-indigo-50 text-sm
             animated hover:px-1">
                        <div className="flex space-x-2 items-center">
                            <span className="text-indigo-900">{item?.icon}</span>
                            <p className="text-indigo-900 font-semibold">{item?.title}</p>
                        </div>
                        <p className="flex items-center font-semibold">{item?.value}</p>
                    </div>
                ) : stats?.map((item, i) =>
                    <div key={i} className="flex items-end justify-between min-w-full space-y-4 text-indigo-50 text-sm
                    animated hover:px-1">
                        <div className="flex space-x-2 items-center">
                            <span className="text-indigo-900">{item?.icon}</span>
                            <p className="text-indigo-900 font-semibold">{item?.title}</p>
                        </div>
                        <p className="flex items-center font-semibold">{item?.value}</p>
                    </div>)}
            </div>
        </div>
    )
}

export default React.memo(CryptoStats)