import React, { useEffect, useState, useRef } from "react"
import _ from "lodash";
import { useDispatch, useSelector } from "react-redux"
import moment from 'moment'
import { useGetMarketsQuery } from '../../services/cryptoApi'
import { setMarket } from "../../app/features/marketSlice";
import LoadingSpinner from "../../components/loaders/LoadingSpinner";
import MarketInfo from "../../components/market/MarketInfo"
const marketsPage = () => {
    const { data, isLoading, isError, isFetching } = useGetMarketsQuery()
    const market = useSelector(state => state.market)
    const dispatch = useDispatch()

    useEffect(() => {
        if (isError || _.isEqual(data?.data, market)) {
            console.warn("error occured, data not up to date")
        }
        else {
            dispatch(setMarket(data?.data))
            console.log("no error occured, data updated successfully!")
        }
    }, [market, data, isLoading])
    if (isFetching || isLoading) return <LoadingSpinner />;
    return (
        <div className="container-page no-scrollbar">
            {/* data/timne"   {moment(1634302276000).format("DD MMM YYYY hh:mm a")} */}
            <div className="mx-auto flex justify-around items-start flex-wrap relative">
            <h6 className="title-1 pt-2">Crypto Markets</h6>
                {market?.data?.markets?.map((item, i) => <MarketInfo data={item} key={i} />)}
            </div>

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