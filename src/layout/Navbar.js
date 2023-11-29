import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar bg-primary">
      <h2>This Is My FYP</h2>
      <ul>
        <li>
            <Link to="/origami/create">Post</Link>
        </li>
        <li>
            <Link to="/user/login">Login</Link>
        </li>
        <li>
            <Link to="/user/register">Register</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;