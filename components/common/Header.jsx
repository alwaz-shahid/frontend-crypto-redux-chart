import React from 'react'
import Head from "next/head"
function Header({title="Next Cryptocurrency App - Redux-toolkit"}) {
    return (
        <Head>
            <title>{title}</title>
            <link rel="icon" href="/favicon.ico" />
            <meta property="og:title" content="My page title" key="title" />
        </Head>
    )
}

export default Header
