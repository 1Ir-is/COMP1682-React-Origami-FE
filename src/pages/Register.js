import React, { useState } from "react";
import { userAPI } from "../api/api";

const Register = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    rePassword: "",
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const postData = async () => {
    try {
      // Make a POST request to the API endpoint
      const response = await userAPI.registerUser({
        username: formData.username,
        password: formData.password,
      });
      setMessage("");
    } catch (error) {
      // Handle errors
      console.error("Error sending data to the API:", error);
      setMessage("Error sending data to the API");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validation: Check if password and re-password match
    if (formData.password !== formData.rePassword) {
      setMessage("Passwords do not match");
    } else {
      // Passwords match, send data to the API
      await postData();
    }
  };

  return (
    <div className="container">
      <h2 className="text-center">Register</h2>
      {message && <div className="alert alert-danger">{message}</div>}
      <form onSubmit={handleSubmit}>
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
        <div className="form-group">
          <label htmlFor="rePassword">Re-enter Password:</label>
          <input
            type="password"
            name="rePassword"
            value={formData.rePassword}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>
        <button type="submit" className="btn btn-primary btn-block">
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;