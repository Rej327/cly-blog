import React from "react";

const Blogs = () => {
  return (
    <div className="w-full min-h-full">
      <div className="w-[940px] h-full mx-auto py-4 bg-white">
        <div className="w-full h-52">
          <img className="w-full mx-auto h-full object-cover"></img>
        </div>
        <div>
          <p className="text-[12px] text-stone-400 tracking-widest my-5">
            Date
          </p>
        </div>
        <div>
          <h1 className="font-tenor text-2xl">Head</h1>
          <p className="text-stone-500">Content</p>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
