import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory, useParams } from "react-router-dom";

const EditItem = () => {
  let history = useHistory();
  const { id } = useParams();
  const [item, setItem] = useState({
    name: "",
    logo: ""
  });

  const { name, logo } = item;
  const onInputChangeItem = e => {
    setItem({ ...item, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    loadItem();
  }, []);

  const onSubmitItem = async e => {
    e.preventDefault();
    await axios.post("http://localhost:3003/items", item);
    history.push("/");
  };

  const loadItem = async () => {
    const result = await axios.get(`http://localhost:3003/items/${id}`);
    setItem(result.data);
  };
  return (
    <div className="container">
      <div className="w-75 mx-auto shadow p-5">
        <h2 className="text-center mb-4">Edit An App</h2>
        <form onSubmit={e => onSubmitItem(e)}>
          <div className="form-group">
          <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter the name of the app"
              name="name"
              value={name}
              onChange={e => onInputChangeItem(e)}
            />
          </div>
          <div className="form-group">
          <input
              type="text"
              className="form-control form-control-lg"
              placeholder="The URL for the logo"
              name="logo"
              value={logo}
              onChange={e => onInputChangeItem(e)}
            />
          </div>
          <button className="btn btn-warning btn-block">Update App</button>
        </form>
      </div>
    </div>
  );
};

export default EditItem;
