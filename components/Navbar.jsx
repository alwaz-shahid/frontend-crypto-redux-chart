import React from 'react'
import NavSwitch from './common/NavSwitch'
const Navbar = () => {
    return (
        <nav className="min-w-[20%] shadow-2xl sticky min-h-screen inline-block checking  max-w-[20%] bg-indigo-600">
            <h1 className="logo">CrypExpo</h1>
            <NavSwitch />
        </nav>
    )
}

export default Navbar
