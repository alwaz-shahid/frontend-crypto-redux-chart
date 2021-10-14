import React, { useEffect, useState } from "react"
import _ from "lodash";
import { useDispatch, useSelector } from "react-redux"
import { getCryptos, setCryptos } from "../app/features/cryptoSlice"
import { useGetCryptosQuery } from "../services/cryptoApi"
import Home from "../components/layout/Home";
import { getObjectDiff } from "../utils/helpers/getObjectDiff";


export default function HomePage() {
  const { data, isLoading } = useGetCryptosQuery()
  const cryptos = useSelector(state => state.cryptos)
  const dispatch = useDispatch()

  useEffect(() => {
    if (!_.isEqual(data?.data, cryptos)) {
      dispatch(setCryptos(data?.data))
    }
  }, [cryptos, data,isLoading])
  return (
    <section className='container-page no-scrollbar'>
      {/* {JSON.stringify(data)} */}
      <Home />
    </section>
  )
}




export async function getStaticProps() {

  return {
    props: {},
    revalidate: 1,
  }
}