import React from "react";
import {
  fashionist,
  visits,
  slide1,
  slide2,
  slide3,
  jeans,
  food,
} from "../assets";

const MostPopularPost = () => {
  return (
    <div className="w-full h-full">
      <div className="w-[1160px] h-full mx-auto my-24 ">
        <div className="text-center w-[600px] h-28 mx-auto">
          <p className="text-[10px] text-stone-400 font-bold tracking-widest">
            MOST POPULAR POST
          </p>
          <h1 className="text-4xl my-3 tracking-wide">Whats'hot</h1>
        </div>
        <div className="grid grid-cols-3 mx-auto w-full h-full gap-8 px-4">
          <div className=" rounded-md bg-white h-[35rem] w-full">
            <img src={fashionist} alt="/" />
            <div className="px-5 py-10 text-center">
              <h1 className="font-tenor text-2xl">
                How to become a fashionist?
              </h1>
              <p className="text-[12px] text-stone-400 tracking-widest my-5">
                Feb 07, 2018 | Web Design
              </p>
              <p className="text-stone-500">
                Separated they live in Bookmarksgrove right at the coast of the
                Semantics, a large language ocean.
              </p>
              <button class="bg-[#E2B8AC] hover:bg-[#e0bbb0] text-white font-bold my-4 py-2 px-4 rounded-full">
                Read More
              </button>
            </div>
          </div>
          <div className="bg-red-600 h-[45rem] w-full"></div>
          <div className="bg-red-600 h-[35rem] w-full"></div>
          <div className="bg-red-600 h-[35rem] my-[-10rem] w-full"></div>
          <div className="bg-red-600 h-[45rem] w-full"></div>
          <div className="bg-red-600 h-[35rem] my-[-10rem] w-full"></div>
        </div>
      </div>
    </div>
  );
};

export default MostPopularPost;
