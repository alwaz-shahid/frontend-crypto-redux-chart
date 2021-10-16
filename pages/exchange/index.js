import React, { useEffect, useState, useRef } from "react"
import _ from "lodash";
import { useDispatch, useSelector } from "react-redux"
import { setExchanges } from "../../app/features/exchangeSlice"
import CurrencyContainer from "../../components/crypto/CurrencyContainer";
import { useGetExchangesQuery } from "../../services/cryptoApi";
import Exchange from "../../components/layout/Exchange";


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
    refNode.classList.remove('scale-0')
    refNode.classList.add('scale-100')
  }
  const handleClickTwo = () => {
    refNode.classList.remove('scale-100')
    refNode.classList.add('scale-0')
  }

  return (
    <section className='min-h-screen w-full overflow-x-hidden overflow-y-scroll no-scrollbar'>
      <div className="text-indigo-800 border-2 text-center font-semibold">
        ref div rtest
        <p onClick={handleClick}>click me</p>
        <p onClick={handleClickTwo}>click me</p>
        <div ref={ref} className="animated scale-0 bg-red-400" >
          <h1 className="title-1">this is a modal</h1></div>
          <Exchange/>
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