import React from 'react'
import { Line, defaults } from 'react-chartjs-2'


const Chart = () => {
    return (
        <>
        <h1 className="mt-5">App's Cumulative Rating</h1>
        <div className= "my-1">
            <Line
                data={{
                    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
                    datasets: [
                        {
                            label: 'Cumulative  Rating',
                            data: [3.8, 3.7, 3.9, 3.8, 3.6, 3.9],
                            backgroundColor: [
                                'rgba(255, 99, 132, 0.2)',
                                'rgba(54, 162, 235, 0.2)',
                                'rgba(255, 206, 86, 0.2)',
                                'rgba(75, 192, 192, 0.2)',
                                'rgba(153, 102, 255, 0.2)',
                                'rgba(255, 159, 64, 0.2)',
                            ],
                            borderColor: [
                                'rgba(255, 99, 132, 1)',
                                'rgba(54, 162, 235, 1)',
                                'rgba(255, 206, 86, 1)',
                                'rgba(75, 192, 192, 1)',
                                'rgba(153, 102, 255, 1)',
                                'rgba(255, 159, 64, 1)',
                            ],
                            borderWidth: 1,
                        },
                    ],
                }}
                height={500}
                width={600}
                options={{
                    maintainAspectRatio: false,
                    scales: {
                        yAxes: [
                            {
                                ticks: {
                                    beginAtZero: true,
                                },
                            },
                        ],
                    },
                    legend: {
                        labels: {
                            fontSize: 25,
                        },
                    },
                }}
            />
        </div>
        </>
    )
}

export default Chart