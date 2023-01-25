import React from "react";
import AboutMeComp from "../components/AboutMeComp";
import Header from "../components/Header";
import Instagram from "../components/Instagram";
import Profile from "../components/Profile";

const AboutMePage = () => {
  return (
    <div>
      <Header />
      <AboutMeComp />
      <Instagram />
      <Profile />
    </div>
  );
};

export default AboutMePage;
