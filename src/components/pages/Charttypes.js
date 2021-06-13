import React from 'react';
import "./charttypes.css";
import { Link } from 'react-router-dom';

const Charttypes = () => {
    return (
        <div className="charts-panel">
            <div className="text-center display-2 dark">Get Analysis</div>
            <div className="main_panel">
                <div className="image" >
                    <h1>Get Your Apps Cumulative Rating for 6 Months</h1>
                    <div className="overlay">
                        <div className="content">
                            <button className="hover-button" > <Link to="/chart"> Click Here </Link></button>

                        </div>
                    </div>

                </div>
                <div className="image" >
                    <h1>Analyse the proportion of Ratings(1 - 5) for your App</h1>
                    <div className="overlay">
                        <div className="content">
                            <button className="hover-button" > <Link to="/pie"> Click Here </Link></button>

                        </div>
                    </div>

                </div>
                <div className="image" >
                    <h1>Analyse the cumulative rating  across different platforms</h1>
                    <div className="overlay">
                        <div className="content">
                            <button className="hover-button" > <Link to="/comparison"> Click Here </Link></button>

                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Charttypes
