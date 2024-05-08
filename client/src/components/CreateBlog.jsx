import React, { useState } from "react";
import blogService from "../services/blogService";
import "../styles/CreateBlog.css";

const CreateBlog = () => {
  const initialBlog = { title: "", content: "" };
  const [blog, setBlog] = useState(initialBlog);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setBlog({ ...blog, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await blogService.createBlog(blog);
      console.log(response);
      alert("Blog created successfully");
    } catch (error) {
      alert("Please enter proper content");
      console.log(error);
    }
  };
  return (
    <>
      <div className="blog">
        <div className="blog-page">
          <h1>Create your exciting Blogs and post it on our website</h1>
          <div className="create-blog">
            <form onSubmit={(e) => handleSubmit(e)} className="blog-form">
              <div className="blog-title">
                <input
                  type="text"
                  placeholder="Enter title for your blog"
                  name="title"
                  value={blog.title}
                  onChange={(e) => handleChange(e)}
                />
              </div>
              <br />
              <div className="blog-textarea">
                <textarea
                  type="text"
                  name="content"
                  placeholder="Enter your blog content..."
                  value={blog.content}
                  onChange={(e) => handleChange(e)}
                  style={{ width: "100%", height: "400px" }}
                />
              </div>
              <br />
              <button type="submit" className="blog-btn">Publish</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateBlog;
