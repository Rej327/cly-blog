import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { TfiClose } from "react-icons/tfi";
import { Link } from "react-router-dom";
import { toggleStyle } from "../global-styles/globalstyles";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="flex justify-between absolute items-center h-24 z-[999] w-full mx-auto px-5 text-black">
      <h2 className="text-2xl sm:text-3xl tracking-widest text-white">
        CLY AGENCY.
      </h2>
      <div onClick={handleNav} className="block cursor-pointer text-white">
        {nav ? <AiOutlineMenu size={30} /> : <AiOutlineMenu size={30} />}
      </div>
      <div className={nav ? toggleStyle.NAVTOOGLE : toggleStyle.NAVTOOGLEOUT}>
        <TfiClose
          onClick={handleNav}
          className="w-8 h-8 font-thin cursor-pointer mt-4 ml-auto hover:bg-[#E2B8AC] hover:text-white rounded-md p-1 duration-500"
        />
        <ul className="mt-20">
          <Link to="/">
            <li>BLOG</li>
          </Link>
          <Link to="/single-blog">
            <li>SINGLE BLOG</li>
          </Link>
          <li>ABOUT ME</li>
          <li>CONTACT ME</li>
        </ul>
        <div></div>
      </div>
    </div>
  );
};

export default Navbar;
