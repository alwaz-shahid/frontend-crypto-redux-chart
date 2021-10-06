import React from "react"
import { useGetCryptosQuery } from "../services/cryptoApi"
import { jsonApi, useGetUsersQuery } from "../services/jsonApi"
import { useGetPokemonByNameQuery } from "../services/pokemon"



export default function HomePage() {
  const { data, isFetching, error, isLoading, endpointName } = useGetCryptosQuery()
  // const { data, isFetching, error, isLoading, endpointName } = useGetUsersQuery()
  // const { data, error, isLoading, endpointName, isFetching } = useGetPokemonByNameQuery('bulbasaur')
  return (
    <section className='h-screen'>
      {/* {error ?
        (<>Oh no, there was an error</>) : isLoading ?
          (<>Loading...</>) : user ?
            (<>
              <h3 className="bg-red-400">{user.species.name}</h3>
              <img src={user.sprites.front_shiny} alt={user.species.name} />
            </>) :
            null} */}
      {/* {error ?
        (<>Oh no, there was an error --
        {error.message}
        </>) : isLoading ?
          (<>Loading...</>) : data ?
            (
              data?.map(({ name, id, email }, i) => <>
                <h1 className="p-2">{name}</h1>
                <p className="p-2">{email}</p>
                <hr/>
              </>)
            ) :
            null} */}
{JSON.stringify(error?.message)}
{JSON.stringify(data)}
    </section>
  )
}




export async function getStaticProps() {

  return {
    props: {},
    revalidate: 1,
  }
}