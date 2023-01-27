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
    <div className="mx-auto">
      <h1 className="font-tenor text-xl tracking-wider py-5">LATEST BLOG</h1>
      <div className="w-full overflow-scroll max-h-[520px]">
        {blogs &&
          blogs.map((blog) => <LatestBlogList key={blog._id} blog={blog} />)}
      </div>
    </div>
  );
};

export default LatestBlog;
