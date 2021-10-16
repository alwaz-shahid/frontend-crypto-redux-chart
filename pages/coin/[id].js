import React, { useState, useEffect } from 'react'
import CurrencyContainer from '../../components/crypto/CurrencyContainer'
import { useRouter } from 'next/router'
import { useGetCryptoHistoryQuery, useGetCryptoQuery, useGetCryptosQuery } from '../../services/cryptoApi'
import { data } from '../../utils/samples/cryptoSample'
import Coin from "../../components/crypto/Coin"
import { CryptoStats } from '../../components/crypto/CryptoStats'
import HTMLReactParser from 'html-react-parser';
import Select from "react-select"
import CoinChart from '../../components/lineChart/CoinChart'
import millify from "millify"
import LoadingSpinner from '../../components/loaders/LoadingSpinner'


const coinIndex = () => {
    const router = useRouter()
    const q = router?.query
    const coinId = q.id
    const [timePeriod, setTimePeriod] = useState({
        value: "24h", label: "24 Hours",
    })
    const { data, isLoading, error, isSuccess, isFetching } = useGetCryptoQuery(coinId)
    const { data: coinHistory, isLoading: historyLoading,
        error: historyError } = useGetCryptoHistoryQuery({ coinId, timePeriod: timePeriod.value })
    // const coinHistory = {}
    const [coin, setCoin] = useState(data?.data)

    useEffect(() => { }, [data, coin, q, isLoading, timePeriod])
    const timeOptions = [
        {
            value: "24h", label: "24 Hours",
        },
        {
            value: "7d", label: "7 Days",
        },
        {

            value: "30d", label: "30 Days",
        },
    ]

    useEffect(() => { setCoin(data?.data?.coin) }, [data, isLoading])

    const customTheme = (theme) => ({
        ...theme,
        borderRadius: 0,
        colors: {
            ...theme.colors,
            primary25: '#e6e0fe',
            primary: '#7c3aed',
        },
    })
    if (isFetching || isLoading) return <LoadingSpinner/>;
    return (
        <section className='container-page no-scrollbar'>
            <div className="container-inner flex-col flex flex-wrap space-y-10 my-5">
                <div>

                    <h1 className="title-1">{coin?.name} | {coin?.slug}</h1>
                    <p className="lg:text-xl text-sm text-indigo-700">{coin?.name} live price in US Dollar (USD). View value statistics, market cap and supply.</p>
                </div>
                <div className="flex justify-start lg:justify-between lg:flex-row flex-col space-y-4">

                    <CryptoStats coin={coin} title={`${coin?.name} Value Statistics`}
                        info={`An overview showing the statistics of ${coin?.name}, such as the base and quote currency, the rank, and trading volume`} />
                    <CryptoStats generic coin={coin} title="Other Stats Info"
                        info={`An overview showing the statistics of ${coin?.name}, such as the exchanges, markets and supplies.`} />
                </div>
                {!historyLoading && <div className="space-y-4">
                    <h3 className='title-1 '>{coin?.name} - Price Chart</h3>
                    <div className=" lg:float-right">
                        <Select className="lg:w-48 w-full my-5 rounded-xl text-indigo-800"
                            onChange={setTimePeriod} options={timeOptions} placeholder="Select Duration" defaultValue="3h"
                            theme={customTheme} />
                        <p className="text-indigo-700">Time Span: {timePeriod.label}</p>
                    </div>
                    <CoinChart coinHistory={coinHistory} coinName={coin?.name} coinprice={coin?.price && millify(coin?.price || 1)} />
                </div>}
                <div className="space-y-4">
                    <h2 className="title-1">About {coin?.name}</h2>
                    <div className="flex lg:flex-row flex-col lg:justify-between">

                        <article className="text-indigo-900 leading-loose text-lg w-full lg:w-3/4">
                            {coin?.description && HTMLReactParser(coin?.description)}
                        </article>

                        <div className="lg:w-1/5 w-full sticky rounded-xl shadow-sm border lg:border-2 border-indigo-500 h-1/2 pb-7 divide-y-[1px] lg:divide-y-2 divide-indigo-500 lg:my-0 my-4">
                            <h5 className=" p-1 lg:p-2 text-xl font-semibold divide-y-[1px] lg:divide-y-2 divide-indigo-600 text-indigo-800 text-center">Related Links</h5>
                            {coin?.links && coin?.links?.map((item, i) => <div key={i} className="text-semibold animated hover:bg-indigo-200 px-2">
                                <div className=" text-sm text-indigo-800 py-1 overflow-hidden whitespace-nowrap overflow-ellipsis">
                                    <a className="py-1 w-full lg:block flex items-center justify-between" href={item?.url} rel="norefferer" target="_blank" >
                                        <p className="py-0.5 font-semibold">{item?.type?.toUpperCase()}</p>
                                        <p className="">@{item?.name}   </p>
                                    </a>
                                </div>
                            </div>)}
                        </div>
                    </div>
                </div>


            </div>
        </section>
    )
}

export default coinIndex

export async function getStaticPaths() {
    const paths = data?.data?.coins?.map(({ id }) => ({
        params: { id: id?.toString() }
    }))
    return { paths, fallback: "blocking" };
}
export async function getStaticProps({ params }) {
    const { id } = params
    return {
        props: {},
        revalidate: 100,
    }
}