import React from "react";
import Swipe from "./Swipe";

const Header = () => {
  return (
    <div>
      <div className="w-full mx-auto h-[580px] md:flex">
        <div className="md:w-[30%] bg-[#E2B8AC] px-5 py-10 text-white">
          <h1 className="font-tenor text-[2rem] md:text-[2.5rem] leading-none my-20 md:my-40">
            We Are Functional & Creative Agency
          </h1>
        </div>
        <div className="md:w-[70%]">
          <Swipe />
        </div>
      </div>
    </div>
  );
};

export default Header;
