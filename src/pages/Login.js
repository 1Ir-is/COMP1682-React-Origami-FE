import React, { useContext, useEffect, useState } from "react";
import { origamiAPI, userAPI } from "../api/api";
import { useHistory } from "react-router-dom";
import OrigamiContext from "../context/origamiContext";

const Login = () => {
  const origamiContext = useContext(OrigamiContext);
  const {loginUser} = origamiContext;
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  useEffect(async() => {
    const response = await origamiAPI.getMyOrigami();
    console.log(response);
  },[])


  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const history = useHistory();

const handleLogin = async (e) => {
    e.preventDefault();
    loginUser(formData);
    history.push("/"); // Replace '/' with the actual route to your home page
};

  return (
    <div className="container">
      <h2 className="text-center">Login</h2>
      {message && (
        <div
          className={
            message.includes("failed")
              ? "alert alert-danger"
              : "alert alert-success"
          }
        >
          {message}
        </div>
      )}
      <form onSubmit={handleLogin}>
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>
        <button type="submit" className="btn btn-primary btn-block">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;