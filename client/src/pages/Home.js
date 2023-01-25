import React from "react";
import MostPopularPost from "../components/MostPopularPost";
import Header from "../components/Header";
import Profile from "../components/Profile";
import Instagram from "../components/Instagram";

const Home = () => {
  return (
    <div>
      <Header />
      <MostPopularPost />
      <Instagram />
      <Profile />
    </div>
  );
};

export default Home;
