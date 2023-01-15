import React, { useEffect, useState } from "react";
// import SlidePost from "./SlidePost";
// import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import "aos/dist/aos.css";
// import Qoutes from "./Qoutes";
// import blogs from "../data/blogs.json";
import Masonry from "react-masonry-css";
import BlogDetails from "./BlogDetails";

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
      const response = await fetch("/api/blogs");
      const json = await response.json();

      if (response.ok) {
        setBlogs(json);
      }
    };

    fetchBlogs();
  }, []);

  return (
    <div className="max-w-[1024px] mx-auto h-full">
      <div className="w-auto h-full mx-auto my-24 ">
        <div
          data-aos="fade-up"
          data-aos-duration="2000"
          className="text-center w-[600px] h-28 mx-auto"
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
            {blogs &&
              blogs.map((blog) => <BlogDetails key={blog._id} blog={blog} />)}

            {/* {blogs.map((blogs) => (
              <div
                data-aos="fade-up"
                data-aos-duration="2000"
                className=" rounded-md bg-white w-full"
              >
                {blogs.img ? (
                  <img
                    src={blogs.img}
                    alt="/"
                    className="rounded-t-md hover:scale-105 duration-500"
                  />
                ) : undefined}

                {blogs.video ? (
                  <video src={blogs.video} autoPlay="true" loop controls />
                ) : undefined}

                {blogs.component ? <SlidePost /> : undefined}

                {blogs.components ? <Qoutes /> : undefined}

                {blogs.audio ? (
                  <audio className="mx-auto mt-5" src={blogs.audio} controls />
                ) : undefined}

                <div className="px-5 py-8 text-center">
                  <h1 className="font-tenor text-2xl">{blogs.head}</h1>
                  <p className="text-[12px] text-stone-400 tracking-widest my-5">
                    Post: {""}
                    {blogs.date}
                  </p>
                  <p className="text-stone-500">{blogs.content}</p>
                  <button className="bg-[#E2B8AC] hover:bg-[#e0bbb0] text-white  my-5 py-2 px-4 rounded-full hover:drop-shadow-md duration-500 hover:scale-105">
                    {blogs.button}
                  </button>
                </div>
              </div>
            ))} */}
          </Masonry>
          {/* </Masonry>
          </ResponsiveMasonry> */}
        </div>
      </div>
    </div>
  );
};

export default MostPopularPost;
