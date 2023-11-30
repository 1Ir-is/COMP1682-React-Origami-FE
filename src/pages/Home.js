import React, { useState, useEffect, useContext } from "react";
import { origamiAPI } from "../api/api";
import origamiContext from "../context/origamiContext";

const Home = () => {
    const context = useContext(origamiContext)
    const {user, logoutUser} = context;
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
            {user ? (
                // Render origami data if the user is logged in
                <div className="grid-3">
                    {origamiData.map(origami => (
                        <div key={origami.id} className="card">
                        <p className="text-primary">{origami.description}</p>
                        </div>
                    ))}
                    <div>
                        <button 
                            onClick={logoutUser}
                        className="btn btn-dark btn-block">Logout</button>"
                        </div>
                </div>
            ) : (
                // Render something else if the user is not logged in
                <p>Please log in to view origami collection.</p>
            )}
        </div>
    );
};

export default Home;
