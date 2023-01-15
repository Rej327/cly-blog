import React from "react";
import formatDistanceToNow from "date-fns/formatDistanceToNow";

const LatestBlogList = ({ blog }) => {
  return (
    <div className="w-full overflow-scroll">
      <h1 className="font-tenor text-xl py-5 tracking-wider">Latest Blog</h1>
      <div className="flex">
        <img src={blog.file} alt="/" className="w-[100px]" />

        <div className="p-3">
          <p className="text-gray-600 pb-3 flex text-sm">
            {formatDistanceToNow(new Date(blog.createdAt), { addSuffix: true })}
          </p>
          <h1 className="font-tenor tracking-wide">{blog.title}</h1>
        </div>
      </div>
    </div>
  );
};

export default LatestBlogList;
