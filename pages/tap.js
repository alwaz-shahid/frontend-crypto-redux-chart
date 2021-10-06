import React, { useEffect } from "react"
import PortfolioContainer from "../components/Portfolio/PortfolioContainer"


export default function HomePage() {
    useEffect(() => { }, [])
    return (
        <section className='mx-auto h-screen m-5'>
            <h1 className="text-2xl text-center text-indigo-600 underline">Hey let's ttry this component out! </h1>
            <PortfolioContainer />


        </section>
    )
}




export async function getStaticProps() {

    return {
        props: {},
        revalidate: 1,
    }
}