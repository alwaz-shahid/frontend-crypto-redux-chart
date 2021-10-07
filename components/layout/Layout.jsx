import React from 'react'
import DashBoard from '../DashBoard'
import Footer from './Footer'
import Home from './Home'

const Layout = ({ children }) => {
    return (
        <section className="max-w-7xl min-h-screen mx-auto ">
            <section className="h-screen flex justify-between">
                <DashBoard />

                {children}
            </section>
                {/* <Footer /> */}

        </section>
    )
}

export default Layout
