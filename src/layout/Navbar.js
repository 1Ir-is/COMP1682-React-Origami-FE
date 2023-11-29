import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({ user }) => {
    return (
        <div className="navbar bg-primary">
            <Link to="/">
                <h2>This Is My FYP</h2>
            </Link>
            <ul>
                {user ? (
                    <>
                        <li>
                            <Link to="/origami/create">Post</Link>
                        </li>
                        <li>Welcome, {user.username}</li>
                    </>
                ) : (
                    <>
                        <li>
                            <Link to="/user/login">Login</Link>
                        </li>
                        <li>
                            <Link to="/user/register">Register</Link>
                        </li>
                    </>
                )}
            </ul>
        </div>
    );
};

export default Navbar;
