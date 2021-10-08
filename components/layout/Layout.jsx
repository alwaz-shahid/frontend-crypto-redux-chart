import React from 'react'
import Navbar from '../Navbar'
import Home from './Home'

const Layout = ({ children }) => {
    return (
        <section className="max-w-7xl min-h-screen mx-auto ">
            <section className="h-screen flex justify-between">
                <Navbar />

                {children}
            </section>
        </section>
    )
}

export default Layout
