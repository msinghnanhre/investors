import React from 'react'
import { Doughnut } from "react-chartjs-2"
import Dashboard from "../Dashboard/Dashboard"
import "./DoughnutChart.scss"


function DoughnutChart({ chartData }) {
    let currentValue = 0;
    let prevValue = 0;
    
    const labels = () => {
        return chartData.map(item => {
            return item.id
        })
    }
    const values = () => {
        return chartData.map(item => {
            return item.current_price*item.valueInAsset
        })
    }
    
    console.log(chartData)

    return (
        <div className="doughnutChart">
            <Dashboard userData={chartData}/>
            <div className="doughnutChart__chart">
                <Doughnut
                    data={{
                        labels: labels(),
                        datasets: [{
                            data: values(),
                            backgroundColor: [
                                'rgba(255, 99, 132, 1)',
                                'rgba(54, 162, 235, 1)',
                                'rgba(255, 206, 86, 1)',
                                'rgba(75, 192, 192, 1)',
                                'rgba(153, 102, 255, 1)',
                                'rgba(255, 159, 64, 1)',
                                'rgba(134, 172, 62, 1)',
                                'rgba(255, 150, 86, 1)',
                                'rgba(75, 192, 192, 1)',
                                'rgba(153, 102, 255, 1)',
                                'rgba(255, 159, 64, 1)'
                            ],
                        }]
                    }}
                    height={300}
                    width={250}
                    options={{
                        maintainAspectRatio: true
                    }}
                />
            </div>
        </div>
    )
}

export default DoughnutChart