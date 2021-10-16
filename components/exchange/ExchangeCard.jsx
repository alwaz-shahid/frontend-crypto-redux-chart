import React, { useRef, useState } from 'react'
import Image from "next/image"
import Modal from '../common/Modal'
import millify from 'millify'
import parseTimeDate from '../../utils/parseTimeDate'
const ExchangeCard = ({ data }) => {
    const [isOpen, setIsOpen] = useState(false)
    const ref = useRef()
    const refNode = ref.current
    const handleClick = () => {
        if (!isOpen) {
            refNode?.classList.remove('scale-0')
            refNode?.classList.add('scale-100')
            setIsOpen(!isOpen)
        }
        else if (isOpen) {
            refNode?.classList.remove('scale-100')
            refNode?.classList.add('scale-0')
            setIsOpen(!isOpen)
        }
        // alert(!isOpen + refNode.classList)
    }

    return (
        <div className="lg:w-2/5 sm:w-[47%] w-11/12 rounded-xl bg-indigo-500 text-indigo-900 p-3 m-5 shadow-lg animated hover:translate-y-1">
            <div className="flex justify-between items-center">

                <p className="text-xl font-semibold text-white">
                    <span className="font-semibold text-base text-indigo-900">{data?.rank}. </span>
                    {data?.name}</p>
                <Image height={30} width={30} src={data?.iconUrl}
                    className="rounded-3xl bg-cover" />
            </div>
            <div className="divide-y-2 divide-indigo-800 animated py-2">
                <p className="coin-info flex justify-between items-center p-2 text-white"><span className="coin-info-title ">Number Of Markets: </span>
                    {millify(data?.numberOfMarkets)}</p>
                <p className="coin-info flex justify-between items-center p-2 text-white"><span className="coin-info-title ">Market Share: </span>
                    {millify(data?.marketShare)}%</p>
                <p className="coin-info flex justify-between items-center p-2 text-white"><span className="coin-info-title ">Volume: </span>
                    ${millify(data?.volume)}</p>
                <p className="coin-info flex justify-between items-center p-2 text-white"><span className="coin-info-title ">Last Ticker Created At: </span>
                    {data?.lastTickerCreatedAt && parseTimeDate(data?.lastTickerCreatedAt)}</p>
                <p className="coin-info flex justify-between items-center p-2 text-white"><span className="coin-info-title ">Verified: </span>
                    {data?.verified ? "Yes" : "no"}</p>

            </div>
            {/* <p onClick={handleClick} className="p-2 text-center font-bold animated hover:opacity-80 hover:underline hover:cursor-pointer">Read more about {data?.name}</p> */}
            {/* <div ref={ref} className="animated scale-0 top-0 w-[60vw] absolute z-30">
                <Modal>
                    <p className="title-1 mx-auto">I'm a paragraph3</p>
                </Modal>
            </div> */}
        </div>
    )
}

export default ExchangeCard

{/* <p className="title-1 mx-auto">I'm a paragraph</p>
<button className="p-5 border-2" onClick={handleClick} >Click!</button>
<div ref={ref} className="animated scale-0 h-52 min-w-full bg-blue-600">
    <Modal>
        <p className="title-1 mx-auto">I'm a paragraph3</p>
    </Modal>
</div> */}