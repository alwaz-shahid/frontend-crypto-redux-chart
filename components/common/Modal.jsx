import React,{useRef} from 'react'

const Modal = ({ children }) => {
    
    return (
        <div className="w-1/2 h-[70vh] bg-indigo-50 mx-auto overflow-y-scroll no-scrollbar overflow-x-hidden ">
            {children}
        </div>
    )
}

export default Modal
