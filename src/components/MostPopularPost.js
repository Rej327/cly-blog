import React from "react";
import SlidePost from "./SlidePost";
import { data } from "../data/data";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

import "aos/dist/aos.css";

const MostPopularPost = () => {
  return (
    <div className="w-full h-full">
      <div className="w-[1160px] h-full mx-auto my-24 ">
        <div
          data-aos="fade-up"
          data-aos-duration="2000"
          className="text-center w-[600px] h-28 mx-auto"
        >
          <p className="text-[10px] text-stone-400 font-bold tracking-widest">
            MOST POPULAR POST
          </p>
          <h1 className="text-4xl my-3 tracking-wide">Whats'hot</h1>
        </div>
        <div className="mx-auto w-full h-full gap-8 px-4">
          <ResponsiveMasonry
            columnsCountBreakPoints={{ 320: 1, 768: 2, 900: 3 }}
          >
            <Masonry gutter="20px">
              {data.map((data) => (
                <div
                  data-aos="fade-up"
                  data-aos-duration="2000"
                  className=" rounded-md bg-white w-full"
                >
                  <img
                    src={data.img}
                    className="rounded-t-md hover:scale-105 duration-500"
                  />

                  {data.video ? (
                    <video src={data.video} autoPlay="true" loop controls />
                  ) : undefined}

                  {data.component ? <SlidePost /> : undefined}

                  <div className="px-5 py-8 text-center">
                    <h1 className="font-tenor text-2xl">{data.head}</h1>
                    <p className="text-[12px] text-stone-400 tracking-widest my-5">
                      {data.date}
                    </p>
                    <p className="text-stone-500">{data.content}</p>
                    <button class="bg-[#E2B8AC] hover:bg-[#e0bbb0] text-white  my-5 py-2 px-4 rounded-full hover:drop-shadow-md duration-500 hover:scale-105">
                      {data.button}
                    </button>
                  </div>
                </div>
              ))}
            </Masonry>
          </ResponsiveMasonry>
        </div>
      </div>
    </div>
  );
};

export default MostPopularPost;
