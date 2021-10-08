import React, { useEffect, useState } from "react"
import { useSelector } from "react-redux"

export default function HomePage() {
    const cryptos = useSelector(state => state.cryptos)
    const [coin, setCoin] = useState(cryptos?.cryptos?.data?.coins[1])
    useEffect(() => { }, [coin])
    return (
        <section className='mx-auto w-4/6 overflow-scroll h-screen m-5 text-black'>
            {Object.keys(coin).map(item => <span className="p-2">{item}</span>)}
{/* {JSON.stringify(coin?.socials)} */}
{JSON.stringify(coin?.name)}
{JSON.stringify(coin?.description)}
        </section>
    )
}




export async function getStaticProps() {

    return {
        props: {},
        revalidate: 1,
    }
}