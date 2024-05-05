import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Register from "./components/Register";
import Login from "./components/Login";
import { useState } from "react";
import CreateBlog from "./components/CreateBlog";
import Blog from "./components/Blog";

const App = () => {
  const [username, setUsername] = useState("");
  return (
    <>
      <BrowserRouter>
        <Navbar username={username} />
        <Routes>
          <Route path="/" element={<Home username={username} />} />
          <Route path="/login" element={<Login setUsername={setUsername} />} />
          <Route path="/register" element={<Register />} />
          <Route path="/createblog" element={<CreateBlog />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
