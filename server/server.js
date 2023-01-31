require("dotenv").config();
const express = require("express");
const blogRoutes = require("./routes/blogs");
const mongoose = require("mongoose");
const cors = require("cors");

// express app
const app = express();

//middleware
app.use(express.json());

//cors
app.use(cors());

app.use((res, req, next) => {
  console.log(req.path, req.method);
  next();
});

// routes
app.use("/api/blogs", blogRoutes);

// connect to db
mongoose.set("strictQuery", false);
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    // listen for request
    app.listen(
      process.env.PORT || "https://cly-blog.onrender.com/api/blogs",
      () => {
        console.log("connected to db and listening on port", process.env.PORT);
      }
    );
  })
  .catch((error) => {
    console.log(error);
  });
