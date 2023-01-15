import React from "react";
import { SocialIcon } from "react-social-icons";

const AboutMePage = () => {
  return (
    <div>
      <div>
        <p>INTRODUCTION</p>
        <h1>Welcome to Cly Blog</h1>
      </div>
      <div>
        <p>
          Far far away, behind the word mountains, far from the countries
          Vokalia and Consonantia, there live the blind texts. Separated they
          live in Bookmarksgrove right at the coast of the Semantics, a large
          language ocean. A small river named Duden flows by their place and
          supplies it with the necessary regelialia. It is a paradisematic
          country, in which roasted parts of sentences fly into your mouth.
        </p>
      </div>
      <div>
        <div>
          <img src="image.jpg" alt="/" />
        </div>
        <div>
          <h1>Carolyn Ollarte</h1>
          <p>
            A small river named Duden flows by their place and supplies it with
            the necessary regelialia. Far far away, behind the word mountains,
            far from the countries Vokalia and Consonantia, there live the blind
            texts. Separated they live in Bookmarksgrove right at the coast of
            the Semantics, a large language ocean. A small river named Duden
            flows by their place and supplies it with the necessary regelialia.
            It is a paradisematic country, in which roasted parts of sentences
            fly into your mouth.
          </p>
          <ul>
            <li>Far far away, behind the word mountains</li>
            <li>A small river named Duden flows by their place and supplies</li>
            <li>
              It is a paradisematic country, in which roasted parts of sentences
              fly into your mouth.
            </li>
          </ul>
          <div>
            <SocialIcon />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMePage;
