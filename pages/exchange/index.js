import React, { useEffect, useState, useRef } from "react"
import _ from "lodash";
import { useDispatch, useSelector } from "react-redux"
import { setExchanges } from "../../app/features/exchangeSlice"
import { useGetExchangesQuery } from "../../services/cryptoApi";
import Exchange from "../../components/layout/Exchange";
import LoadingSpinner from "../../components/loaders/LoadingSpinner";


export default function ExchangePage() {
  const { data, isLoading, isFetching,isError } = useGetExchangesQuery()
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
  if (isFetching || isLoading) return <LoadingSpinner/>;
  return (
    <section className='container-page no-scrollbar pb-24'>
    
      <Exchange />
    </section>
  )
}




export async function getStaticProps() {

  return {
    props: {},
    revalidate: 1,
  }
}