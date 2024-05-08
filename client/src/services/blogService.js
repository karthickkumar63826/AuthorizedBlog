import axios from "axios";

const createBlog = async (data) => {
  console.log(data);

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

const blogService = {
  createBlog,
  viewBlog,
};

export default blogService;
