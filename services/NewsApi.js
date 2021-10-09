import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


const newsHeaders = {
    'x-bingapis-sdk': 'true',
    'x-rapidapi-host': 'bing-news-search1.p.rapidapi.com',
    'x-rapidapi-key': '8abe8a3bbdmshf4402635301df39p15e16cjsn4f5ba442b5a6'
  }

const baseUrl = 'https://bing-news-search1.p.rapidapi.com'

const createRequest = (url) => { return { url, headers: newsHeaders } }

export const newsApi = createApi({
    reducerPath: "newsApi",
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
        getNews: builder.query({
            query: ({ newsCategory, count }) => createRequest(`/news/search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`)
        })
    })
})

// name same as the query function, redux-toolkit will make an nhook automatically
export const {
    useGetNewsQuery
} = newsApi