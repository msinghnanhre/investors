import React from 'react'
import {PolarArea} from "react-chartjs-2"

function PolarAreaChart({publicInterest, sentimentUp, sentimentDown, score}) {
    return (
        <>
            <div>
                <PolarArea
                    data={{
                        labels: ["up", "down", "CoinGecko Score", "Interest"],
                        datasets: [{
                            data: [sentimentUp, sentimentDown, score, publicInterest],
                            backgroundColor: [
                                'rgb(33, 191, 115)',
                                'rgb(253, 94, 83)',
                                'rgb(255, 210, 113)',
                                'rgb(57, 162, 219)'
                            ],
                            fill: true
                        }]
                    }}
                    height={600}
                    width={600}
                    options={{
                        maintainAspectRatio: false,
                        responsive: true,
                        plugins: {
                            legend: {
                                position: 'top',
                            },
                            title: {
                                display: true,
                                text: 'Social Sentiment Percentage Change'
                            }
                        }
                    }}
                />
            </div>
        </>
    )
}

export default PolarAreaChart
