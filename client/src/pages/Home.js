import React from "react";
import MostPopularPost from "../components/MostPopularPost";
import Header from "../components/Header";
import Profile from "../components/Profile";

const Home = () => {
  return (
    <div>
      <Header />
      <MostPopularPost />
      <Profile />
    </div>
  );
};

export default Home;
