import React from "react";
import { profile } from "../assets";
import SocialIcons from "./SocialIcons";

const AboutMe = () => {
  return (
    <div className="w-full m-auto">
      <h1 className="font-tenor text-xl py-5 tracking-wider">ABOUT ME</h1>
      <div className="w-full h-auto">
        <img src={profile} alt="/" />
      </div>
      <div>
        <h1 className="font-tenor tracking-wide text-lg py-3">
          Carolyn Ollarte
        </h1>
        <p className="text-gray-600">
          I encourage doing something with the desire to believe in God because
          nothing great comes easy, and with God, everything is possible.
        </p>
      </div>
      <div className="mt-4">
        <SocialIcons />
      </div>
    </div>
  );
};

export default AboutMe;
