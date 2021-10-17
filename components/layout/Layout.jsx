import React from 'react'
import MobTitle from '../common/MobTitle'
import Navbar from '../Navbar'
import Home from './Home'

const Layout = ({ children }) => {
    return (
        <section className="max-w-7xl min-h-screen mx-auto relative">

            <MobTitle />
            <section className="h-screen flex justify-between mb-20">
                <Navbar />
                {children}
            </section>
        </section>
    )
}

export default Layout
