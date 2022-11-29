import React from "react";
import Swipe from "./Swipe";

const Header = () => {
  return (
    <div>
      <div className="w-full flex mx-auto h-[580px]">
        <div className="w-[30%] bg-[#8EC3B0] px-8 py-10 text-white">
          <h2 className="text-3xl tracking-widest">CLY AGENCY.</h2>
          <h1 className="font-tenor text-[2.5rem] leading-none my-40">
            We Are Functional & Creative Agency
          </h1>
        </div>
        <div className="w-[70%]">
          <Swipe />
        </div>
      </div>
    </div>
  );
};

export default Header;
