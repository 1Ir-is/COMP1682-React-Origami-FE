import React, { useState } from "react";
import { userAPI } from "../api/api";
import { useHistory } from "react-router-dom";

const Login = ({ onLogin }) => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

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
    console.log(formData);
    try {
        // Assuming userAPI.login() returns a promise
        const response = await userAPI.loginUser({
            username: formData.username,
            password: formData.password,
        });
        console.log(response);
        // Login successful
        alert("Login successful!");
        onLogin(response.data); // Pass the user data to the parent component
        history.push("/"); // Replace '/' with the actual route to your home page
    } catch (error) {
        // Login failed
        console.error(error);
        alert("Login failed. Please try again.");
    }
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