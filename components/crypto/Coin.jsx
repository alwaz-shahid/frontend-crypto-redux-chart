import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import millify from "millify"
import { CryptoStats } from './CryptoStats'
const Coin = ({ coin, coinHistory, coinId, loading }) => {
    const router = useRouter()
    const q = router?.query
    // console.log(q)
    // const coinId = q.id
    const [timePeriod, setTimePeriod] = useState('7d');
    // const { data, isFetching } = useGetCryptoQuery(coinId);
    // const { data: coinHistory } = useGetCryptoHistoryQuery({ coinId, timeperiod });
    // const coin? = data?.data?.coin;

    // if (isFetching) return <Loader />;

    const time = ['3h', '24h', '7d', '30d', '1y', '3m', '3y', '5y'];

    // const stats = coin && [
    //     { title: 'Price to USD', value: `$ ${coin?.price && millify(coin?.price||1)}`, icon: <DollarIcon /> },
    //     { title: 'Rank', value: coin?.rank, icon: <NumberIcon /> },
    //     { title: '24h Volume', value: `$ ${coin?.volume && millify(coin?.volume||1)}`, icon: <Thunderbolt /> },
    //     { title: 'Market Cap', value: `$ ${coin?.marketCap && millify(coin?.marketCap||1)}`, icon: <DollarIcon /> },
    //     { title: 'All-time-high(daily avg.)', value: `$ ${millify(coin?.allTimeHigh?.price||1)}`, icon: <ChartIcon /> },
    // ];

    // const genericStats = [
    //     { title: 'Number Of Markets', value: coin?.numberOfMarkets, icon: <ExchangeIcon /> },
    //     { title: 'Number Of Exchanges', value: coin?.numberOfExchanges, icon: <ExchangeIcon /> },
    //     { title: 'Aprroved Supply', value: coin?.approvedSupply ? <CheckIcon /> : <CrossIcon />, icon: <ApproveIcon /> },
    //     { title: 'Total Supply', value: `$ ${millify(coin?.totalSupply||1)}`, icon: <InfoIcon /> },
    //     { title: 'Circulating Supply', value: `$ ${millify(coin?.circulatingSupply||1)}`, icon: <InfoIcon /> },
    // ];


    useEffect(() => { }, [coin, time, timePeriod])
    return (
        coin && <div className='w-11/12 mx-auto py-2'>
            {/* {JSON.stringify(coin)} */}
            <h1 className="title-1">{coin?.name} | {millify(coin?.price)}</h1>

            <CryptoStats coin={coin} title="ok" info="info" />

        </div>
    )
}

export default Coin
