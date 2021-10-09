import React, { useEffect } from 'react'
import Image from "next/image"
import moment from 'moment'

const NewsCard = ({ title, urlPage, imgUrl, desc, datePublished }) => {
    useEffect(() => { }, [imgUrl, title])
    const parseDate = (enterDate) => {
        const formatted = moment(enterDate).startOf("ss").fromNow()
        // const formatted = moment(enterDate).format('MMMM DD, YYYY')
        return formatted
    }
    return (
        <a href={urlPage} rel="noreferrer" target="_blank">
            <div className="animated news-card  flex items-start justify-start overflow-hidden">

                <div className="p-4 w-full space-y-2 h-full flex flex-col justify-around items-start overflow-hidden">
                    <h3 className="text-indigo-900 flex items-center justify-between w-full">
                        <p className="underline text-xl"> {title}  </p>
                        <span><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg></span></h3>
                    <p className=" text-indigo-800 flex flex-1">Description: {desc}...</p>
                    <span className="text-xs text-purple-100 place-self-end">{parseDate(datePublished)}</span>
                </div>
            </div>
        </a>
    )
}

export default NewsCard
