const express = require("express");
const Blog = require("../models/blogModel");

const router = express.Router();

//GET all blogs
router.get("/", (req, res) => {
  res.json({ mssg: "Get all blogs" });
});

//GET a single blog
router.get("/:id", (req, res) => {
  res.json({ mssg: "Get a single blog" });
});

//POST a new blog
router.post("/", async (req, res) => {
  const { title, content, file } = req.body;

  try {
    const blog = await Blog.create({ title, content, file });
    res.status(200).json(blog);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
  res.json({ mssg: "Post a new blog" });
});

module.exports = router;
