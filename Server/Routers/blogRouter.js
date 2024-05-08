const {
  createBlog,
  findBlogByUser,
  updateBlog,
} = require("../Controllers/blogController");
const express = require("express");
const blogRoutes = express.Router();
const AuthMiddleware = require("../Middlewares/Auth");

blogRoutes.post("/", AuthMiddleware, createBlog);
blogRoutes.get("/", AuthMiddleware, findBlogByUser);
blogRoutes.put("/updateBlog", AuthMiddleware, updateBlog);

module.exports = blogRoutes;
