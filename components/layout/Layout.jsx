import React from 'react'
import MobTitle from '../common/MobTitle'
import Navbar from '../Navbar'
import Home from './Home'

const Layout = ({ children }) => {
    return (
        <section className="max-w-7xl min-h-screen mx-auto relative">

            <MobTitle />
            <section className="h-screen flex lg:flex-row flex-col lg:justify-between">
                <Navbar />
                {children}
                <div className="h-20 mt-24 check min-w-full"></div>
            </section>
        </section>
    )
}

export default Layout
