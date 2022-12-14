import React from "react";
import { writting } from "../assets";

const SingleBlogHeader = () => {
  return (
    <div>
      <div className="w-full mx-auto h-[580px] md:flex">
        <div className="md:w-[30%] bg-[#E2B8AC] px-5 py-10 text-white">
          <h1 className="font-tenor text-[2rem] md:text-[2.5rem] leading-none my-20 md:my-40">
            Single Blog
          </h1>
        </div>
        <div className="md:w-[70%] ">
          <img
            src={writting}
            alt="/"
            className="h-full w-full bg-[#00000038] hover:bg-[#00000080] duration-200 cursor-pointer object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default SingleBlogHeader;
