import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'



const apiHeaders = {
    'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
    'x-rapidapi-key': '8abe8a3bbdmshf4402635301df39p15e16cjsn4f5ba442b5a6'
}

// const baseUrl = 'https://api.coinranking.com/v2/coins?x-access-token=coinrankingcbb87cbcb27f241c9f52137e9413aa4c2d567bfd50d57a0b'
// const baseUrl = 'https://api.coinranking.com/v2'
const baseUrl = 'https://coinranking1.p.rapidapi.com'

const createRequest = (url) => { return { url, headers: apiHeaders } }

export const cryptoApi = createApi({
    reducerPath: "cryptoApi",
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
        getCryptos: builder.query({
            query: () => createRequest("/coins")
        }),
        getCrypto: builder.query({
            query: (coinID) => createRequest(`/coin/${coinID}`)
        }),
        getCryptoHistory: builder.query({
            query: ({ coinId, timePeriod }) => createRequest(`coin/${coinId}/history/${timePeriod}`),
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
    useGetCryptosQuery, useGetExchangesQuery, useGetCryptoQuery, useGetCryptoHistoryQuery
} = cryptoApi