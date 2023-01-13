import React from "react";
import AddBlog from "../components/AddBlog";
import SingleBlogHeader from "../components/SingleBlogHeader";

const SingleBlog = () => {
  return (
    <div>
      <SingleBlogHeader />
      <AddBlog />
    </div>
  );
};

export default SingleBlog;
