const Blog = require("../models/blogModel");
const mongoose = require("mongoose");

// get all blogs
const getAllBlogs = async (req, res) => {
  const blogs = await Blog.find({}).sort({ createdAt: -1 });

  res.status(200).json(blogs);
};

// get a single bog
const getSingleBlog = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No blog founded" });
  }

  const blog = await Blog.findById(id);

  if (!blog) {
    return res.status(404).json({ error: "No blog founded" });
  }

  res.status(200).json(blog);
};

// create a new blog
const createBlog = async (req, res) => {
  const { title, content, file } = req.body;

  // add blog to db
  try {
    const blog = await Blog.create({ title, content, file });
    res.status(200).json(blog);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  createBlog,
  getSingleBlog,
  getAllBlogs,
};
