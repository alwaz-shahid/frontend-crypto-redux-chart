import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


const cryptoApiHeaders = {
    'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
    'x-rapidapi-key': '8abe8a3bbdmshf4402635301df39p15e16cjsn4f5ba442b5a6'
}

const baseUrl = 'https://coinranking1.p.rapidapi.com'

const createRequest = (url) => { return { url, headers: cryptoApiHeaders } }

export const cryptoApi = createApi({
    reducerPath: "cryptoApi",
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
        getCryptos: builder.query({
            query: () => createRequest("/coins")
        }),
        getExchanges: builder.query({
            query: () => createRequest("/exchanges")
        }),
        getMarkets: builder.query({
            query: () => createRequest("/markets")
        }),
        getExchanges: builder.query({
            query: () => createRequest("/exchanges")
        })
    })
})

// name same as the query function, redux-toolkit will make an nhook automatically
export const {
    useGetCryptosQuery, useGetExchangesQuery
} = cryptoApi