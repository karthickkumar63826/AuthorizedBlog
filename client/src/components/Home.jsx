import React from "react";
import "../styles/Home.css";
import { useNavigate } from "react-router-dom";

const Home = ({ username }) => {
  const navigate = useNavigate();

  const handleCreateBlog = () => {
    
    username ? navigate("/createblog") : navigate("/login");
  };

  return (
    <>
      <div className="home">
        <h1>Publish your passions, your way</h1>
        <p>Create unique and beautiful blog easily.</p>
        <button className="home-btn" onClick={handleCreateBlog}>
          Create Your blog
        </button>
      </div>
    </>
  );
};

export default Home;
