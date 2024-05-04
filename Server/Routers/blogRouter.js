const { createBlog, findBlogByUser } = require("../Controllers/blogController");
const express = require("express");
const blogRoutes = express.Router();
const AuthMiddleware = require("../Middlewares/Auth");

blogRoutes.post("/", AuthMiddleware, createBlog);
blogRoutes.get("/", AuthMiddleware, findBlogByUser);

module.exports = blogRoutes;
