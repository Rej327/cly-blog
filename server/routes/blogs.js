const express = require("express");

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
router.post("/", (req, res) => {
  res.json({ mssg: "Post a new blog" });
});

module.exports = router;
