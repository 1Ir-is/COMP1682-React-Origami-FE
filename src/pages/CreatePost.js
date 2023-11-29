import React, { useState } from "react";
import { origamiAPI } from "../api/api";

const CreatePost = () => {
  const [description, setDescription] = useState("");
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setDescription(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Assuming origamiAPI.createOrigami() returns a promise
      await origamiAPI.createOrigami({ description });

      // Post creation successful
      setMessage("Post created successfully");
      setDescription(""); // Clear the description field after successful submission
    } catch (error) {
      // Post creation failed
      setMessage("Failed to create post. Please try again.");
    }
  };

  return (
    <div className="container">
      <h2 className="text-center">Create a New Post</h2>
      {message && (
        <div
          className={
            message.includes("Failed")
              ? "alert alert-danger"
              : "alert alert-success"
          }
        >
          {message}
        </div>
      )}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="description">Description:</label>
          <textarea
            name="description"
            value={description}
            onChange={handleChange}
            className="form-control"
            rows="4"
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Create Post
        </button>
      </form>
    </div>
  );
};

export default CreatePost;