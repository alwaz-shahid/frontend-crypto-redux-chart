import React, { useEffect } from 'react'
import { Line } from 'react-chartjs-2'
const CoinChart = ({ coinHistory, coinprice, coinName }) => {
    const coinPrice = [];
    const coinTimestamp = [];

    for (let i = 0; i < coinHistory?.data?.history?.length; i += 1) {
        coinPrice.push(coinHistory?.data?.history[i].price);
    }

    for (let i = 0; i < coinHistory?.data?.history?.length; i += 1) {
        coinTimestamp.push(new Date(coinHistory?.data?.history[i].timestamp).toLocaleDateString());
    }

    const data = {
        labels: coinTimestamp,
        datasets: [
            {
                label: 'Price In USD',
                data: coinPrice,
                fill: false,
                backgroundColor: '#0071bd',
                borderColor: '#7c3aed',
                pointBackgroundColor:"#f6fcde",
            },
        ],
    };

    const options = {
        scales: {
            yAxes: [
                {
                    ticks: {
                        beginAtZero: true,
                      
                    },
                },
            ],
        },
    };
    useEffect(() => { }, [coinHistory, coinName])
    return (
        <div className="space-y-4">

            <div className="text-indigo-800 text-xl">

                <p className="md:text-base text-sm"> Price Change: <span className="font-semibold">
                    {coinHistory?.data?.change}%
                </span></p>
                <p className="md:text-base text-sm">Coin Price: <span className="font-semibold">
                    ${coinprice}
                </span></p>

            </div>
            {/* {JSON.stringify(coinHistory)} */}
            <div className="">
                <Line data={data} options={options} />
            </div>
        </div>
    )
}

export default React.memo(CoinChart)
   // const timeOptions = [
    //     {
    //         value: "3h", label: "3 Hours",
    //     },
    //     {
    //         value: "24h", label: "24 Hours",
    //     },
    //     {

    //         value: "30d", label: "30 Days",
    //     },
    //     {
    //         value: "3m", label: "3 Months",
    //     },
    //     {
    //         value: "3y", label: "3 Years",
    //     },
    //     {
    //         value: "5y", label: "5 Years"
    //     },
    // ]