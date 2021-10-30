import React, { useState, useEffect } from 'react'
import LoadingBars from '../../components/loaders/LoadingBars'
import LoadingSpinner from '../../components/loaders/LoadingSpinner'
import NewsCard from '../../components/news/NewsCard'
import { useGetNewsQuery } from '../../services/NewsApi'

const newsIndex = () => {
    const { data, error, isLoading, isFetching } = useGetNewsQuery({ newsCategory: "Cryptocurrency", count: 100 })
    useEffect(() => { }, [data, isLoading])
    if (isFetching || isLoading) return <LoadingSpinner />
    return (
        <div className='container-page no-scrollbar pt-4 pb-24'>
            <section className="container-inner flex items-start justify-between flex-wrap space-y-4 overflow-hidden">
                {/* {JSON.stringify(data)} */}
                <h1 className="title-1 block min-w-full">Crypto Currency News</h1>
                {isLoading ? <LoadingBars /> :
                    data?.value?.map((news, i) =>
                        <NewsCard key={i} datePublished={news?.datePublished} title={news?.name}
                            urlPage={news?.url} imgUrl={news?.image?.thumbnail?.contentUrl} desc={news?.description} />)}

            </section>
        </div>
    )
}

export default newsIndex

export async function getStaticProps() {

    return {
        props: {},
        revalidate: 100,
    }
}