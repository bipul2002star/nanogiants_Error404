import React, { useState } from "react";
import axios from 'axios'
import { useHistory } from "react-router-dom";

const AddItem = () => {
  let history = useHistory();
  const [item, setItem] = useState({
    name: "",
    logo: "",
  });

  const { name, logo } = item;
  const onInputChangeItem = e => {
    setItem({ ...item, [e.target.name]: e.target.value });
  };

  const onSubmitItem = async e => {
    e.preventDefault();
    await axios.post("http://localhost:3003/items", item);
    history.push("/");
  };
  return (
    <div className="container my-4">
      <div className="w-75 mx-auto shadow p-5">
        <h2 className="text-center mb-4">Add An App</h2>
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
              placeholder="The Logo URL"
              name="logo"
              value={logo}
              onChange={e => onInputChangeItem(e)}
            />
          </div>
          
          <button className="btn btn-primary btn-block">Add App</button>
        </form>
      </div>
    </div>
  );
};

export default AddItem;
