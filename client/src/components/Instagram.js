import React from "react";
import {
  Instagram1,
  Instagram2,
  Instagram3,
  Instagram4,
  Instagram5,
  Instagram6,
  Instagram7,
  Instagram8,
} from "../assets";

const Instagram = () => {
  const link1 = "https://www.instagram.com/p/CnrZDifvYx9/";
  const link2 = "https://www.instagram.com/p/CnHVzmMPHMo/";
  const link3 = "https://www.instagram.com/p/Cm9NnA7tRQa/";
  const link4 = "https://www.instagram.com/p/CQGH1Jxnmtz/";
  const link5 = "https://www.instagram.com/p/CP958ECnrUj/";
  const link6 = "https://www.instagram.com/p/CnhJRfjvfsC/";
  const link7 = "https://www.instagram.com/p/CQGHX4OHFDG/";
  const link8 = "https://www.instagram.com/p/Cm9PYbgvHc2/";

  return (
    <div className="w-full my-28 text-center">
      <h1 className="font-tenor text-xl py-5 tracking-wider">Instagram</h1>
      <div className="mx-auto p-2 grid lg:grid-cols-8 gap-0 md:grid md:grid-cols-4">
        <a href={link1} target="_blank" rel="noreferrer">
          <img
            src={Instagram1}
            alt="/"
            className="hover:contrast-50 duration-500"
          />
        </a>
        <a href={link2} target="_blank" rel="noreferrer">
          <img
            src={Instagram2}
            alt="/"
            className="hover:contrast-50 duration-500"
          />
        </a>
        <a href={link3} target="_blank" rel="noreferrer">
          <img
            src={Instagram3}
            alt="/"
            className="hover:contrast-50 duration-500"
          />
        </a>
        <a href={link4} target="_blank" rel="noreferrer">
          <img
            src={Instagram4}
            alt="/"
            className="hover:contrast-50 duration-500"
          />
        </a>
        <a href={link5} target="_blank" rel="noreferrer">
          <img
            src={Instagram5}
            alt="/"
            className="hover:contrast-50 duration-500"
          />
        </a>
        <a href={link6} target="_blank" rel="noreferrer">
          <img
            src={Instagram6}
            alt="/"
            className="hover:contrast-50 duration-500"
          />
        </a>
        <a href={link7} target="_blank" rel="noreferrer">
          <img
            src={Instagram7}
            alt="/"
            className="hover:contrast-50 duration-500"
          />
        </a>
        <a href={link8} target="_blank" rel="noreferrer">
          <img
            src={Instagram8}
            alt="/"
            className="hover:contrast-50 duration-500"
          />
        </a>
      </div>
    </div>
  );
};

export default Instagram;
