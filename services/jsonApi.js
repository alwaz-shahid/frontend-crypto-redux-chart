// https://jsonplaceholder.typicode.com/posts
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
const jsonApiHeaders = {
    'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
    'x-rapidapi-key': '8abe8a3bbdmshf4402635301df39p15e16cjsn4f5ba442b5a6'
}

const baseUrl = 'https://jsonplaceholder.typicode.com'

// const createRequest = (url) => { return { url, headers: jsonApiHeaders } }

export const jsonApi = createApi({
    reducerPath: "users",
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
        getUsers: builder.query({
            query: () => '/users',
        }),
        getUser: builder.query({
            query: (id) => `/users/${id}`
        })
    })
})

// name same as the query function, redux-toolkit will make an nhook automatically
export const {
    useGetUsersQuery, 
    useGetUserQuery
} = jsonApi