import React, { useState } from "react";
import "../styles/Navbar.css";
import { SiMicrodotblog } from "react-icons/si";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [user, setUser] = useState("");

  return (
    <div className="navbar">
      <div className="title">
        <h1>Blog App</h1>
      </div>
      <div className="navbar-menu">
        <ul>
          {user && <li>Welcome {user}</li>}
          <li>
            <Link to="/" className="custom-link">
              Home
            </Link>
          </li>
          {user && (
            <li>
              <Link to="/logout" className="custom-link">
                Logout
              </Link>
            </li>
          )}
          <li>
            <Link to="/login" className="custom-link">
              Login
            </Link>
          </li>
          <li>
            <Link to="/register" className="custom-link">
              Register
            </Link>
          </li>
        </ul>
      </div>

      <div className="navbar-icon">
        <SiMicrodotblog size={30} />
      </div>
    </div>
  );
};

export default Navbar;
