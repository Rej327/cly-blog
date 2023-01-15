import React, { useState, useEffect } from "react";
import LatestBlogList from "./LatestBlogList";

const LatestBlog = () => {
  const [blogs, setBlogs] = useState(null);

  useEffect(() => {
    const fetchBlogs = async () => {
      const response = await fetch("/api/blogs");
      const json = await response.json();

      if (response.ok) {
        setBlogs(json);
      }
    };

    fetchBlogs();
  }, []);

  return (
    <div className="w-full">
      {blogs &&
        blogs.map((blog) => <LatestBlogList key={blog._id} blog={blog} />)}
    </div>
  );
};

export default LatestBlog;
