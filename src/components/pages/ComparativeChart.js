import React from 'react'
import { Pie, Line, defaults } from 'react-chartjs-2'

const ComparativeChart = () => {
    return (
        <>
            <h1 className="mt-5">Comparative Analysis</h1>
            <div className="my-1 mb-5">
                <Pie
                    data={{
                        labels: ['1 Star', '2 Star', '3 Star', '4 Star', '5 Star'],
                        datasets: [
                            {
                                label: "App's (1-5) PlayStore Rating",
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
                            {
                                label: "App's (1-5)  Cumulative Rating",
                                data: [10323, 13423, 54423, 53434, 56342, 40423],
                                backgroundColor: 'orange',
                                borderColor: 'red',
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
            <div>
                <h1 className="mt-4">Cumulative Ratings</h1>
                <div>
                    <Line
                        data={{
                            labels: ['January', 'February', 'March', 'April', 'May', 'June'],
                            datasets: [
                                {
                                    label: "PlayStore Cumulative Rating",
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
                                {
                                    label: "AppleStore Cumulative Rating",
                                    data: [4.3, 4.7, 4.9, 4.8, 4.6, 4.9],
                                    backgroundColor: 'orange',
                                    borderColor: 'red',
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
            </div>
        </>
    )
}

export default ComparativeChart