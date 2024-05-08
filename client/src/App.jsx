import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Register from "./components/Register";
import Login from "./components/Login";
import { useEffect, useState } from "react";
import CreateBlog from "./components/CreateBlog";
import Blog from "./components/Blog";
import Logout from "./components/logout";

const App = () => {
  const [username, setUsername] = useState("");
  const [blogDetails, setBlogDetails] = useState({});
  const [isEditable, setIsEditable] = useState(false);
  useEffect(() => {
    const username = localStorage.getItem("userData");
    setUsername(username);
  }, []);
  return (
    <>
      <BrowserRouter>
        <Navbar username={username} />
        <Routes>
          <Route path="/" element={<Home username={username} />} />
          <Route path="/login" element={<Login setUsername={setUsername} />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/createblog"
            element={
              <CreateBlog
                blogDetails={blogDetails}
                isEditable={isEditable}
                setIsEditable={setIsEditable}
              />
            }
          />
          <Route
            path="/updateblog"
            element={<CreateBlog blogDetails={blogDetails} />}
          />
          <Route
            path="/blog"
            element={
              <Blog
                setBlogDetails={setBlogDetails}
                setIsEditable={setIsEditable}
              />
            }
          />
          <Route
            path="/logout"
            element={<Logout setUsername={setUsername} />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
