const express = require("express");
const {
  createBlog,
  getSingleBlog,
  getAllBlogs,
} = require("../controllers/blogController");
const Blog = require("../models/blogModel");

const router = express.Router();

//GET all blogs
router.get("/", getAllBlogs);

//GET a single blog
router.get("/:id", getSingleBlog);

//POST a new blog
router.post("/", createBlog);

module.exports = router;
