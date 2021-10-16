import React, { useRef, useState } from 'react'
import Image from "next/image"
import Modal from '../common/Modal'

const ExchangeCard = ({ data }) => {
    const [isOpen, setIsOpen] = useState(false)
    const ref = useRef()
    const refNode = ref.current
    const handleClick = () => {
        if (!isOpen) {
            refNode.classList.remove('scale-0')
            refNode.classList.add('scale-100')
            setIsOpen(!isOpen)
        }
        else if (isOpen) {
            refNode.classList.remove('scale-100')
            refNode.classList.add('scale-0')
            setIsOpen(!isOpen)
        }
        alert(!isOpen + refNode.classList)

    }

    return (
        <div>
            <p className="title-1 mx-auto">I'm a paragraph</p>
            <button className="p-5 border-2" onClick={handleClick} >Click!</button>
            <div ref={ref} className="animated scale-0 h-52 min-w-full bg-blue-600">
                <Modal>
                    <p className="title-1 mx-auto">I'm a paragraph3</p>
                </Modal>
            </div>
        </div>
    )
}

export default ExchangeCard
