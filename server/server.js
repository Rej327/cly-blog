require("dotenv").config();
const express = require("express");
const blogRoutes = require("./routes/blogs");

// express app
const app = express();

//middleware
app.use(express.json());

app.use((res, req, next) => {
  console.log(req.path, req.method);
  next();
});

// routes
app.use("/api/blogs", blogRoutes);

// listen for request
app.listen(process.env.PORT, () => {
  console.log("Server started on port", process.env.PORT);
});
