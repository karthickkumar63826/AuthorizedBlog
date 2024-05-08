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
    res.status(200).json({ blog: newBlog });
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

const findBlogById = async (req, res, next) => {
  try {
    blogId = req.params.id;
    const findedBlog = await Blog.findOne({ _id: blogId });
    res.status(201).json({ findedBlog });
  } catch (error) {
    next(new CustomeError(error.message));
  }
};

const updateBlog = async (req, res, next) => {
  console.log("updated blog page");
  try {
    const _id = req.params.id;
    const updatedBlog = req.body;
    const updatedNewBlog = await Blog.findByIdAndUpdate(
      { _id: _id },
      { $set: { updatedBlog } }
    );
    console.log("blog is updated successfully");
    res.status(201).json({ msg: "blog updated successfully", updatedNewBlog });
  } catch (err) {
    next(new CustomeError(err.message, 500));
  }
};

const deleteBlog = async (req, res, next) => {
  try {
    const _id = req.params.id;
    const deletedBlog = await Blog.findByIdAndDelete(_id);
    res
      .status(200)
      .json({ message: "Blog deleted successfully",  blog : deletedBlog });
  } catch (err) {
    next(new CustomeError(err.message, err.status || 500));
  }
};

const getAllBlogs = async (req, res, next) => {
  try {
    const blogs = await Blog.find().populate('author', 'username');
    console.log(blogs);
    res.status(201).json(blogs);
  } catch (err) {
    console.log(err);
    next(new CustomeError(err.message, 500));
  }
};

module.exports = {
  createBlog,
  findBlogByUser,
  updateBlog,
  findBlogById,
  deleteBlog,
  getAllBlogs,
};
