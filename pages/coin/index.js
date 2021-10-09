import React, { useState, useEffect } from 'react'
import CurrencyContainer from '../../components/crypto/CurrencyContainer'
import { useGetCryptosQuery } from '../../services/cryptoApi'



const coinIndex = () => {
    const { data, error, isLoading, endpointName } = useGetCryptosQuery()
    const [coin, setCoin] = useState(data?.data?.coins[0])
    useEffect(() => { }, [data, coin,isLoading])
    return (
        <div className='container-page no-scrollbar'>
            {coin && <section className="container-innder flex flex-wrap">
                {Object.keys(coin).map((item)=><span className="text-black p-2">{item}</span>)}
                {/* {JSON.stringify(data)} */}
            </section>}
        </div>
    )
}

export default coinIndex
export async function getStaticProps() {

    return {
        props: {},
        revalidate: 100,
    }
}