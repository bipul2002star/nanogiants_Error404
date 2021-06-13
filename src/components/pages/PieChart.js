import React from 'react'
import { Pie, defaults } from 'react-chartjs-2'

const PieChart = () => {
    return (
        <>
            <h1 className="mt-5">App's (1-5)  Rating</h1>
            <div className="my-1">
                <Pie
                    data={{
                        labels: ['1 Star', '2 Star', '3 Star', '4 Star', '5 Star'],
                        datasets: [
                            {
                                label: "App's (1-5)  Rating",
                                data: [100012, 20021, 31231, 137321, 100003,],
                                backgroundColor: [
                                    'rgba(255, 99, 132, 0.2)',
                                    'rgba(54, 162, 235, 0.2)',
                                    'rgba(255, 206, 86, 0.2)',
                                    'rgba(75, 192, 192, 0.2)',
                                    'rgba(153, 102, 255, 0.2)',
                                ],
                                borderColor: [
                                    'rgba(255, 99, 132, 1)',
                                    'rgba(54, 162, 235, 1)',
                                    'rgba(255, 206, 86, 1)',
                                    'rgba(75, 192, 192, 1)',
                                    'rgba(153, 102, 255, 1)',
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

export default PieChart
