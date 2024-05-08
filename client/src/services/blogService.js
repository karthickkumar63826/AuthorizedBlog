import axios from "axios";

const createBlog = async (data) => {
  console.log(data);
  console.log("This is  create service");

  const token = await localStorage.getItem("token");
  return await axios.post("http://localhost:8000/blog", data, {
    headers: {
      Authorization: `Bearer ` + JSON.parse(token),
    },
  });
};

const viewBlog = async () => {
  const token = localStorage.getItem("token");
  return await axios.get("http://localhost:8000/blog", {
    headers: {
      Authorization: "Bearer " + JSON.parse(token),
    },
  });
};

const updateBlog = async (blog) => {
  console.log("This is an update service");
  const { _id } = blog;
  const token = localStorage.getItem("token");
  return await axios.put(`http://localhost:8000/blog/${_id}`, blog, {
    headers: {
      Authorization: "Bearer " + JSON.parse(token),
    },
  });
};

const deleteBlog = async (blog) => {
  console.log("the code is reaching here to delete service");
  const { _id } = blog;
  const token = localStorage.getItem("token");
  return await axios.delete(`http://localhost:8000/blog/${_id}`, {
    headers: {
      Authorization: "Bearer " + JSON.parse(token),
    },
  });
};

const blogService = {
  createBlog,
  viewBlog,
  updateBlog,
  deleteBlog,
};

export default blogService;
