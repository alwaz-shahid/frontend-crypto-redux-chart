import React, { useEffect, useRef, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { setCryptos } from "../app/features/cryptoSlice"
import { useGetCryptosQuery } from "../services/cryptoApi"
import _ from "lodash";
import { getObjectDiff } from "../utils/helpers/getObjectDiff";

export default function HomePage() {
    const cryptos = useSelector(state => state.cryptos)
    const { data, error, isLoading, endpointName } = useGetCryptosQuery()
    const dispatch = useDispatch()
    const ref = useRef('')
    const isDiff = React.useCallback(() => { getObjectDiff(data?.data, cryptos) }, [])
    const handleSubmit = (e) => {
        e.preventDefault();

        console.log("updated!")
        if (!_.isEqual(data?.data, cryptos)) {
            console.log("not equal")
            console.log(isDiff)
            dispatch(setCryptos(data?.data))
        }
    }
    useEffect(() => { }, [cryptos, isLoading])
    return (
        <section className='mx-auto w-4/6 overflow-scroll h-screen m-5 text-black'>

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