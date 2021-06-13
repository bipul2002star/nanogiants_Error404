import React from 'react';
import { Link } from "react-router-dom";

import './platformdetail.css';

const platformDetail = () => {
    return (

        <div className="apps-panel">
            <div className="text-center display-2 dark">Choose Your Platform</div>
            <div className="main_panel">
                <div className="image" >
                    <img className="app-logo" src="data:image/png;base64,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" alt="Play Store" />
                    <div className="overlay">
                        <div className="content">
                            <button className="hover-button" > <Link to="/detail"> Click Here </Link></button>

                        </div>
                    </div>

                </div>
                <div className="image" >
                    <img className="app-logo" src="data:image/jpeg;base64,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" alt="App Store" />
                    <div className="overlay">
                        <div className="content">
                            <button className="hover-button" > <Link to="/detail"> Click Here </Link></button>

                        </div>
                    </div>

                </div>
                <div className="image" >
                    <img className="app-logo" src="data:image/jpeg;base64,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" alt="Survey" />
                    <div className="overlay">
                        <div className="content">
                            <button className="hover-button" > <Link to="/detail"> Click Here </Link></button>

                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default platformDetail