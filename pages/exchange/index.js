import React, { useEffect, useState, useRef } from "react"
import _ from "lodash";
import { useDispatch, useSelector } from "react-redux"
import { setExchanges } from "../../app/features/exchangeSlice"
import CurrencyContainer from "../../components/crypto/CurrencyContainer";
import { useGetExchangesQuery } from "../../services/cryptoApi";


export default function ExchangePage() {
  const { data, isLoading, isError } = useGetExchangesQuery()
  const exchanges = useSelector(state => state.exchange)
  const dispatch = useDispatch()

  const ref = useRef()
  const refNode = ref.current
  useEffect(() => {
    if (isError || _.isEqual(data?.data, exchanges)) {
      console.warn("error occured, data not up to date")
    }
    else {
      dispatch(setExchanges(data?.data))
      console.log("no error occured, data updated successfully!")
    }
  }, [exchanges, data, isLoading])

  const handleClick = () => {
    refNode.classList.remove('text-indigo-800')
    refNode.classList.add('text-black')
    alert(refNode.classList)
  }

  return (
    <section className='min-h-screen w-full overflow-x-hidden overflow-y-scroll no-scrollbar'>
      <div ref={ref} className="text-indigo-800 border-2 text-center font-semibold">
        ref div rtest
        <p onClick={handleClick}>click me</p>
      </div>
    </section>
  )
}




export async function getStaticProps() {

  return {
    props: {},
    revalidate: 1,
  }
}