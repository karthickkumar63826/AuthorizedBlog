import React, { useEffect } from "react";
import "../styles/blog.css";
import { Link, useNavigate } from "react-router-dom";
import blogService from "../services/blogService";

const BlogCard = ({ blog, setBlogDetails, setIsEditable }) => {
  const username = localStorage.getItem("userData");
  const navigate = useNavigate();

  const handleUpdate = (blog) => {
    setIsEditable(true);
    setBlogDetails(blog);
  };

  const handleDelete = async (blog) => {
    try {
      const response = await blogService.deleteBlog(blog);
      console.log(response);
      alert("Blog is deleted successfully");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="blog-card">
        <div className="card">
          <h3>{blog.title}</h3>
          <hr />
          <div className="content">
            <p>{blog.content}</p>
            <p>-{username}</p>
          </div>
          <div className="created">
            <p>Created at : {blog.createdAt}</p>
            <p>Updated at : {blog.updatedAt}</p>
          </div>
        </div>
        <div className="blog-card-btn">
          <Link to="/updateblog" className="Link-btn">
            <button className="blog-btn" onClick={() => handleUpdate(blog)}>
              Update
            </button>
          </Link>

          <button className="blog-btn" onClick={() => handleDelete(blog)}>
            Delete
          </button>
        </div>
      </div>
    </>
  );
};

export default BlogCard;
