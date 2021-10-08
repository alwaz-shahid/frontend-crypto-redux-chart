import React, { useEffect, useState } from "react"
import _ from "lodash";
import { useDispatch, useSelector } from "react-redux"
import { getCryptos, setCryptos } from "../app/features/cryptoSlice"
import { useGetCryptosQuery } from "../services/cryptoApi"
import Home from "../components/layout/Home";


export default function HomePage() {
  const { data, error, isLoading, endpointName } = useGetCryptosQuery()
  const cryptos = useSelector(state => state.cryptos)
  return (
    <section className='min-h-screen w-full overflow-x-hidden overflow-y-scroll no-scrollbar'>
      <Home />
      {/* {JSON.stringify(cryptos?.cryptos?.data?.coins)} */}
    </section>
  )
}




export async function getStaticProps() {

  return {
    props: {},
    revalidate: 1,
  }
}