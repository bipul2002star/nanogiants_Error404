import React, { useState, useEffect } from "react";
import './dashboard.css'
import axios from "axios";
import { Link } from "react-router-dom";
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';


const Schedule = () => {
    const [items, setItem] = useState([]);

    useEffect(() => {
        loadItems();
    }, []);

    const loadItems = async () => {
        const result = await axios.get("http://localhost:3003/items");
        setItem(result.data);
    };

    const deleteItem = async id => {
        await axios.delete(`http://localhost:3003/items/${id}`);
        loadItems();
    };

    return (
        <div className="container-fluid">
            <div className="py-2">
                <p className="display-2 py-6 text-center my-1"> Dashboard </p>

                <div className="apps-panel">
                    <div className="main">{items.map((item, index) => (
                        <div className="image" key={item.name} >
                            <img className="app-logo" src={item.logo} alt={item.name} />
                            <div className="overlay">
                                <div className="content">

                                    <button className="hover-button" title={item.name}> <Link to ="/platform"> Know More </Link></button>
                                    <Link to={`/items/edit/${item.id}`}>
                                        <EditIcon className="dashboard-icon" />
                                    </Link>

                                    <DeleteIcon className="dashboard-icon" onClick={() => deleteItem(item.id)} />
                                </div>
                            </div>

                        </div>
                    ))}</div>
                </div>
                <div className="text-center">
                    <button className="hover-button"> <Link to="/items/add">Add More Apps</Link></button>
                </div>















            </div>


        </div>
    );
};

export default Schedule;
