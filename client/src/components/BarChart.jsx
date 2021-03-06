import React from 'react'
import { Line } from 'react-chartjs-2'
import "./BarChart.scss"

function BarChart({ data, label }) {

    if (!data && !label) {
        return <p>Loading...</p>
    }
    return (
        <div className="barchart">
            <span className="barchart__price">$USD</span>
        <div>
            <Line
                data={{
                    labels: label,
                    datasets: [{
                        label: "Price Action",
                        data: data,
                        backgroundColor: [
                            'rgba(255, 99, 132, 1)'
                        ],
                        fill: true
                    }]
                }}
                height={600}
                width={600}
                options={{
                    maintainAspectRatio: false,
                    responsive: true,
                }}
            />
            </div>
            </div>
    )
}

export default BarChart
