const express = require("express");

require("dotenv").config();

// express app
const app = express();

//middleware
app.use(express.json());
app.use((res, req, next) => {
  console.log(req.path, req.method);
  next();
});

// routes
app.get("/", (req, res) => {
  res.json({ blog: "My Blog" });
});

// listen for request
app.listen(process.env.PORT, () => {
  console.log("Server started on port", process.env.PORT);
});
