import React, { useEffect, useState } from "react"
import CurrencyContainer from "../../components/crypto/CurrencyContainer"



export default function HomePage() {

  return (
    <section className='container-page no-scrollbar  pb-24'>
      <CurrencyContainer />
    </section>
  )
}




export async function getStaticProps() {

  return {
    props: {},
    revalidate: 100,
  }
}