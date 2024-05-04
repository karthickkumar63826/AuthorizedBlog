const CustomeError = require("../Error/customeError");
const Blog = require("../Models/blog");
const User = require("../Models/user");

const createBlog = async (req, res, next) => {
  try {
    const user = req.user;
    const blog = req.body;
    let author = await User.findOne({ email: user.email });
    blog.author = author;
    const newBlog = await Blog.create(blog);
    res.status(200).json({ msg: "blog created successfully", blog: newBlog });
  } catch (err) {
    next(new CustomeError(err.message, 500));
  }
};


const findBlogByUser = async (req, res, next) => {
  try {
    const user = req.user;
    const author = await User.findOne({ email: user.email });

    if (!author) {
      res.status(401).send("User Not found");
    }

    const blog = await Blog.find({ author: author._id });
    res.status(201).json(blog);
  } catch (err) {
    next(new CustomeError(err.message, 500));
  }
};

module.exports = { createBlog, findBlogByUser };
