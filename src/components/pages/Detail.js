import React from 'react';
import './detail.css'
import data from "../../data/google_play_rating.json"
import { NavLink } from "react-router-dom";

const Detail = () => {
    return (
        <div>
            <div className="container">
                <div className="py-4">
                    <p className="display-2 py-6 text-center my-6 dark"> Detailed Ratings </p>
                    <div className="btn-group">
                        <button type="button" className="btn btn-info"> <NavLink to ="/charttypes"> Chart View </NavLink></button>
                        <button className="btn btn-secondary btn-lg dropdown-toggle mx-4" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Sort
                        </button>
                        <ul class="dropdown-menu">
                            <li>Date(Ascending)</li>
                            <li>Date(Descending)</li>
                            <li>Date(Descending)</li>
                            <li>Date(Descending)</li>
                            <li>Date(Descending)</li>
                            <li>Date(Descending)</li>
                            <li>Date(Descending)</li>
                            <li>Date(Descending)</li>
                        </ul>
                    </div>
                    <table class="table table-striped border shadow">
                        <thead class="table-dark">
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">User Name</th>
                                <th scope="col">Content</th>
                                <th scope="col">Score</th>
                                <th scope="col">Thums Up Count</th>
                                <th scope="col">Created At</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((item, index) => (
                                <tr>
                                    <th scope="row">{index + 1}</th>
                                    <td>{item.userName}</td>
                                    <td>{item.content}</td>
                                    <td>{item.score}</td>
                                    <td>{item.thumbsUpCount}</td>
                                    <td>{item.at}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Detail
