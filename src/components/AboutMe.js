import React from "react";
import { profile } from "../assets";

const AboutMe = () => {
  return (
    <div>
      <h1>About Me</h1>
      <div>
        <img src={profile} alt="/" />
      </div>
      <div>
        <h1>Carolyn Ollarte</h1>
        <p>A small river named Duden flows by their place and supplies.</p>
      </div>
    </div>
  );
};

export default AboutMe;
