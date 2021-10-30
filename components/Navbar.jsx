import React from 'react'
import NavSwitch from './common/NavSwitch'
import Link from "next/link"
const Navbar = () => {
    return (
        <nav className="lg:min-w-[20%] min-w-full shadow-2xl fixed overflow-hidden
         bottom-0 z-10 lg:sticky h-12 lg:min-h-screen max-w-[20%] bg-indigo-600">
            <Link href="/"><h1 className="logo hidden lg:block">CrypExpo</h1></Link>
            <NavSwitch />
    
        </nav>
    )
}

export default React.memo(Navbar)
