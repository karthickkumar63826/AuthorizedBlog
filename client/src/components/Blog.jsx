import React, { useEffect, useState } from "react";
import BlogCard from "./BlogCard";
import blogService from "../services/blogService";
import "../styles/blog.css";

const Blog = () => {
  const [blogs, setBlogs] = useState([]);

  const showBlogs = async () => {
    try {
      const response = await blogService.viewBlog();
      console.log(response.data);
      setBlogs(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    showBlogs();
  }, []);

  return (
    <div className="main-page">
      <div className="blog-list">
        {blogs ? (
          blogs.map((blog) => <BlogCard blog={blog} />)
        ) : (
          <h1>No blogs created </h1>
        )}
      </div>
    </div>
  );
};

export default Blog;
