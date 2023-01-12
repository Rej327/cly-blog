const express = require("express");
const {
  createBlog,
  getSingleBlog,
  getAllBlogs,
  getAllImage,
} = require("../controllers/blogController");
const Blog = require("../models/blogModel");

const router = express.Router();

//GET all blogs
router.get("/", getAllBlogs);

//GET all blogs
router.get("/", getAllImage);

//GET a single blog
router.get("/:id", getSingleBlog);

//POST a new blog
router.post("/", createBlog);

module.exports = router;
