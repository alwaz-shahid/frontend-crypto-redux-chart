import React, { useEffect, useState } from "react"
import _ from "lodash";
import { useDispatch, useSelector } from "react-redux"
import { getCryptos, setCryptos } from "../app/features/cryptoSlice"
import { useGetCryptosQuery } from "../services/cryptoApi"
import Home from "../components/layout/Home";



export default function HomePage() {
  const { data, isLoading, isError } = useGetCryptosQuery()
  const cryptos = useSelector(state => state.cryptos)
  const dispatch = useDispatch()

  useEffect(() => {
    if (isError || _.isEqual(data?.data, cryptos)) {
      console.warn("error occured, data not up to date")
    }
    else {
      dispatch(setCryptos(data?.data))
      console.log("no error occured, data updated successfully!")
    }
  }, [cryptos, data, isLoading])
  return (
    <section className='container-page no-scrollbar mb-24'>
      {/* {JSON.stringify(cryptos)} */}
      <Home isLoading={isLoading} />
    </section>
  )
}




export async function getStaticProps() {

  return {
    props: {},
    revalidate: 100,
  }
}