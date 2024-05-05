import React, { useState } from "react";

const CreateBlog = () => {
  const initialBlog = { title: "", content: "" };
  const [blog, setBlog] = useState(initialBlog);
  return (
    <>
      <div className="blog-page">
        <h1>Create an exciting Blogs and post </h1>
        
      </div>
    </>
  );
};

export default CreateBlog;
