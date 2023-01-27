import React from "react";
import { profile } from "../assets";

const AboutMeComp = () => {
  return (
    <div className="md:max-w-[900px] mx-auto md:mt-2 mt-[600px]">
      <div className="text-center p-2 mt-32">
        <p className="text-[10px] text-stone-400 font-bold tracking-widest">
          INTRODUCTION
        </p>
        <h1 className="font-tenor text-3xl py-5">Welcome to Cly Blog</h1>
      </div>
      <div>
        <p className="text-stone-500 text-center px-4">
          I believe that gorgeous girls don't gatekeep. So I wanted to share my
          lifestyle, thoughts, and journey. Here you will get to know my life,
          live with me and run in my mind virtually. I will help you discover
          more of yourself and how you will love your living. Here is something
          you probably want to check out!
          <br />
          <br />{" "}
          <strong>
            Keep in touch to know more about me and get inspired by my life.
            Enjoy!
          </strong>
        </p>
      </div>
      <div className="md:grid md:grid-cols-3 md:mt-28 p-4 ">
        <div className="max-w-[250px] mx-auto">
          <h1 className="font-tenor py-4 text-2xl text-center md:text-left">
            Profile
          </h1>
          <img src={profile} alt="/" />
        </div>
        <div className="col-span-2">
          <p className="text-stone-500 py-4 px-4">
            Hi! This is <strong>Carolyn Ollarte</strong>
            <br />
            Currently, I am 20 years old. I was named Carolyn Ollarte and was
            raised in the country of Philippines, Quezon Province, in the
            municipality of Catanauan. I encourage doing something with the
            desire to believe in God because nothing great comes easy, and with
            God, everything is possible.
            <br />
            <br />
            Growing up, I programmed my mind that my purpose in life would
            become someday, I can be an inspiration to anybody else when I
            finally reached my dreams. However, I thought that our “journey” has
            a great contribution to become an inspiration. So this blog, would
            serve as my memories bank that someday I could tell to somebody
            else.
          </p>
          <ul className="text-stone-400 list-disc pl-10">
            <h6>Here you'll read:</h6>
            <li>My lifestyle</li>
            <li>My life as a Tourism Student </li>
            <li>My random thoughts</li>
            <li>My memories </li>
            <li>My journey</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AboutMeComp;
