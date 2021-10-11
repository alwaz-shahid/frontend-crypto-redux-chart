import React, { useState, useEffect } from 'react'
import CurrencyContainer from '../../components/crypto/CurrencyContainer'
import { useRouter } from 'next/router'
import { useGetCryptoQuery, useGetCryptosQuery } from '../../services/cryptoApi'
import { data } from '../../utils/samples/cryptoSample'
import Coin from "../../components/crypto/Coin"
import { CryptoStats } from '../../components/crypto/CryptoStats'
import HTMLReactParser from 'html-react-parser';

const statsTitle = {
    statistics: { title: "", info: "" },
}

const coinIndex = () => {
    const router = useRouter()
    const q = router?.query
    const coinId = q.id
    const { data, isLoading, error, isSuccess, isFetching } = useGetCryptoQuery(coinId)
    const coinHistory = {}
    const [coin, setCoin] = useState(data?.data)

    // useEffect(() => { }, [data, coin, q, isLoading])
    useEffect(() => { setCoin(data?.data?.coin) }, [data, isLoading])
    return (
        <section className='container-page no-scrollbar'>
            <div className="container-inner flex-col flex flex-wrap space-y-10 my-5">
                <div>

                    <h1 className="title-1">{coin?.name} | {coin?.slug}</h1>
                    <p className="text-xl text-indigo-700">{coin?.name} live price in US Dollar (USD). View value statistics, market cap and supply.</p>
                </div>
                <div className="flex justify-between ">

                    <CryptoStats coin={coin} title={`${coin?.name} Value Statistics`}
                        info={`An overview showing the statistics of ${coin?.name}, such as the base and quote currency, the rank, and trading volume`} />
                    <CryptoStats generic coin={coin} title="Other Stats Info"
                        info={`An overview showing the statistics of ${coin?.name}, such as the base and quote currency, the rank, and trading volume.`} />
                </div>
                <div className="space-y-4">
                    <h2 className="title-1">About {coin?.name}</h2>
                    <div className="flex justify-between">

                        <article className="text-indigo-900 leading-loose text-lg w-3/4">
                            {coin?.description && HTMLReactParser(coin?.description)}
                        </article>

                        <div className="w-1/5 sticky rounded-xl shadow bg-indigo-400 h-1/2 pb-2">
                            <h5 className="p-2 text-xl font-semibold divide-y-2 divide-indigo-600 text-indigo-800 text-center">Links</h5>
                            {coin?.links && coin?.links?.map((item, i) => <div key={i} className="text-semibold animated hover:bg-indigo-200 px-2">
                                <div className="items-center text-sm text-indigo-800 py-1">
                                    <a className="" href={item?.url} rel="norefferer" target="_blank" >
                                        <p classname="">{item?.type?.toUpperCase()}</p>
                                        <p>   {item?.name}   </p>
                                    </a>
                                </div>
                            </div>)}
                        </div>
                    </div>
                </div>

                <div className="text-indigo-900 space-y-4">
                    <h5 className="title-1 capitalize">Links related to {coin?.name}</h5>
                    {coin?.links && coin?.links?.map((item, i) => <div className="text-semibold animated hover:bg-indigo-400 px-5 rounded-xl space-y-4">
                        <div className="items-center py-4">
                            <a className=" flex justify-between " href={item?.url} rel="norefferer" target="_blank" >
                                <p classname="">{item?.type?.toUpperCase()}</p>
                                <p>   {item?.name}   </p>
                            </a>
                        </div>
                    </div>)}
                </div>
            </div>
        </section>
    )
}

export default coinIndex

export async function getStaticPaths() {
    const paths = data?.coins?.map(({ id }) => ({
        params: { id: id?.toString() }
    }))
    return { paths, fallback: "blocking" };
}
export async function getStaticProps({ params }) {
    const { id } = params
    console.log(id)

    return {
        props: {},
        revalidate: 100,
    }
}