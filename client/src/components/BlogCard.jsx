import React, { useEffect } from "react";
import "../styles/blog.css";

const BlogCard = ({ blog }) => {
  const username = localStorage.getItem("userData");

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
          <button>Update</button>
          <button>Delete</button>
        </div>
      </div>
    </>
  );
};

export default BlogCard;
