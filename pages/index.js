import React, { useEffect, useState } from "react"
import { useGetCryptosQuery } from "../services/cryptoApi"
import Home from "../components/layout/Home";



export default function HomePage() {
  const { data, error, isLoading, endpointName } = useGetCryptosQuery()
  useEffect(() => {}, [data])
  return (
    <section className='container-page no-scrollbar'>
      <Home />
    </section>
  )
}




export async function getStaticProps() {

  return {
    props: {},
    revalidate: 100,
  }
}