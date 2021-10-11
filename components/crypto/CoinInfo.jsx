import React from 'react'

const CoinInfo = () => {
    return (
        <div className="rounded-xl bg-indigo-500 p-3 flex flex-col justify-start items-center h-auto w-2/5 m-4">
            <div className="">
                <h4 className="">{title}</h4>
                <p className="">{info}</p>
            </div>
            {data?.map((item, i) => <div className="">
                <div className="">
                    <span className="">{item?.icon}</span>
                    <p className="">{item?.title}</p>
                </div>
                <p className="">{item?.value}</p>
            </div>)}
        </div>
    )
}

export default CoinInfo
