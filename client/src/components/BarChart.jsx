import React from 'react'
import {Line} from 'react-chartjs-2'

function BarChart() {
    return (
        <>
        <div>
            <Line
                data={{
                    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
                    datasets: [{
                        label: "# of votes",
                        data: [12, 10, 3, 5, 2, 3],
                        backgroundColor: [
                            'rgba(255, 99, 132, 1)',
                            'rgba(54, 162, 235, 1)',
                            'rgba(255, 206, 86, 1)',
                            'rgba(75, 192, 192, 1)',
                            'rgba(153, 102, 255, 1)',
                            'rgba(255, 159, 64, 1)'
                        ],
                    }]
                }}
                height={400}
                width={600}
                options={{
                    maintainAspectRatio: false
                }}
            />
        
            </div>
            </>
    )
}

export default BarChart
