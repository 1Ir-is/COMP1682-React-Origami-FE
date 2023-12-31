import React, { useState } from "react";
import { origamiAPI } from "../api/api";
import { useHistory } from "react-router-dom";

const CreatePost = () => {
  const [description, setDescription] = useState("");
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setDescription(e.target.value);
  };

  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Assuming origamiAPI.createOrigami() returns a promise
      await origamiAPI.createOrigami({ description });

      // Post creation successful
      alert("Post created successfully");
      setDescription(""); // Clear the description field after successful submission
      history.push("/"); // Replace '/' with the actual route to your home page  
    } catch (error) {
      // Post creation failed
      alert("Failed to create post. Please try again.");
    }
  };

  return (
    <div className="container">
      <div className="my-2">
        <h2 className="text-dark text-center">Create a New Post</h2>
      </div>
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
      <form className="form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="postContent">Post Content</label>
          <textarea
            name="postContent"
            value={description}
            onChange={handleChange}
            className
            id="postContent"
            rows="4"
            placeholder="Write your post here..."
          ></textarea>
        </div>
        <button type="submit" className="btn btn-primary btn-block mt-2">
          Post
        </button>
      </form>
    </div>
  );
};

export default CreatePost;