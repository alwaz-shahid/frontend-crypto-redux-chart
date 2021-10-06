import React, { useState } from 'react'
import Switch from '../common/Switch'
import PortfolioLayout from './PortfolioLayout'

const PortfolioContainer = () => {
    const [tab, setTab] = useState(1)
    const handleTabClick = (val) => {
        setTab(val)
    }
    return (
        <div className="w-11/12 m-2 filter drop-shadow-md border-2 rounded-lg border-purple-500 mx-auto flex flex-col items-center h-screen">
            <div className="bg-indigo-500 flex items-center justify-evenly divide-x-2 divide-indigo-400">
                <p onClick={() => handleTabClick(1)} className="p-4 text-purple-900 hover:opacity-60 animated text-center active:text-black hover:text-white">Switch to 1</p>
                <p onClick={() => handleTabClick(2)} className="p-4 text-purple-900 hover:opacity-60 animated text-center active:text-black hover:text-white">Switch to 2</p>
                <p onClick={() => handleTabClick(3)} className="p-4 text-purple-900 hover:opacity-60 animated text-center active:text-black hover:text-white">Switch to 3</p>
                <p onClick={() => handleTabClick(4)} className="p-4 text-purple-900 hover:opacity-60 animated text-center active:text-black hover:text-white">Switch to 4</p>
            </div>
            <Switch test={tab}>
                <PortfolioLayout value={1}
                    title="Container #1" desc="this is another container 1. Lets check if I change" subTitle="Hey im 1 & a test container" />
                <PortfolioLayout value={2}
                    title="Container #2" desc="this is another container 2. Lets check if I change" subTitle="Hey im 1 & a test container" />
                <PortfolioLayout value={3}
                    title="Container #3" desc="this is another container 3. Lets check if I change" subTitle="Hey im 1 & a test container" />
                <PortfolioLayout value={4}
                    title="Container #4" desc="this is another container 4. Lets check if I change" subTitle="Hey im 1 & a test container" />
            </Switch>
        </div>
    )
}

export default PortfolioContainer
