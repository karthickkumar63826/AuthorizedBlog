const {
  createBlog,
  findBlogByUser,
  updateBlog,
  findBlogById,
  deleteBlog,
  getAllBlogs,
} = require("../Controllers/blogController");
const express = require("express");
const blogRoutes = express.Router();
const AuthMiddleware = require("../Middlewares/Auth");

blogRoutes.get("/blogs", getAllBlogs);
blogRoutes.post("/", AuthMiddleware, createBlog);
blogRoutes.get("/", AuthMiddleware, findBlogByUser);
blogRoutes.put("/:id", AuthMiddleware, updateBlog);
blogRoutes.get("/:id", AuthMiddleware, findBlogById);
blogRoutes.delete("/:id", AuthMiddleware, deleteBlog);

module.exports = blogRoutes;
