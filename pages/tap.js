import React, { useEffect, useRef, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { setCryptos } from "../app/features/cryptoSlice"
import { useGetCryptosQuery } from "../services/cryptoApi"
export default function HomePage() {
    const cryptos = useSelector(state => state.cryptos)
    const [coin, setCoin] = useState({})
    const { data, error, isLoading, endpointName } = useGetCryptosQuery()
    const dispatch = useDispatch()
    const ref = useRef('')
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(setCryptos(ref.current.value))
        console.log("updated!")
        // setCoin()

    }
    const [count, setCount] = useState(1)
    useEffect(() => { setCount(val => val + 1) }, [])
    return (
        <section className='mx-auto w-4/6 overflow-scroll h-screen m-5 text-black'>
            {count}
            <hr />
            <input type="text" placeholder="enter data" className="input-search" ref={ref} />
            <hr />  <p onClick={handleSubmit} className="border-4 m-2 hover:bg-black rounded-lg p-4">Update</p>
            <br />
            <br />
            {JSON.stringify(cryptos)}
        </section >
    )
}




export async function getStaticProps() {

    return {
        props: {},

    }
}