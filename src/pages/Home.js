import React, { useState, useEffect } from "react";
import { origamiAPI } from "../api/api"; // Import the API methods

const Home = () => {
  const [origamiData, setOrigamiData] = useState([]);

  useEffect(() => {
    // Fetch data when the component mounts
    origamiAPI.getAllOrigami()
      .then(response => setOrigamiData(response.data))
      .catch(error => console.error("Error fetching data:", error));
  }, []); // Empty dependency array ensures this effect runs once on mount

  return (
    <div className="container">
      <h1 className="x-large text-primary text-center">Origami Collection</h1>
      <div className="grid-3">
        {origamiData.map(origami => (
          <div key={origami.id} className="card">
            <p className="text-primary">{origami.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
