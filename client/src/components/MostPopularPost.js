import React, { useEffect, useState } from "react";
import "aos/dist/aos.css";
import Masonry from "react-masonry-css";
import BlogDetails from "./BlogDetails";
import Qoutes from "./Qoutes";

const MostPopularPost = () => {
  const breakpointColumnsObj = {
    default: 3,
    1024: 3,
    834: 2,
    414: 1,
  };

  const [blogs, setBlogs] = useState(null);

  useEffect(() => {
    const fetchBlogs = async () => {
      const response = await fetch(
        "https://cly-blog-db.onrender.com/api/blogs" || "/api/blogs"
      );
      const json = await response.json();

      if (response.ok) {
        setBlogs(json);
      }
    };

    fetchBlogs();
  }, []);

  return (
    <div className="mt-[600px] sm:my-auto max-w-[1024px] mx-auto h-full">
      <div className="w-auto h-full mx-auto my-24 ">
        <div
          data-aos="fade-up"
          data-aos-duration="2000"
          className="text-center max-w-[600px] h-28 mx-auto"
        >
          <p className="text-[10px] text-stone-400 font-bold tracking-widest">
            LATEST POST
          </p>
          <h1 className="text-4xl my-3 tracking-wide">Whats'hot</h1>
        </div>
        <div className="mx-auto w-full h-full gap-8 px-4">
          <Masonry
            breakpointCols={breakpointColumnsObj}
            className="my-masonry-grid"
            columnClassName="my-masonry-grid_column"
          >
            <Qoutes />
            {blogs &&
              blogs.map((blog) => <BlogDetails key={blog._id} blog={blog} />)}
          </Masonry>
        </div>
      </div>
    </div>
  );
};

export default MostPopularPost;
