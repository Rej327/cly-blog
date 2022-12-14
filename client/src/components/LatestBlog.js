import React from "react";
import { CiCalendarDate } from "react-icons/ci";

const LatestBlog = () => {
  return (
    <div className="w-full">
      <h1 className="font-tenor text-xl py-5 tracking-wider">Latest Blog</h1>
      <div className="flex">
        <img
          src="https://scontent.fmnl8-2.fna.fbcdn.net/v/t39.30808-6/310449342_636919871479618_890117785491908631_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=174925&_nc_eui2=AeE9YIxgC4ceQ0Rxjbeg0k-fKpJmv9U-3Coqkma_1T7cKra8BVa9Eo2LQiot5NHmix1ttz8HvVyffJfbDDI1fBzv&_nc_ohc=FmD-fPOz6QYAX-JZF9w&tn=4QgGBYv6RHs6gwzH&_nc_ht=scontent.fmnl8-2.fna&oh=00_AfAQtkFl_yp9-cffmqORKT6nC2-gsFpIrXOXcBLImnVjLA&oe=63923C33"
          alt="/"
          className="w-[100px]"
        />
        <div className="p-3">
          <p className="text-gray-600 pb-3 flex text-sm">
            <div className="my-auto w-5 h-full">
              <CiCalendarDate />
            </div>
            November 19 2002
          </p>
          <h1 className="font-tenor tracking-wide">
            How to become a fashionist?
          </h1>
        </div>
      </div>
    </div>
  );
};

export default LatestBlog;
