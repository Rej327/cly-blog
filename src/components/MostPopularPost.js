import React from "react";
import { fashionist, places, jeans, food } from "../assets";
import SlidePost from "./SlidePost";

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
            <img
              src={fashionist}
              alt="/"
              className="rounded-t-md hover:scale-105 duration-500"
            />
            <div className="px-5 py-8 text-center">
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
              <button class="bg-[#E2B8AC] hover:bg-[#e0bbb0] text-white  my-5 py-2 px-4 rounded-full hover:drop-shadow-md duration-500 hover:scale-105">
                Read More
              </button>
            </div>
          </div>
          <div className=" rounded-md bg-white h-[48rem] w-full">
            <img
              src={places}
              alt="/"
              className="rounded-t-md hover:scale-105 duration-500"
            />
            <div className="px-5 py-8 text-center">
              <h1 className="font-tenor text-2xl">
                30 Places you want to visits
              </h1>
              <p className="text-[12px] text-stone-400 tracking-widest my-5">
                Feb 07, 2018 | Web Design
              </p>
              <p className="text-stone-500">
                Separated they live in Bookmarksgrove right at the coast of the
                Semantics, a large language ocean.
              </p>
              <button class="bg-[#E2B8AC] hover:bg-[#e0bbb0] text-white  my-5 py-2 px-4 rounded-full hover:drop-shadow-md duration-500 hover:scale-105">
                Read More
              </button>
            </div>
          </div>
          <div className=" rounded-md bg-white h-[38rem] w-full">
            <div className="w-full h-80">
              <SlidePost />
            </div>
            <div className="px-5 py-8 text-center">
              <h1 className="font-tenor text-2xl">Slideshow post - Images</h1>
              <p className="text-[12px] text-stone-400 tracking-widest my-5">
                Feb 07, 2018 | Web Design
              </p>
              <p className="text-stone-500">
                Separated they live in Bookmarksgrove right at the coast of the
                Semantics, a large language ocean.
              </p>
              <button class="bg-[#E2B8AC] hover:bg-[#e0bbb0] text-white  my-5 py-2 px-4 rounded-full hover:drop-shadow-md duration-500 hover:scale-105">
                Read More
              </button>
            </div>
          </div>
          <div className="bg-red-600 h-[35rem] my-[-10rem] w-full"></div>
          <div className="bg-red-600 h-[45rem] w-full"></div>
          <div className="bg-red-600 h-[35rem] my-[-10rem] w-full"></div>
        </div>
      </div>
    </div>
  );
};

export default MostPopularPost;
