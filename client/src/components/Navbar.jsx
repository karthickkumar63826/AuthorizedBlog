import React, { useState } from "react";
import "../styles/Navbar.css";
import { SiMicrodotblog } from "react-icons/si";
import { Link } from "react-router-dom";

const Navbar = ({ username }) => {
  return (
    <div className="main-navbar">
      <div className="title">
        <h1>Blog </h1>
        <div className="navbar-icon">
          <Link to="/">
            <SiMicrodotblog size={30} style={{color:"#323232"}} />
          </Link>
        </div>
      </div>
      <div className="navbar-menu">
        <ul>
          {username && (
            <li>
              Welcome <b>{username}</b>
            </li>
          )}
          <li>
            <Link to="/" className="custom-link">
              Home
            </Link>
          </li>
          {username && (
            <>
              <li>
                <Link to="/blog" className="custom-link">
                  Blogs
                </Link>
              </li>
              <li>
                <Link to="/logout" className="custom-link">
                  Logout
                </Link>
              </li>
            </>
          )}
          {!username && (
            <li>
              <Link to="/login" className="custom-link">
                Login
              </Link>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
