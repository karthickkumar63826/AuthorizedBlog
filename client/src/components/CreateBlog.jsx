import React, { useState, useEffect } from "react";
import blogService from "../services/blogService";
import "../styles/CreateBlog.css";
import { useNavigate } from "react-router-dom";

const CreateBlog = ({ blogDetails, setBlogDetails }) => {
  const initialState = { title: "", content: "" };
  const [blog, setBlog] = useState(initialState);
  const navigate = useNavigate();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setBlog({ ...blog, [name]: value });
  };

  useEffect(() => {
    console.log(blogDetails);
    if (blogDetails) {
      const { title, content } = blogDetails;
      const updateDetails = { title: title, content: content };
      setBlog(updateDetails);
    }
  }, []);

  const createBlog = async (blog) => {
    try {
      const response = await blogService.createBlog(blog);
      console.log(response.data.blog);
      alert("Blog created successfully");
      setBlog(initialState);
    } catch (err) {
      console.log(err);
    }
  };

  const updateBlog = async (blog, _id) => {
    try {
      const response = await blogService.updateBlog(blog, _id);
      console.log(response);
      alert("blog is updated successfully");
      setBlogDetails({});
      navigate("/blog");
    } catch (err) {
      console.log(err);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    blogDetails._id ? updateBlog(blog, blogDetails._id) : createBlog(blog);
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
              <button type="submit" className="blog-btn">
                {blogDetails._id ? "Update" : "Publish"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateBlog;
