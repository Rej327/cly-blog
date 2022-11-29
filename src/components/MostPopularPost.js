import React from "react";

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
          <div className="bg-red-600 h-[35rem] w-full"></div>
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
