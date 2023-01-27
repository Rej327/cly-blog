import React from "react";
import formatDistanceToNow from "date-fns/formatDistanceToNow";

const BlogDetails = ({ blog }) => {
  return (
    <div
      data-aos="fade-up"
      data-aos-duration="2000"
      className=" rounded-md bg-white w-full"
    >
      <p>
        {" "}
        <img
          src={blog.file}
          alt="/"
          className="rounded-t-md hover:scale-105 duration-500"
        />
      </p>
      <div className="px-5 py-8 text-center">
        <h4 className="font-tenor text-2xl">{blog.title}</h4>
        <p className="text-[12px] text-stone-400 tracking-widest my-5">
          {formatDistanceToNow(new Date(blog.createdAt), { addSuffix: true })}
        </p>
        <p className="text-stone-500">{blog.content}</p>
      </div>
    </div>
  );
};

export default BlogDetails;
