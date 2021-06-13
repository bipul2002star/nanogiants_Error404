import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

const Item = () => {
  const [item, setItem] = useState({
    name: "",
    logo: ""
  });
  const { id } = useParams();
  useEffect(() => {
    loadItem();
  }, []);
  const loadItem = async () => {
    const res = await axios.get(`http://localhost:3003/items/${id}`);
    setItem(res.data);
  };
  return (
    <div className="container py-4">
      <h1 className="display-4">App Id: {id}</h1>
      <hr />
      <ul className="list-group w-50">
        <li className="list-group-item"><strong> The Name of the App </strong>{item.name}</li>
        <li className="list-group-item"><strong>The URL of the app:</strong>{item.logo}</li>
      </ul>
    </div>
  );
};

export default Item;
