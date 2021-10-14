import React, { useEffect, useState } from "react"
import _ from "lodash";
import { useDispatch, useSelector } from "react-redux"
import { getCryptos, setCryptos } from "../../app/features/cryptoSlice"
import CurrencyContainer from "../../components/crypto/CurrencyContainer";


export default function ExchangePage() {
 
  const dispatch = useDispatch()
  return (
    <section className='min-h-screen w-full overflow-x-hidden overflow-y-scroll no-scrollbar'>
      <h1 className="title-1">Page under Development</h1>
     <CurrencyContainer/>
    </section>
  )
}




export async function getStaticProps() {

  return {
    props: {},
    revalidate: 1,
  }
}