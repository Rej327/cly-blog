import React from "react";
import { profile } from "../assets";

const AboutMeComp = () => {
  return (
    <div className="max-w-[900px] mx-auto mt-2">
      <div className="text-center p-2 mt-32">
        <p className="text-[10px] text-stone-400 font-bold tracking-widest">
          INTRODUCTION
        </p>
        <h1 className="font-tenor text-3xl py-5">Welcome to Cly Blog</h1>
      </div>
      <div>
        <p className="text-stone-500 text-center">
          Far far away, behind the word mountains, far from the countries
          Vokalia and Consonantia, there live the blind texts. Separated they
          live in Bookmarksgrove right at the coast of the Semantics, a large
          language ocean. A small river named Duden flows by their place and
          supplies it with the necessary regelialia. It is a paradisematic
          country, in which roasted parts of sentences fly into your mouth.
        </p>
      </div>
      <div className="grid grid-cols-3 mt-28">
        <div className="max-w-[250px] my-auto mx-auto">
          <img src={profile} alt="/" />
        </div>
        <div className="col-span-2">
          <h1 className="font-tenor text-2xl">Carolyn Ollarte</h1>
          <p className="text-stone-500 py-4">
            A small river named Duden flows by their place and supplies it with
            the necessary regelialia. Far far away, behind the word mountains,
            far from the countries Vokalia and Consonantia, there live the blind
            texts. Separated they live in Bookmarksgrove right at the coast of
            the Semantics, a large language ocean. A small river named Duden
            flows by their place and supplies it with the necessary regelialia.
            It is a paradisematic country, in which roasted parts of sentences
            fly into your mouth.
          </p>
          <ul className="text-stone-400 list-disc pl-10">
            <li>Far far away, behind the word mountains</li>
            <li>A small river named Duden flows by their place and supplies</li>
            <li>
              It is a paradisematic country, in which roasted parts of sentences
              fly into your mouth.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AboutMeComp;
