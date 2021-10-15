import moment from 'moment'
import React from 'react'
import { useGetMarketsQuery } from '../../services/cryptoApi'

const marketsPage = () => {
    const { data, isLoading, isError, isFetching }=useGetMarketsQuery()
    return (
        <div className="mx-auto text-black">
            data/timne"   {moment(1634302276000).format("DD MMM YYYY hh:mm a")}
          
        </div>
    )
}

export default marketsPage
export async function getStaticProps() {

    return {
        props: {},
        revalidate: 100,
    }
}