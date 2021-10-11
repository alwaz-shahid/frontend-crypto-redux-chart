import React from 'react'
import { useGetCryptosQuery } from '../services/cryptoApi'

const tapIndex = () => {
    const { data } = useGetCryptosQuery()
    return (
        <div>
{JSON.stringify(data)}
        </div>
    )
}

export default tapIndex
