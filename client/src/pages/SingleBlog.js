import React from "react";
import AddBlog from "../components/AddBlog";
import Blogs from "../components/Blogs";
import SingleBlogHeader from "../components/SingleBlogHeader";

const SingleBlog = () => {
  return (
    <div>
      <SingleBlogHeader />
      {/* <Blogs /> */}
      <AddBlog />
    </div>
  );
};

export default SingleBlog;
